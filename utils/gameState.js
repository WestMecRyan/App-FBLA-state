// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { MONSTERS } from '../data/monsters';

// // Initial game state with starter monster
// const getInitialGameState = () => ({
//   currentSchoolId: 1,
//   defeatedTrainers: [],
//   playerTeam: [
//     // Give player their first monster (Flamander)
//     {
//       ...MONSTERS[0],
//       // [MONSTERS[0]],
//       health: MONSTERS[0].maxHealth,
//     }
//   ],
//   activeMonster: MONSTERS[0],
//   settings: {
//     audio: true,
//     music: true,
//     subject: 'math',
//   },
// });

// export const loadGameState = async () => {
//   try {
//     const state = await AsyncStorage.getItem('gameState');
//     if (state) {
//       return JSON.parse(state);
//     }
//     // If no saved state exists, return initial state
//     const initialState = getInitialGameState();
//     await saveGameState(initialState);
//     return initialState;
//   } catch (error) {
//     console.error('Error loading game state:', error);
//     return getInitialGameState();
//   }
// };

// export const saveGameState = async (state) => {
//   try {
//     const currentState = await loadGameState();
//     const newState = { ...currentState, ...state };
//     await AsyncStorage.setItem('gameState', JSON.stringify(newState));
//     return newState;
//   } catch (error) {
//     console.error('Error saving game state:', error);
//   }
// };

// // Helper functions for specific game state updates
// export const updateSettings = async (settings) => {
//   const currentState = await loadGameState();
//   return saveGameState({
//     ...currentState,
//     settings: { ...currentState.settings, ...settings }
//   });
// };

// export const updatePlayerTeam = async (team) => {
//   const currentState = await loadGameState();
//   return saveGameState({
//     ...currentState,
//     playerTeam: team
//   });
// };

// export const addDefeatedTrainer = async (trainerId) => {
//   const currentState = await loadGameState();
//   if (!currentState.defeatedTrainers.includes(trainerId)) {
//     return saveGameState({
//       ...currentState,
//       defeatedTrainers: [...currentState.defeatedTrainers, trainerId]
//     });
//   }
//   return currentState;
// };

// export const healTeam = async () => {
//   const currentState = await loadGameState();
//   const healedTeam = currentState.playerTeam.map(monster => ({
//     ...monster,
//     health: monster.maxHealth
//   }));
//   return saveGameState({
//     ...currentState,
//     playerTeam: healedTeam
//   });
// };

// // Reset game progress
// export const resetGame = async () => {
//   try {
//     const initialState = getInitialGameState();
//     await AsyncStorage.setItem('gameState', JSON.stringify(initialState));
//     return initialState;
//   } catch (error) {
//     console.error('Error resetting game:', error);
//   }
// };

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MONSTERS } from '../data/monsters';

// Initial game state with starter monster
const getInitialGameState = () => {
  // Create a deep copy of the first monster to avoid reference issues
  const starterMonster = {
    ...MONSTERS[0],
    health: MONSTERS[0].maxHealth,
  };

  return {
    currentSchoolId: 1,
    defeatedTrainers: [],
    playerTeam: [starterMonster],
    activeMonster: starterMonster,
    settings: {
      audio: true,
      music: true,
      subject: 'math',
    }
  };
};

export const loadGameState = async () => {
  try {
    const state = await AsyncStorage.getItem('gameState');
    if (state) {
      const parsedState = JSON.parse(state);
      
      // Check if player team is empty and fix it if needed
      if (!parsedState.playerTeam || parsedState.playerTeam.length === 0) {
        console.warn('Player team was empty, reinitializing with starter monster');
        const initialState = getInitialGameState();
        parsedState.playerTeam = initialState.playerTeam;
        parsedState.activeMonster = initialState.activeMonster;
        await AsyncStorage.setItem('gameState', JSON.stringify(parsedState));
      }
      
      return parsedState;
    }
    
    // If no saved state exists, create and save initial state
    console.log('No saved game state found, creating initial state');
    const initialState = getInitialGameState();
    await AsyncStorage.setItem('gameState', JSON.stringify(initialState));
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
    
    // Ensure player team is never empty
    if (!newState.playerTeam || newState.playerTeam.length === 0) {
      const initialState = getInitialGameState();
      newState.playerTeam = initialState.playerTeam;
      newState.activeMonster = initialState.activeMonster;
    }
    
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
  // Ensure team is never empty
  if (!team || team.length === 0) {
    console.error('Attempted to save empty team, using starter monster instead');
    const initialState = getInitialGameState();
    team = initialState.playerTeam;
  }
  
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
  
  // If team is empty, initialize with starter monster
  if (!currentState.playerTeam || currentState.playerTeam.length === 0) {
    const initialState = getInitialGameState();
    return saveGameState({
      ...currentState,
      playerTeam: initialState.playerTeam,
      activeMonster: initialState.activeMonster
    });
  }
  
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

// Debug function to check current game state
export const debugGameState = async () => {
  try {
    const state = await AsyncStorage.getItem('gameState');
    console.log('Current Game State:', state ? JSON.parse(state) : 'No state found');
    return state ? JSON.parse(state) : null;
  } catch (error) {
    console.error('Error debugging game state:', error);
    return null;
  }
};