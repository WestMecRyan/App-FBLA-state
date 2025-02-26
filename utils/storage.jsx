import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveGameState = async (state) => {
  try {
    const currentState = await loadGameState();
    const newState = { ...currentState, ...state };
    await AsyncStorage.setItem('gameState', JSON.stringify(newState));
  } catch (error) {
    console.error('Error saving game state:', error);
  }
};

export const loadGameState = async () => {
  try {
    const state = await AsyncStorage.getItem('gameState');
    if (state) {
      return JSON.parse(state);
    }
    return getInitialGameState();
  } catch (error) {
    console.error('Error loading game state:', error);
    return getInitialGameState();
  }
};

const getInitialGameState = () => ({
  currentSchoolId: 1,
  defeatedTrainers: [],
  playerTeam: [], // You'll populate this with initial monsters
  activeMonster: null, // You'll set this to the first monster
  settings: {
    audio: true,
    music: true,
    subject: 'math',
  },
});