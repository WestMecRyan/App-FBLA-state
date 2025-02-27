export const MONSTERS = [
  // Fire Types
  {
    id: 1,
    name: 'Flamander',
    type: 'fire',
    health: 100,
    maxHealth: 100,
    level: 5,
    moves: [
      { id: 1, name: 'Ember', power: 40, type: 'fire' },
      { id: 2, name: 'Scratch', power: 30, type: 'normal' },
      { id: 3, name: 'Fire Fang', power: 50, type: 'fire' },
      { id: 4, name: 'Quick Attack', power: 35, type: 'normal' }
    ],
    // image: require('../assets/monsters/flamander.png')
    image: require('../assets/monsters/test-mon.png')
  },
  {
    id: 2,
    name: 'Blazix',
    type: 'fire',
    health: 120,
    maxHealth: 120,
    level: 15,
    moves: [
      { id: 5, name: 'Flamethrower', power: 70, type: 'fire' },
      { id: 6, name: 'Fire Blast', power: 85, type: 'fire' },
      { id: 7, name: 'Dragon Breath', power: 60, type: 'dragon' },
      { id: 8, name: 'Slash', power: 55, type: 'normal' }
    ],
    // image: require('../assets/monsters/blazix.png')
    image: require('../assets/monsters/test-mon.png')
  },

  // Water Types
  {
    id: 3,
    name: 'Aquatle',
    type: 'water',
    health: 95,
    maxHealth: 95,
    level: 5,
    moves: [
      { id: 9, name: 'Water Gun', power: 40, type: 'water' },
      { id: 10, name: 'Tackle', power: 30, type: 'normal' },
      { id: 11, name: 'Bubble', power: 45, type: 'water' },
      { id: 12, name: 'Quick Attack', power: 35, type: 'normal' }
    ],
    // image: require('../assets/monsters/aquatle.png')
    image: require('../assets/monsters/test-mon.png')
  },
  {
    id: 4,
    name: 'Hydrakon',
    type: 'water',
    health: 115,
    maxHealth: 115,
    level: 15,
    moves: [
      { id: 13, name: 'Hydro Pump', power: 80, type: 'water' },
      { id: 14, name: 'Aqua Jet', power: 65, type: 'water' },
      { id: 15, name: 'Ice Beam', power: 70, type: 'ice' },
      { id: 16, name: 'Slam', power: 55, type: 'normal' }
    ],
    // image: require('../assets/monsters/hydrakon.png')
    image: require('../assets/monsters/test-mon.png')
  },

  // Grass Types
  {
    id: 5,
    name: 'Leafling',
    type: 'grass',
    health: 90,
    maxHealth: 90,
    level: 5,
    moves: [
      { id: 17, name: 'Vine Whip', power: 40, type: 'grass' },
      { id: 18, name: 'Tackle', power: 30, type: 'normal' },
      { id: 19, name: 'Razor Leaf', power: 45, type: 'grass' },
      { id: 20, name: 'Quick Attack', power: 35, type: 'normal' }
    ],
    // image: require('../assets/monsters/leafling.png')
    image: require('../assets/monsters/test-mon.png')
  },
  {
    id: 6,
    name: 'Florabeast',
    type: 'grass',
    health: 110,
    maxHealth: 110,
    level: 15,
    moves: [
      { id: 21, name: 'Solar Beam', power: 85, type: 'grass' },
      { id: 22, name: 'Leaf Storm', power: 75, type: 'grass' },
      { id: 23, name: 'Energy Ball', power: 65, type: 'grass' },
      { id: 24, name: 'Body Slam', power: 60, type: 'normal' }
    ],
    // image: require('../assets/monsters/florabeast.png')
    image: require('../assets/monsters/test-mon.png')
  }
];