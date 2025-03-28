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
  levelUp: require('../assets/sounds/level-up.mp3'),
  evolution: require('../assets/sounds/evolution.mp3'),
  capture: require('../assets/sounds/capture.mp3'),
};

const music = {
  home: require('../assets/music/home.mp3'),
  battle1: require('../assets/music/battle-1.mp3'),
  battle2: require('../assets/music/battle-2.mp3'),
  battle3: require('../assets/music/battle-3.mp3'),
  map: require('../assets/music/map.mp3'),
  healCenter: require('../assets/music/heal-center.mp3'),
  battle: require('../assets/music/battle-1.mp3'), // Use battle1 as a fallback
};

let bgMusic = null;
let currentMusicName = null;
let activeSound = null; // Track the currently playing sound effect

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

export const stopSound = async () => {
  try {
    if (activeSound) {
      console.log("Stopping sound effect");
      await activeSound.stopAsync();
      await activeSound.unloadAsync();
      activeSound = null; // Clear the reference to the sound
    }
  } catch (error) {
    console.error("Failed to stop sound effect:", error);
  }
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

    // Stop any currently playing sound effect
    await stopSound();

    const { sound } = await Audio.Sound.createAsync(sounds[soundName]);
    activeSound = sound; // Track the currently playing sound
    await sound.setVolumeAsync(volume); // Set the volume
    await sound.playAsync();

    // Clean up the sound object when finished
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
        if (activeSound === sound) {
          activeSound = null; // Clear the reference when the sound finishes
        }
      }
    });
  } catch (error) {
    console.error(`Failed to play sound ${soundName}:`, error);
  }
};

// Add a mutex to prevent race conditions
let audioMutex = false;
let pendingAudioOperation = null;

export const playBgMusic = async (musicName, volume = 0.3) => {
  try {
    // If there's already an audio operation in progress, queue this one
    if (audioMutex) {
      pendingAudioOperation = { type: 'play', musicName, volume };
      console.log(`Queuing playBgMusic request for ${musicName}`);
      return;
    }
    
    audioMutex = true;
    
    // Check if settings allow music
    const gameState = await loadGameState();
    if (gameState.settings && gameState.settings.musicEnabled === false) {
      console.log("Music is disabled in settings");
      audioMutex = false;
      return;
    }

    // Check if the music exists
    if (!music[musicName]) {
      console.error(`Music ${musicName} not found`);
      // Try to find a fallback music
      if (musicName === "battle" && music["battle1"]) {
        console.log("Using battle1 as fallback for battle");
        musicName = "battle1";
      } else {
        audioMutex = false;
        return;
      }
    }

    // If the requested music is already playing, don't restart it
    if (currentMusicName === musicName && bgMusic) {
      console.log(`Music ${musicName} is already playing`);
      audioMutex = false;
      return;
    }

    // Stop any current background music
    await stopBgMusic(true); // Pass true to indicate internal call

    // Load and play the new music
    const { sound } = await Audio.Sound.createAsync(
      music[musicName],
      { isLooping: true, volume: volume }
    );

    bgMusic = sound;
    currentMusicName = musicName;
    await bgMusic.playAsync();
    console.log(`Now playing ${musicName} music`);
    
    audioMutex = false;
    
    // Check if there's a pending operation
    if (pendingAudioOperation) {
      const operation = pendingAudioOperation;
      pendingAudioOperation = null;
      if (operation.type === 'play') {
        playBgMusic(operation.musicName, operation.volume);
      } else if (operation.type === 'stop') {
        stopBgMusic();
      }
    }
  } catch (error) {
    console.error(`Failed to play music ${musicName}:`, error);
    audioMutex = false;
  }
};

export const stopBgMusic = async (isInternalCall = false) => {
  try {
    // Only check mutex for external calls
    if (!isInternalCall) {
      if (audioMutex) {
        pendingAudioOperation = { type: 'stop' };
        console.log('Queuing stopBgMusic request');
        return;
      }
      
      audioMutex = true;
    }
    
    if (bgMusic) {
      console.log(`Stopping ${currentMusicName} music`);
      try {
        await bgMusic.stopAsync();
      } catch (e) {
        console.log("Error stopping music:", e);
      }

      try {
        await bgMusic.unloadAsync();
      } catch (e) {
        console.log("Error unloading music:", e);
      }

      bgMusic = null;
      currentMusicName = null; // Clear current music name
      console.log("Background music stopped and unloaded");
    }
    
    if (!isInternalCall) {
      audioMutex = false;
      
      // Check for pending operations
      if (pendingAudioOperation) {
        const operation = pendingAudioOperation;
        pendingAudioOperation = null;
        if (operation.type === 'play') {
          playBgMusic(operation.musicName, operation.volume);
        }
      }
    }
  } catch (error) {
    console.error("Failed to stop background music:", error);
    // Reset the variables even if there was an error
    bgMusic = null;
    currentMusicName = null;
    
    if (!isInternalCall) {
      audioMutex = false;
    }
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