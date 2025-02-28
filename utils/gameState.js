import AsyncStorage from '@react-native-async-storage/async-storage';
import { MONSTERS } from '../data/monsters';

// Initial game state with starter monster
const getInitialGameState = () => ({
  currentSchoolId: 1,
  defeatedTrainers: [],
  playerTeam: [
    // Give player their first monster (Flamander)
    {
      ...MONSTERS[0],
      health: MONSTERS[0].maxHealth,
    }
  ],
  activeMonster: MONSTERS[0],
  settings: {
    audio: true,
    music: true,
    subject: 'math',
  },
});

export const loadGameState = async () => {
  try {
    const state = await AsyncStorage.getItem('gameState');
    if (state) {
      return JSON.parse(state);
    }
    // If no saved state exists, return initial state
    const initialState = getInitialGameState();
    await saveGameState(initialState);
    return initialState;
  } catch (error) {
    console.error('Error loading game state:', error);
    return getInitialGameState();
  }
};

export const saveGameState = async (state) => {
  try {
    const currentState = await loadGameState();
    const newState = { ...currentState, ...state };
    await AsyncStorage.setItem('gameState', JSON.stringify(newState));
    return newState;
  } catch (error) {
    console.error('Error saving game state:', error);
  }
};

// Helper functions for specific game state updates
export const updateSettings = async (settings) => {
  const currentState = await loadGameState();
  return saveGameState({
    ...currentState,
    settings: { ...currentState.settings, ...settings }
  });
};

export const updatePlayerTeam = async (team) => {
  const currentState = await loadGameState();
  return saveGameState({
    ...currentState,
    playerTeam: team
  });
};

export const addDefeatedTrainer = async (trainerId) => {
  const currentState = await loadGameState();
  if (!currentState.defeatedTrainers.includes(trainerId)) {
    return saveGameState({
      ...currentState,
      defeatedTrainers: [...currentState.defeatedTrainers, trainerId]
    });
  }
  return currentState;
};

export const healTeam = async () => {
  const currentState = await loadGameState();
  const healedTeam = currentState.playerTeam.map(monster => ({
    ...monster,
    health: monster.maxHealth
  }));
  return saveGameState({
    ...currentState,
    playerTeam: healedTeam
  });
};

// Reset game progress
export const resetGame = async () => {
  try {
    const initialState = getInitialGameState();
    await AsyncStorage.setItem('gameState', JSON.stringify(initialState));
    return initialState;
  } catch (error) {
    console.error('Error resetting game:', error);
  }
};