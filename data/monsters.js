import { v4 as uuidv4 } from 'uuid';

export const MONSTERS = [
  {
    id: 1,
    name: "Ignekko",
    type: "Fire",
    baseHealth: 100,
    image: require('../assets/monsters/ignekko.png'),
    moves: [
      { id: 1, name: "Tail Whip", power: 20, type: "Normal" },
      { id: 3, name: "Fast Attack", power: 30, type: "Normal" },
      { id: 2, name: "Fire Fang", power: 25, type: "Fire" },
      { id: 4, name: "Blister Burst", power: 35, type: "Fire" },
    ],
    evolutions: [
      { level: 9, id: 11 }, 
      // { level: 14, id: 12 }, 
    ],
  },
  {
    id: 11,
    name: "Smeltail",
    type: "Fire",
    baseHealth: 150,
    image: require('../assets/monsters/smeltail.png'),
    moves: [
      { id: 1, name: "Tail Whip", power: 25, type: "normal" },
      { id: 3, name: "Fast Attack", power: 40, type: "normal" },
      { id: 2, name: "Blister Burst", power: 30, type: "fire" },
      { id: 4, name: "Infernal Spiral", power: 45, type: "fire" },
    ],
    evolutions: [
      // { level: 14, id: 12 }, 
    ],
  },
  {
    id: 12,
    name: "Forjek",
    type: "Fire",
    baseHealth: 200,
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 1, name: "Tail Whip", power: 30, type: "normal" },
      { id: 3, name: "Fast Attack", power: 50, type: "normal" },
      { id: 2, name: "Infernal Spiral", power: 35, type: "fire" },
      { id: 4, name: "Volcanic Vortex", power: 60, type: "fire" },
    ],
    evolutions: [], 
  },
  {
    id: 2,
    name: "Aquotl",
    type: "Water",
    baseHealth: 90,
    image: require('../assets/monsters/aquotl.png'),
    moves: [
      { id: 5, name: "Tail Whip", power: 20, type: "Normal" },
      { id: 6, name: "Punch", power: 25, type: "Normal" },
      { id: 7, name: "Bubble", power: 30, type: "Water" },
      { id: 8, name: "Aqua Cyclone", power: 35, type: "Water" },
    ],
    evolutions: [
      { level: 9, id: 21 }, 
      // { level: 14, id: 22 }, 
    ],
  },
  {
    id: 21,
    name: "Riptotl",
    type: "Water",
    baseHealth: 140,
    image: require('../assets/monsters/riptotl.png'),
    moves: [
      { id: 5, name: "Tail Whip", power: 25, type: "Normal" },
      { id: 6, name: "Spin Attack", power: 30, type: "Normal" },
      { id: 7, name: "Aqua Cyclone", power: 40, type: "Water" },
      { id: 8, name: "Hydro Pulse", power: 45, type: "Water" },
    ],
    evolutions: [
      // { level: 14, id: 22 },
    ],
  },
  {
    id: 22,
    name: "Trickzotl",
    type: "Water",
    baseHealth: 190,
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 5, name: "Spin Attack", power: 30, type: "Normal" },
      { id: 6, name: "Tail Bash", power: 35, type: "Normal" },
      { id: 7, name: "Hydro Pulse", power: 50, type: "Water" },
      { id: 8, name: "Tidal Crush", power: 60, type: "Water" },
    ],
    evolutions: [],
  },
  {
    id: 3,
    name: "Mossloth",
    type: "Grass",
    baseHealth: 95,
    image: require('../assets/monsters/mossloth.png'),
    moves: [
      { id: 9, name: "Low Kick", power: 20, type: "Normal" },
      { id: 10, name: "Rollout", power: 25, type: "Normal" },
      { id: 11, name: "Sap Strike", power: 30, type: "Grass" },
      { id: 12, name: "Thorn Throttle", power: 35, type: "Grass" },
    ],
    evolutions: [
      { level: 9, id: 31 }, 
      // { level: 14, id: 32 }, 
    ],
  },
  {
    id: 31,
    name: "Vinepaws",
    type: "Grass",
    baseHealth: 145,
    image: require('../assets/monsters/vinepaws.png'),
    moves: [
      { id: 9, name: "Rollout", power: 25, type: "Normal" },
      { id: 10, name: "Cannonball", power: 30, type: "Normal" },
      { id: 11, name: "Thorn Throttle", power: 40, type: "Grass" },
      { id: 12, name: "Root Rampage", power: 45, type: "Grass" },
    ],
    evolutions: [
      // { level: 14, id: 32 }, 
    ],
  },
  {
    id: 32,
    name: "Gaialoth",
    type: "Grass",
    baseHealth: 195,
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 9, name: "Rollout", power: 30, type: "science" },
      { id: 10, name: "Cannonball", power: 35, type: "science" },
      { id: 11, name: "Root Rampage", power: 50, type: "science" },
      { id: 12, name: "Canopy Crash", power: 60, type: "science" },
    ],
    evolutions: [], 
  },
  {
    id: 4,
    name: "Gloobit",
    type: "Normal",
    baseHealth: 95,
    image: require('../assets/monsters/gloobit.png'),
    moves: [
      { id: 9, name: "Slap", power: 20, type: "Normal" },
      { id: 10, name: "Bounce", power: 25, type: "Normal" },
      { id: 11, name: "Goo Strike", power: 30, type: "Normal" },
      { id: 12, name: "Slime Blast", power: 35, type: "Normal" },
    ],
    evolutions: [
      { level: 9, id: 41 }, 
      // { level: 14, id: 32 }, 
    ],
  },
  {
    id: 41,
    name: "Gloobrain",
    type: "Normal",
    baseHealth: 145,
    image: require('../assets/monsters/gloobrain.png'),
    moves: [
      { id: 9, name: "Slap", power: 25, type: "Normal" },
      { id: 10, name: "Bounce", power: 30, type: "Normal" },
      { id: 11, name: "Slime Blast", power: 40, type: "Grass" },
      { id: 12, name: "Goo Barage", power: 45, type: "Grass" },
    ],
    evolutions: [
      // { level: 14, id: 32 }, 
    ],
  },
]

// Function to create a new monster instance
export function createMonster(id, level = 1) {
  const baseMonster = MONSTERS.find((m) => m.id === id)
  if (!baseMonster) return null

  return {
    ...baseMonster,
    id: baseMonster.id,
    level: level,
    exp: 0,
    expToNextLevel: calculateExpToNextLevel(level),
    health: calculateHealth(baseMonster.baseHealth, level),
    maxHealth: calculateHealth(baseMonster.baseHealth, level),
    uniqueId: uuidv4(),
  }
}

// Calculate health based on base health and level
function calculateHealth(baseHealth, level) {
  return Math.floor(baseHealth * (1 + (level - 1) * 0.1))
}

// Calculate experience needed for next level
export function calculateExpToNextLevel(level) {
  // Exponential growth formula for exp requirements
  return Math.floor(50 * (1.3 * level))
}

// Calculate experience gained from defeating an enemy
export function calculateExpGain(defeatedLevel, playerLevel) {
  const bonusMultiplier = 1.5

  return Math.floor(100 * bonusMultiplier * (defeatedLevel * 0.6));
}

// Find evolution for a monster at its current level
export function getEvolution(monsterId, level) {
  const monster = MONSTERS.find((m) => m.id === monsterId)
  if (!monster || !monster.evolutions.length) return null

  // Find the first evolution that matches the level requirement
  const evolution = monster.evolutions.find((e) => level >= e.level)
  if (!evolution) return null

  return MONSTERS.find((m) => m.id === evolution.id)
}