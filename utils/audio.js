import { Audio } from 'expo-av';
import { loadGameState } from './gameState'; // Import loadGameState

const sounds = {
  hit: require('../assets/sounds/hit.mp3'),
  correctAnswer: require('../assets/sounds/correct.mp3'),
  wrongAnswer: require('../assets/sounds/incorrect.mp3'),
  victory: require('../assets/sounds/victory.mp3'),
  defeat: require('../assets/sounds/defeat.mp3'),
  switch: require('../assets/sounds/switch.mp3'),
  faint: require('../assets/sounds/faint.mp3'),
  question: require('../assets/sounds/question.mp3'),
  click: require('../assets/sounds/click.mp3'),
};

const music = {
  home: require('../assets/music/home.mp3'),
  battle1: require('../assets/music/battle-1.mp3'),
  battle2: require('../assets/music/battle-2.mp3'),
  battle3: require('../assets/music/battle-3.mp3'),
  map: require('../assets/music/map.mp3'),
};

let bgMusic = null;
let currentMusicName = null; 

let settingsChangeListeners = [];

// Function to add a listener for settings changes
export const addSettingsChangeListener = (listener) => {
  settingsChangeListeners.push(listener);
  return () => {
    // Return a cleanup function that removes the listener
    settingsChangeListeners = settingsChangeListeners.filter(l => l !== listener);
  };
};

// Function to notify all listeners of settings changes
export const notifySettingsChanged = async () => {
  const gameState = await loadGameState();
  const musicEnabled = gameState.settings?.musicEnabled !== false;
  
  // If music setting changed and we have active music
  if (bgMusic && currentMusicName) {
    if (!musicEnabled) {
      // Music was turned off
      await pauseBgMusic();
    } else {
      // Music was turned on
      await resumeBgMusic();
    }
  }
  
  // Notify all listeners about the change
  settingsChangeListeners.forEach(listener => listener(gameState.settings));
};

export const playSound = async (soundName, volume = 1.0) => {
  try {
    // Check if settings allow sound
    const gameState = await loadGameState();
    if (gameState.settings && gameState.settings.soundEnabled === false) {
      console.log("Sound is disabled in settings");
      return;
    }

    // Check if the sound exists
    if (!sounds[soundName]) {
      console.error(`Sound ${soundName} not found`);
      return;
    }

    const { sound } = await Audio.Sound.createAsync(sounds[soundName]);
    await sound.setVolumeAsync(volume); // Set the volume
    await sound.playAsync();

    // Clean up the sound object when finished
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  } catch (error) {
    console.error("Failed to play sound:", error);
  }
};

export const playBgMusic = async (musicName, volume = 0.5) => {
  try {
    console.log("Starting background music:", musicName);
    currentMusicName = musicName; // Remember what's playing

    // Check if settings allow music
    const gameState = await loadGameState();
    if (gameState.settings && gameState.settings.musicEnabled === false) {
      console.log("Music is disabled in settings");
      return;
    }

    // Stop any existing music
    await stopBgMusic();

    // Check if the music exists
    if (!music[musicName]) {
      console.error(`Music ${musicName} not found`);
      return;
    }

    // Create and play the new background music
    const { sound } = await Audio.Sound.createAsync(
      music[musicName],
      { isLooping: true }
    );

    bgMusic = sound;
    await bgMusic.setVolumeAsync(volume); // Set the volume
    await bgMusic.playAsync();
    console.log("Background music playing:", musicName);
  } catch (error) {
    console.error("Failed to play background music:", error);
  }
};

// Pause background music without unloading
export const pauseBgMusic = async () => {
  try {
    if (bgMusic) {
      console.log("Pausing background music");
      await bgMusic.pauseAsync();
    }
  } catch (error) {
    console.error("Failed to pause background music:", error);
  }
};

// Resume paused background music
export const resumeBgMusic = async () => {
  try {
    if (bgMusic) {
      console.log("Resuming background music");
      await bgMusic.playAsync();
    }
  } catch (error) {
    console.error("Failed to resume background music:", error);
  }
};

export const stopBgMusic = async () => {
  try {
    if (bgMusic) {
      await bgMusic.stopAsync();
      await bgMusic.unloadAsync();
      bgMusic = null;
      currentMusicName = null; // Clear current music name
      console.log("Background music stopped");
    }
  } catch (error) {
    console.error("Failed to stop background music:", error);
  }
};

export const updateMusicVolume = async (volume) => {
  if (bgMusic) {
    try {
      await bgMusic.setVolumeAsync(volume);
      console.log(`Background music volume updated to: ${volume}`);
    } catch (error) {
      console.error("Error updating music volume:", error);
    }
  }
};

// Check initial settings to make sure things are in the right state
export const initAudioSystem = async () => {
  try {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      shouldDuckAndroid: true,
    });
    console.log("Audio system initialized");
  } catch (error) {
    console.error("Failed to initialize audio system:", error);
  }
};