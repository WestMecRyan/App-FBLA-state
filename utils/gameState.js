// import asyncstorage from '@react-native-async-storage/async-storage';
// import { monsters } from '../data/monsters';

// // initial game state with starter monster
// const getinitialgamestate = () => {
//   // create a deep copy of the first monster to avoid reference issues
//   const startermonster = {
//     ...monsters[0],
//     health: monsters[0].maxhealth,
//   };

//   return {
//     currentschoolid: 1,
//     defeatedtrainers: [],
//     playerteam: [startermonster],
//     activemonster: startermonster,
//     settings: {
//       audio: true,
//       music: true,
//       subject: 'math',
//     }
//   };
// };

// export const loadgamestate = async () => {
//   try {
//     const state = await asyncstorage.getitem('gamestate');
//     if (state) {
//       const parsedstate = json.parse(state);

//       // check if player team is empty and fix it if needed
//       if (!parsedstate.playerteam || parsedstate.playerteam.length === 0) {
//         console.warn('player team was empty, reinitializing with starter monster');
//         const initialstate = getinitialgamestate();
//         parsedstate.playerteam = initialstate.playerteam;
//         parsedstate.activemonster = initialstate.activemonster;
//         await asyncstorage.setitem('gamestate', json.stringify(parsedstate));
//       }

//       return parsedstate;
//     }

//     // if no saved state exists, create and save initial state
//     console.log('no saved game state found, creating initial state');
//     const initialstate = getinitialgamestate();
//     await asyncstorage.setitem('gamestate', json.stringify(initialstate));
//     return initialstate;
//   } catch (error) {
//     console.error('error loading game state:', error);
//     return getinitialgamestate();
//   }
// };

// export const savegamestate = async (state) => {
//   try {
//     const currentstate = await loadgamestate();
//     const newstate = { ...currentstate, ...state };

//     // ensure player team is never empty
//     if (!newstate.playerteam || newstate.playerteam.length === 0) {
//       const initialstate = getinitialgamestate();
//       newstate.playerteam = initialstate.playerteam;
//       newstate.activemonster = initialstate.activemonster;
//     }

//     await asyncstorage.setitem('gamestate', json.stringify(newstate));
//     return newstate;
//   } catch (error) {
//     console.error('error saving game state:', error);
//   }
// };

// // helper functions for specific game state updates
// export const updatesettings = async (settings) => {
//   const currentstate = await loadgamestate();
//   return savegamestate({
//     ...currentstate,
//     settings: { ...currentstate.settings, ...settings }
//   });
// };

// export const updateplayerteam = async (team) => {
//   // ensure team is never empty
//   if (!team || team.length === 0) {
//     console.error('attempted to save empty team, using starter monster instead');
//     const initialstate = getinitialgamestate();
//     team = initialstate.playerteam;
//   }

//   const currentstate = await loadgamestate();
//   return savegamestate({
//     ...currentstate,
//     playerteam: team
//   });
// };

// export const adddefeatedtrainer = async (trainerid) => {
//   const currentstate = await loadgamestate();
//   if (!currentstate.defeatedtrainers.includes(trainerid)) {
//     return savegamestate({
//       ...currentstate,
//       defeatedtrainers: [...currentstate.defeatedtrainers, trainerid]
//     });
//   }
//   return currentstate;
// };

// export const healteam = async () => {
//   const currentstate = await loadgamestate();

//   // if team is empty, initialize with starter monster
//   if (!currentstate.playerteam || currentstate.playerteam.length === 0) {
//     const initialstate = getinitialgamestate();
//     return savegamestate({
//       ...currentstate,
//       playerteam: initialstate.playerteam,
//       activemonster: initialstate.activemonster
//     });
//   }

//   const healedteam = currentstate.playerteam.map(monster => ({
//     ...monster,
//     health: monster.maxhealth
//   }));

//   return savegamestate({
//     ...currentstate,
//     playerteam: healedteam
//   });
// };

// // reset game progress
// export const resetgame = async () => {
//   try {
//     const initialstate = getinitialgamestate();
//     await asyncstorage.setitem('gamestate', json.stringify(initialstate));
//     return initialstate;
//   } catch (error) {
//     console.error('error resetting game:', error);
//   }
// };

// // debug function to check current game state
// export const debuggamestate = async () => {
//   try {
//     const state = await asyncstorage.getitem('gamestate');
//     console.log('current game state:', state ? json.parse(state) : 'no state found');
//     return state ? json.parse(state) : null;
//   } catch (error) {
//     console.error('error debugging game state:', error);
//     return null;
//   }
// };






import AsyncStorage from "@react-native-async-storage/async-storage"
import { createMonster } from "../data/monsters"
import { calculateExpToNextLevel, calculateHealth } from "../data/monsters"

const GAME_STATE_KEY = "edumon_game_state"

// Get initial game state with starter monster
export const getInitialGameState = () => {
  return {
    playerTeam: [
      createMonster(1, 10), // Start with a level 5 Mathling
    ],
    defeatedTrainers: [],
    settings: {
      soundEnabled: true,
      musicEnabled: true,
      difficulty: "normal",
    },
  }
}

// Default game state with a starter monster
const DEFAULT_GAME_STATE = getInitialGameState()

// Load game state from AsyncStorage
export const loadGameState = async () => {
  try {
    const savedState = await AsyncStorage.getItem(GAME_STATE_KEY)
    if (savedState) {
      const parsedState = JSON.parse(savedState)

      // Ensure player team is never empty
      if (!parsedState.playerTeam || parsedState.playerTeam.length === 0) {
        parsedState.playerTeam = DEFAULT_GAME_STATE.playerTeam
      }

      // Ensure each monster has the required exp properties
      parsedState.playerTeam = parsedState.playerTeam.map((monster) => {
        if (monster.exp === undefined) {
          monster.exp = 0
        }
        if (monster.expToNextLevel === undefined) {
          monster.expToNextLevel = calculateExpToNextLevel(monster.level)
        }
        if (monster.maxHealth === undefined) {
          monster.maxHealth = monster.health || calculateHealth(monster.baseHealth, monster.level)
        }
        if (monster.health === undefined) {
          monster.health = monster.maxHealth
        }
        return monster
      })

      return parsedState
    }
    return DEFAULT_GAME_STATE
  } catch (error) {
    console.error("Error loading game state:", error)
    return DEFAULT_GAME_STATE
  }
}

// Save game state to AsyncStorage
export const saveGameState = async (newState) => {
  try {
    // Merge with existing state to avoid overwriting unspecified properties
    const currentState = await loadGameState()
    const mergedState = {
      ...currentState,
      ...newState,
      // Special handling for nested objects
      settings: {
        ...currentState.settings,
        ...(newState.settings || {}),
      },
    }

    // Ensure player team is never empty
    if (!mergedState.playerTeam || mergedState.playerTeam.length === 0) {
      mergedState.playerTeam = DEFAULT_GAME_STATE.playerTeam
    }

    await AsyncStorage.setItem(GAME_STATE_KEY, JSON.stringify(mergedState))
    return mergedState
  } catch (error) {
    console.error("Error saving game state:", error)
    throw error
  }
}

// // Calculate experience needed for next level
// export const calculateExpToNextLevel = (level) => {
//   // Exponential growth formula for exp requirements
//   return Math.floor(100 * Math.pow(1.5, level - 1))
// }

// // Calculate health based on base health and level
// export const calculateHealth = (baseHealth, level) => {
//   return Math.floor(baseHealth * (1 + (level - 1) * 0.1))
// }

// Reset game state (for debugging or starting over)
export const resetGameState = async () => {
  try {
    await AsyncStorage.setItem(GAME_STATE_KEY, JSON.stringify(DEFAULT_GAME_STATE))
    return DEFAULT_GAME_STATE
  } catch (error) {
    console.error("Error resetting game state:", error)
    throw error
  }
}

// Heal all monsters in the player's team
export const healTeam = async () => {
  const currentState = await loadGameState()

  // If team is empty, initialize with starter monster
  if (!currentState.playerTeam || currentState.playerTeam.length === 0) {
    const initialState = getInitialGameState()
    return saveGameState({
      ...currentState,
      playerTeam: initialState.playerTeam,
    })
  }

  const healedTeam = currentState.playerTeam.map((monster) => ({
    ...monster,
    health: monster.maxHealth,
  }))

  return saveGameState({
    ...currentState,
    playerTeam: healedTeam,
  })
}

