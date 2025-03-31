import { Audio } from 'expo-av';
import { loadGameState } from './gameState'; // Import loadGameState

const audioCache = {
  music: {},
  sounds: {}
};

let isSoundEnabled = true;
let isMusicEnabled = true;
let currentMusic = null;

export const preloadAllAudio = async () => {
  console.log("Preloading all audio files...");
  try {
    // Music files to preload
    const musicFiles = {
      'home': require('../assets/music/home.mp3'),
      'map': require('../assets/music/map.mp3'),
      'battle1': require('../assets/music/battle-1.mp3'),
      'battle2': require('../assets/music/battle-2.mp3'),
      'battle3': require('../assets/music/battle-3.mp3'),
      'healCenter': require('../assets/music/heal-center.mp3'),
      'battle': require('../assets/music/battle-1.mp3'),
    };

    // Sound effects to preload
    const soundEffects = {
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

    // Preload all music files
    const musicPromises = Object.entries(musicFiles).map(async ([name, source]) => {
      try {
        const { sound } = await Audio.Sound.createAsync(source, { shouldPlay: false });
        audioCache.music[name] = sound;
        console.log(`Preloaded music: ${name}`);
      } catch (error) {
        console.error(`Failed to preload music ${name}:`, error);
      }
    });

    // Preload all sound effects
    const soundPromises = Object.entries(soundEffects).map(async ([name, source]) => {
      try {
        const { sound } = await Audio.Sound.createAsync(source, { shouldPlay: false });
        audioCache.sounds[name] = sound;
        console.log(`Preloaded sound: ${name}`);
      } catch (error) {
        console.error(`Failed to preload sound ${name}:`, error);
      }
    });

    // Wait for all preloading to complete
    await Promise.all([...musicPromises, ...soundPromises]);
    console.log("All audio preloaded successfully");

    // Set initial audio settings based on game state
    const gameState = await loadGameState();
    if (gameState.settings) {
      isSoundEnabled = gameState.settings.soundEnabled;
      isMusicEnabled = gameState.settings.musicEnabled;
    }

    return true;
  } catch (error) {
    console.error("Error preloading audio:", error);
    return false;
  }
};

const soundSources = {
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

const musicSources = {
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

let isMusicLoading = false;
let musicLoadingListeners = [];

let settingsChangeListeners = [];

export const addMusicLoadingListener = (listener) => {
  musicLoadingListeners.push(listener);
  // Return function to unsubscribe
  listener(isMusicLoading);
  return () => {
    musicLoadingListeners = musicLoadingListeners.filter(l => l !== listener);
  };
};

const setMusicLoading = (isLoading) => {
  isMusicLoading = isLoading;
  // Notify all listeners
  musicLoadingListeners.forEach(listener => listener(isLoading));
};

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

// export const stopSound = async () => {
//   try {
//     if (activeSound) {
//       console.log("Stopping sound effect");
//       await activeSound.stopAsync();
//       await activeSound.unloadAsync();
//       activeSound = null; // Clear the reference to the sound
//     }
//   } catch (error) {
//     console.error("Failed to stop sound effect:", error);
//   }
// };

export const stopSound = async (soundName) => {
  try {
    const sound = audioCache.sounds[soundName]; // Retrieve the sound from the cache
    if (sound) {
      console.log(`Stopping sound: ${soundName}`);
      await sound.stopAsync();
      await sound.unloadAsync();
      delete audioCache.sounds[soundName]; // Remove the sound from the cache
    } else {
      console.warn(`No active sound found for: ${soundName}`);
    }
  } catch (error) {
    console.error(`Failed to stop sound ${soundName}:`, error);
  }
};

export const playSound = async (soundName, volume = 0.3) => {
  try {
    const gameState = await loadGameState();
    if (gameState.settings.soundEnabled === true) {
      if (!isSoundEnabled) return;

      // Get the cached sound or load it if not available
      let sound = audioCache.sounds[soundName];
      if (!sound) {
        // Fallback if not preloaded
        console.warn(`Sound ${soundName} not found in cache, loading now...`);
        const source = soundSources[soundName] || null;
        if (!source) {
          console.error(`Sound source for ${soundName} not found`);
          return;
        }
        const { sound: newSound } = await Audio.Sound.createAsync(source, { shouldPlay: false });
        sound = newSound;
        audioCache.sounds[soundName] = sound;
      }

      // Make a clone to allow multiple sounds at once
      await sound.setVolumeAsync(volume);
      await sound.playFromPositionAsync(0);
    }
  } catch (error) {
    console.error(`Failed to play sound ${soundName}:`, error);
  }
};

// Add a mutex to prevent race conditions
let audioMutex = false;
let pendingAudioOperation = null;

export const playBgMusic = async (musicName, volume = 0.3) => {
  try {
    const gameState = await loadGameState();
    if (gameState.settings.musicEnabled === true) {
      setMusicLoading(true);

      if (!isMusicEnabled) {
        setMusicLoading(false);
        return false;
      }

      // Stop any currently playing music
      await stopBgMusic();

      // Get the cached sound or load it if not available
      let sound = audioCache.music[musicName];
      if (!sound) {
        // Fallback if not preloaded
        console.warn(`Music ${musicName} not found in cache, loading now...`);
        const source = musicSources[musicName] || null;
        if (!source) {
          console.error(`Music source for ${musicName} not found`);
          setMusicLoading(false);
          return false;
        }
        const { sound: newSound } = await Audio.Sound.createAsync(source, { shouldPlay: false });
        sound = newSound;
        audioCache.music[musicName] = sound;
      }

      // Set as current and play
      bgMusic = sound;
      currentMusicName = musicName;
      await sound.setIsLoopingAsync(true);
      await sound.setVolumeAsync(volume);
      await sound.playAsync();

      setMusicLoading(false);
      return true;
    }
  } catch (error) {
    console.error(`Failed to play music ${musicName}:`, error);
    setMusicLoading(false);
    return false;
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
        // await bgMusic.unloadAsync();
        // When unloading, also remove from cache to force reloading next time
        // if (currentMusicName) {
        //   delete audioCache.music[currentMusicName];
        // }
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

export const unloadAllAudio = async () => {
  try {
    // Unload all music
    await Promise.all(Object.values(audioCache.music).map(sound => sound.unloadAsync()));

    // Unload all sound effects
    await Promise.all(Object.values(audioCache.sounds).map(sound => sound.unloadAsync()));

    // Clear the cache
    audioCache.music = {};
    audioCache.sounds = {};

    console.log("All audio unloaded");
  } catch (error) {
    console.error("Error unloading audio:", error);
  }
};