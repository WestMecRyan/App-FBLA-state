import { Audio } from 'expo-av';
import { loadGameState } from './gameState'; // Import loadGameState

const sounds = {
  // battleStart: require('../assets/sounds/battle-start.mp3'),
  // hit: require('../assets/sounds/hit.mp3'),
  // correctAnswer: require('../assets/sounds/correct.mp3'),
  // wrongAnswer: require('../assets/sounds/wrong.mp3'),
  // victory: require('../assets/sounds/victory.mp3'),
  // defeat: require('../assets/sounds/defeat.mp3'),
  // switch: require('../assets/sounds/switch.mp3'),
  // faint: require('../assets/sounds/faint.mp3'),
  // question: require('../assets/sounds/question.mp3')

  battleStart: require('../assets/sounds/test.mp3'),
  hit: require('../assets/sounds/test.mp3'),
  correctAnswer: require('../assets/sounds/test.mp3'),
  wrongAnswer: require('../assets/sounds/test.mp3'),
  victory: require('../assets/sounds/test.mp3'),
  defeat: require('../assets/sounds/test.mp3'),
  switch: require('../assets/sounds/test.mp3'),
  faint: require('../assets/sounds/test.mp3'),
  question: require('../assets/sounds/test.mp3')
};

const music = {
  // battle: require('../assets/music/battle.mp3'),
  // map: require('../assets/music/map.mp3'),
  // victory: require('../assets/music/victory.mp3')

  battle: require('../assets/music/test.mp3'),
  map: require('../assets/music/test.mp3'),
  victory: require('../assets/music/test.mp3')
};

let backgroundMusic = null;

export const playSound = async (soundName) => {
  try {
    const gameState = await loadGameState();
    if (!gameState.settings.audio) return;

    const sound = new Audio.Sound();
    await sound.loadAsync(sounds[soundName]);
    await sound.playAsync();
    // Unload after playing
    sound.setOnPlaybackStatusUpdate(status => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

export const playBgMusic = async (musicName) => {
  try {
    const gameState = await loadGameState();
    if (!gameState.settings.music) return;

    // Stop current music if playing
    await stopBgMusic();

    backgroundMusic = new Audio.Sound();
    await backgroundMusic.loadAsync(music[musicName]);
    await backgroundMusic.setIsLoopingAsync(true);
    await backgroundMusic.playAsync();
  } catch (error) {
    console.error('Error playing background music:', error);
  }
};

export const stopBgMusic = async () => {
  if (backgroundMusic) {
    try {
      await backgroundMusic.stopAsync();
      await backgroundMusic.unloadAsync();
      backgroundMusic = null;
    } catch (error) {
      console.error('Error stopping background music:', error);
    }
  }
};

export const updateMusicVolume = async (volume) => {
  if (backgroundMusic) {
    try {
      await backgroundMusic.setVolumeAsync(volume);
    } catch (error) {
      console.error('Error updating music volume:', error);
    }
  }
};