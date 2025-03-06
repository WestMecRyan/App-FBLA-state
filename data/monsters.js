// export const MONSTERS = [
//   // Fire Types
//   {
//     id: 1,
//     name: 'Flamander',
//     type: 'fire',
//     health: 100,
//     maxHealth: 100,
//     level: 5,
//     moves: [
//       { id: 1, name: 'Ember', power: 40, type: 'fire' },
//       { id: 2, name: 'Scratch', power: 30, type: 'normal' },
//       { id: 3, name: 'Fire Fang', power: 50, type: 'fire' },
//       { id: 4, name: 'Quick Attack', power: 35, type: 'normal' }
//     ],
//     // image: require('../assets/monsters/flamander.png')
//     image: require('../assets/monsters/test-mon.png')
//   },
//   {
//     id: 2,
//     name: 'Blazix',
//     type: 'fire',
//     health: 120,
//     maxHealth: 120,
//     level: 15,
//     moves: [
//       { id: 5, name: 'Flamethrower', power: 70, type: 'fire' },
//       { id: 6, name: 'Fire Blast', power: 85, type: 'fire' },
//       { id: 7, name: 'Dragon Breath', power: 60, type: 'dragon' },
//       { id: 8, name: 'Slash', power: 55, type: 'normal' }
//     ],
//     // image: require('../assets/monsters/blazix.png')
//     image: require('../assets/monsters/test-mon.png')
//   },

//   // Water Types
//   {
//     id: 3,
//     name: 'Aquatle',
//     type: 'water',
//     health: 95,
//     maxHealth: 95,
//     level: 5,
//     moves: [
//       { id: 9, name: 'Water Gun', power: 40, type: 'water' },
//       { id: 10, name: 'Tackle', power: 30, type: 'normal' },
//       { id: 11, name: 'Bubble', power: 45, type: 'water' },
//       { id: 12, name: 'Quick Attack', power: 35, type: 'normal' }
//     ],
//     // image: require('../assets/monsters/aquatle.png')
//     image: require('../assets/monsters/test-mon.png')
//   },
//   {
//     id: 4,
//     name: 'Hydrakon',
//     type: 'water',
//     health: 115,
//     maxHealth: 115,
//     level: 15,
//     moves: [
//       { id: 13, name: 'Hydro Pump', power: 80, type: 'water' },
//       { id: 14, name: 'Aqua Jet', power: 65, type: 'water' },
//       { id: 15, name: 'Ice Beam', power: 70, type: 'ice' },
//       { id: 16, name: 'Slam', power: 55, type: 'normal' }
//     ],
//     // image: require('../assets/monsters/hydrakon.png')
//     image: require('../assets/monsters/test-mon.png')
//   },

//   // Grass Types
//   {
//     id: 5,
//     name: 'Leafling',
//     type: 'grass',
//     health: 90,
//     maxHealth: 90,
//     level: 5,
//     moves: [
//       { id: 17, name: 'Vine Whip', power: 40, type: 'grass' },
//       { id: 18, name: 'Tackle', power: 30, type: 'normal' },
//       { id: 19, name: 'Razor Leaf', power: 45, type: 'grass' },
//       { id: 20, name: 'Quick Attack', power: 35, type: 'normal' }
//     ],
//     // image: require('../assets/monsters/leafling.png')
//     image: require('../assets/monsters/test-mon.png')
//   },
//   {
//     id: 6,
//     name: 'Florabeast',
//     type: 'grass',
//     health: 110,
//     maxHealth: 110,
//     level: 15,
//     moves: [
//       { id: 21, name: 'Solar Beam', power: 85, type: 'grass' },
//       { id: 22, name: 'Leaf Storm', power: 75, type: 'grass' },
//       { id: 23, name: 'Energy Ball', power: 65, type: 'grass' },
//       { id: 24, name: 'Body Slam', power: 60, type: 'normal' }
//     ],
//     // image: require('../assets/monsters/florabeast.png')
//     image: require('../assets/monsters/test-mon.png')
//   }
// ];


export const MONSTERS = [
  {
    id: 1,
    name: "Mathling",
    type: "math",
    baseHealth: 100,
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 1, name: "Number Crunch", power: 20, type: "math" },
      { id: 2, name: "Equation Slam", power: 25, type: "math" },
      { id: 3, name: "Fraction Blast", power: 30, type: "math" },
      { id: 4, name: "Prime Strike", power: 35, type: "math" },
    ],
    evolutions: [
      { level: 10, id: 11 }, // Evolves to Algebrex at level 10
      { level: 25, id: 12 }, // Evolves to Calculord at level 25
    ],
  },
  {
    id: 11,
    name: "Algebrex",
    type: "math",
    baseHealth: 150,
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 1, name: "Number Crunch", power: 25, type: "math" },
      { id: 2, name: "Equation Slam", power: 30, type: "math" },
      { id: 3, name: "Quadratic Crush", power: 40, type: "math" },
      { id: 4, name: "Variable Vortex", power: 45, type: "math" },
    ],
    evolutions: [
      { level: 25, id: 12 }, // Evolves to Calculord at level 25
    ],
  },
  {
    id: 12,
    name: "Calculord",
    type: "math",
    baseHealth: 200,
    // image: require("../assets/monsters/algebrex.png"),
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 1, name: "Number Crunch", power: 30, type: "math" },
      { id: 2, name: "Equation Slam", power: 35, type: "math" },
      { id: 3, name: "Calculus Crash", power: 50, type: "math" },
      { id: 4, name: "Integral Inferno", power: 60, type: "math" },
    ],
    evolutions: [], // Final evolution
  },
  {
    id: 2,
    name: "Literabug",
    type: "language",
    baseHealth: 90,
    // image: require("../assets/monsters/calculord.png"),
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 5, name: "Word Whip", power: 20, type: "language" },
      { id: 6, name: "Grammar Grapple", power: 25, type: "language" },
      { id: 7, name: "Syntax Slash", power: 30, type: "language" },
      { id: 8, name: "Vowel Vortex", power: 35, type: "language" },
    ],
    evolutions: [
      { level: 10, id: 21 }, // Evolves to Prosavant at level 10
      { level: 25, id: 22 }, // Evolves to Lexiconian at level 25
    ],
  },
  {
    id: 21,
    name: "Prosavant",
    type: "language",
    baseHealth: 140,
    // image: require("../assets/monsters/prosavant.png"),
    image: require('../assets/monsters/test-mon.png'),
    moves: [
      { id: 5, name: "Word Whip", power: 25, type: "language" },
      { id: 6, name: "Grammar Grapple", power: 30, type: "language" },
      { id: 7, name: "Metaphor Missile", power: 40, type: "language" },
      { id: 8, name: "Narrative Nuke", power: 45, type: "language" },
    ],
    evolutions: [
      { level: 25, id: 22 }, // Evolves to Lexiconian at level 25
    ],
  },
  {
    id: 22,
    name: "Lexiconian",
    type: "language",
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
  return Math.floor(100 * Math.pow(1.5, level - 1))
}

// Calculate experience gained from defeating an enemy
export function calculateExpGain(defeatedLevel, playerLevel) {
  // Base exp is 50, modified by level difference
  const levelDifference = defeatedLevel - playerLevel
  const multiplier = 1 + levelDifference * 0.1

  // Ensure minimum exp gain of 10
  return Math.max(10, Math.floor(50 * multiplier))
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