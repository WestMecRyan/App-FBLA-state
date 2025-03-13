export const MONSTERS = [
  {
    id: 1,
    name: "Ignekko",
    type: "fire",
    baseHealth: 100,
    image: require('../assets/monsters/ignekko.png'),
    moves: [
      { id: 1, name: "Tail Whip", power: 20, type: "Normal" },
      { id: 2, name: "Fire Fang", power: 25, type: "Fire" },
      { id: 3, name: "Fast Attack", power: 30, type: "Normal" },
      { id: 4, name: "Ember", power: 35, type: "Fire" },
    ],
    evolutions: [
      { level: 10, id: 11 }, 
      { level: 25, id: 12 }, 
    ],
  },
  {
    id: 11,
    name: "Pyrolisk",
    type: "fire",
    baseHealth: 150,
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 1, name: "Tail Whip", power: 25, type: "normal" },
      { id: 2, name: "Fire Fang", power: 30, type: "fire" },
      { id: 3, name: "Fast Attack", power: 40, type: "normal" },
      { id: 4, name: "Flame Wheel", power: 45, type: "fire" },
    ],
    evolutions: [
      { level: 25, id: 12 }, 
    ],
  },
  {
    id: 12,
    name: "Inferaptor",
    type: "fire",
    baseHealth: 200,
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 1, name: "Tail Whip", power: 30, type: "normal" },
      { id: 2, name: "Flame Wheel", power: 35, type: "fire" },
      { id: 3, name: "Fast Attack", power: 50, type: "normal" },
      { id: 4, name: "Inferno", power: 60, type: "fire" },
    ],
    evolutions: [], // Final evolution
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
      { id: 8, name: "Water Blast", power: 35, type: "Water" },
    ],
    evolutions: [
      { level: 10, id: 21 }, // Evolves to Prosavant at level 10
      { level: 25, id: 22 }, // Evolves to Lexiconian at level 25
    ],
  },
  {
    id: 21,
    name: "Prosavant",
    type: "Water",
    baseHealth: 140,
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 5, name: "Tail Whip", power: 25, type: "Normal" },
      { id: 6, name: "Spin Attack", power: 30, type: "Normal" },
      { id: 7, name: "", power: 40, type: "Water" },
      { id: 8, name: "Narrative Nuke", power: 45, type: "Water" },
    ],
    evolutions: [
      { level: 25, id: 22 }, // Evolves to Lexiconian at level 25
    ],
  },
  {
    id: 22,
    name: "Lexiconian",
    type: "Water",
    baseHealth: 190,
    // image: require("../assets/monsters/lexiconian.png"),
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 5, name: "Word Whip", power: 30, type: "language" },
      { id: 6, name: "Grammar Grapple", power: 35, type: "language" },
      { id: 7, name: "Thesis Thunderbolt", power: 50, type: "language" },
      { id: 8, name: "Epic Epilogue", power: 60, type: "language" },
    ],
    evolutions: [], // Final evolution
  },
  {
    id: 3,
    name: "Scienspark",
    type: "science",
    baseHealth: 95,
    // image: require("../assets/monsters/scienspark.png"),
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 9, name: "Hypothesis Hurl", power: 20, type: "science" },
      { id: 10, name: "Chemical Clash", power: 25, type: "science" },
      { id: 11, name: "Physics Phracture", power: 30, type: "science" },
      { id: 12, name: "Biology Bash", power: 35, type: "science" },
    ],
    evolutions: [
      { level: 10, id: 31 }, // Evolves to Beakerton at level 10
      { level: 25, id: 32 }, // Evolves to Einsteinium at level 25
    ],
  },
  {
    id: 31,
    name: "Beakerton",
    type: "science",
    baseHealth: 145,
    // image: require("../assets/monsters/beakerton.png"),
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 9, name: "Hypothesis Hurl", power: 25, type: "science" },
      { id: 10, name: "Chemical Clash", power: 30, type: "science" },
      { id: 11, name: "Quantum Quake", power: 40, type: "science" },
      { id: 12, name: "Experiment Explosion", power: 45, type: "science" },
    ],
    evolutions: [
      { level: 25, id: 32 }, // Evolves to Einsteinium at level 25
    ],
  },
  {
    id: 32,
    name: "Einsteinium",
    type: "science",
    baseHealth: 195,
    // image: require("../assets/monsters/einsteinium.png"),
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 9, name: "Hypothesis Hurl", power: 30, type: "science" },
      { id: 10, name: "Chemical Clash", power: 35, type: "science" },
      { id: 11, name: "Relativity Ray", power: 50, type: "science" },
      { id: 12, name: "Atomic Annihilation", power: 60, type: "science" },
    ],
    evolutions: [], // Final evolution
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