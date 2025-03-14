// import { MONSTERS } from './monsters';
// import { createMonster } from "../data/monsters"
// import { PROBLEMS } from './problems';

// export const SCHOOLS = [
//   {
//     id: 1,
//     name: 'Fire School',
//     type: 'fire',
//     trainers: [
//       {
//         id: 1,
//         name: 'Novice Flynn',
//         type: 'fire',
//         monsters: [createMonster(1, 4)],
//         problems: PROBLEMS.math.slice(0, 3),
//         isLeader: false,
//         schoolId: 1,
//         // image: require('../assets/trainers/flynn.png')
//         image: require('../assets/trainers/test-trainer.png')
//       },
//       {
//         id: 2,
//         name: 'Apprentice Ember',
//         type: 'fire',
//         // monsters: [MONSTERS[0], MONSTERS[1]],
//         monsters: [createMonster(1, 5), createMonster(1, 6)],
//         problems: PROBLEMS.math.slice(3, 6),
//         isLeader: false,
//         schoolId: 1,
//         // image: require('../assets/trainers/ember.png')
//         image: require('../assets/trainers/test-trainer.png')
//       },
//       {
//         id: 3,
//         name: 'Master Blaze',
//         type: 'fire',
//         monsters: [MONSTERS[0], MONSTERS[1], MONSTERS[1]],
//         problems: PROBLEMS.math.slice(6, 9),
//         isLeader: true,
//         schoolId: 1,
//         // image: require('../assets/trainers/blaze.png')
//         image: require('../assets/trainers/test-trainer.png')
//       }
//     ],
//     isLocked: false
//   }
//   // {
//   //   id: 2,
//   //   name: 'Water School',
//   //   type: 'water',
//   //   trainers: [
//   //     {
//   //       id: 4,
//   //       name: 'Novice Brook',
//   //       type: 'water',
//   //       monsters: [MONSTERS[2]],
//   //       problems: PROBLEMS.math.slice(9, 12),
//   //       isLeader: false,
//   //       schoolId: 2,
//   //       image: require('../assets/trainers/brook.png')
//   //     },
//   //     {
//   //       id: 5,
//   //       name: 'Apprentice River',
//   //       type: 'water',
//   //       monsters: [MONSTERS[2], MONSTERS[3]],
//   //       problems: PROBLEMS.math.slice(12, 15),
//   //       isLeader: false,
//   //       schoolId: 2,
//   //       image: require('../assets/trainers/river.png')
//   //     },
//   //     {
//   //       id: 6,
//   //       name: 'Master Tidal',
//   //       type: 'water',
//   //       monsters: [MONSTERS[2], MONSTERS[3], MONSTERS[3]],
//   //       problems: PROBLEMS.math.slice(15, 18),
//   //       isLeader: true,
//   //       schoolId: 2,
//   //       image: require('../assets/trainers/tidal.png')
//   //     }
//   //   ],
//   //   isLocked: true
//   // },
//   // {
//   //   id: 3,
//   //   name: 'Grass School',
//   //   type: 'grass',
//   //   trainers: [
//   //     {
//   //       id: 7,
//   //       name: 'Novice Leaf',
//   //       type: 'grass',
//   //       monsters: [MONSTERS[4]],
//   //       problems: PROBLEMS.math.slice(18, 21),
//   //       isLeader: false,
//   //       schoolId: 3,
//   //       image: require('../assets/trainers/leaf.png')
//   //     },
//   //     {
//   //       id: 8,
//   //       name: 'Apprentice Vine',
//   //       type: 'grass',
//   //       monsters: [MONSTERS[4], MONSTERS[5]],
//   //       problems: PROBLEMS.math.slice(21, 24),
//   //       isLeader: false,
//   //       schoolId: 3,
//   //       image: require('../assets/trainers/vine.png')
//   //     },
//   //     {
//   //       id: 9,
//   //       name: 'Master Flora',
//   //       type: 'grass',
//   //       monsters: [MONSTERS[4], MONSTERS[5], MONSTERS[5]],
//   //       problems: PROBLEMS.math.slice(24, 27),
//   //       isLeader: true,
//   //       schoolId: 3,
//   //       image: require('../assets/trainers/flora.png')
//   //     }
//   //   ],
//   //   isLocked: true
//   // }
// ];



import { MONSTERS } from "./monsters"
import { createMonster } from "../data/monsters"
import { PROBLEMS } from "./problems"

export const SCHOOLS = [
  {
    id: 1,
    name: "Fire School",
    type: "fire",
    trainers: [
      {
        id: 1,
        name: "Novice Flynn",
        type: "fire",
        monsters: [createMonster(1, 3)],
        problems: PROBLEMS.math.slice(0, 3),
        isLeader: false,
        schoolId: 1,
        image: require("../assets/trainers/test-trainer.png"),
        // No random encounter before the first trainer
        hasRandomEncounterBefore: false,
      },
      {
        id: 2,
        name: "Apprentice Ember",
        type: "fire",
        monsters: [createMonster(1, 5), createMonster(1, 6)],
        problems: PROBLEMS.math.slice(3, 6),
        isLeader: false,
        schoolId: 1,
        image: require("../assets/trainers/test-trainer.png"),
        // Random encounter before this trainer
        hasRandomEncounterBefore: true,
        randomEncounterPool: [
          {
            monsterId: 1, // Mathling (fire type)
            levelRange: { min: 3, max: 5 },
            chance: 0.8, // 70% chance of encountering this monster
          },
        ],
      },
      {
        id: 3,
        name: "Master Blaze",
        type: "fire",
        monsters: [createMonster(11, 10), createMonster(11, 12)],
        problems: PROBLEMS.math.slice(6, 9),
        isLeader: true,
        schoolId: 1,
        image: require("../assets/trainers/test-trainer.png"),
        // Random encounter before the leader
        hasRandomEncounterBefore: true,
        randomEncounterPool: [
          {
            monsterId: 1, // Mathling (fire type)
            levelRange: { min: 5, max: 9 },
            chance: 0.5, // 50% chance
          },
          {
            monsterId: 11, // Algebrex (fire type)
            levelRange: { min: 10, max: 14 },
            chance: 0.5, // 50% chance
          },
        ],
      },
    ],
    isLocked: false,
  },
  {
    id: 2,
    name: "Water School",
    type: "water",
    trainers: [
      {
        id: 4,
        name: "Novice Brook",
        type: "water",
        monsters: [createMonster(2, 8)],
        problems: PROBLEMS.math.slice(9, 12),
        isLeader: false,
        schoolId: 2,
        image: require("../assets/trainers/test-trainer.png"),
        hasRandomEncounterBefore: false,
      },
      {
        id: 5,
        name: "Apprentice River",
        type: "water",
        monsters: [createMonster(2, 10), createMonster(2, 11)],
        problems: PROBLEMS.math.slice(12, 15),
        isLeader: false,
        schoolId: 2,
        image: require("../assets/trainers/test-trainer.png"),
        hasRandomEncounterBefore: true,
        randomEncounterPool: [
          {
            monsterId: 2, // Literabug (water type)
            levelRange: { min: 7, max: 12 },
            chance: 0.7, // 70% chance
          },
          {
            monsterId: 21, // Prosavant (water type)
            levelRange: { min: 12, max: 16 },
            chance: 0.3, // 30% chance
          },
        ],
      },
      {
        id: 6,
        name: "Master Tidal",
        type: "water",
        monsters: [createMonster(2, 12), createMonster(21, 14), createMonster(2, 13)],
        problems: PROBLEMS.math.slice(15, 18),
        isLeader: true,
        schoolId: 2,
        image: require("../assets/trainers/test-trainer.png"),
        hasRandomEncounterBefore: true,
        randomEncounterPool: [
          {
            monsterId: 2, // Literabug (water type)
            levelRange: { min: 10, max: 15 },
            chance: 0.5, // 50% chance
          },
          {
            monsterId: 21, // Prosavant (water type)
            levelRange: { min: 14, max: 18 },
            chance: 0.5, // 50% chance
          },
        ],
      },
    ],
    isLocked: true,
  },
  {
    id: 3,
    name: "Grass School",
    type: "grass",
    trainers: [
      {
        id: 7,
        name: "Novice Leaf",
        type: "grass",
        monsters: [createMonster(3, 14)],
        problems: PROBLEMS.math.slice(18, 21),
        isLeader: false,
        schoolId: 3,
        image: require("../assets/trainers/test-trainer.png"),
        hasRandomEncounterBefore: false,
      },
      {
        id: 8,
        name: "Apprentice Vine",
        type: "grass",
        monsters: [createMonster(3, 16), createMonster(3, 17)],
        problems: PROBLEMS.math.slice(21, 24),
        isLeader: false,
        schoolId: 3,
        image: require("../assets/trainers/test-trainer.png"),
        hasRandomEncounterBefore: true,
        randomEncounterPool: [
          {
            monsterId: 3, // Scienspark (grass type)
            levelRange: { min: 13, max: 18 },
            chance: 0.7, // 70% chance
          },
          {
            monsterId: 31, // Beakerton (grass type)
            levelRange: { min: 18, max: 22 },
            chance: 0.3, // 30% chance
          },
        ],
      },
      {
        id: 9,
        name: "Master Flora",
        type: "grass",
        monsters: [createMonster(3, 18), createMonster(31, 20), createMonster(3, 19)],
        problems: PROBLEMS.math.slice(24, 27),
        isLeader: true,
        schoolId: 3,
        image: require("../assets/trainers/test-trainer.png"),
        hasRandomEncounterBefore: true,
        randomEncounterPool: [
          {
            monsterId: 3, // Scienspark (grass type)
            levelRange: { min: 15, max: 20 },
            chance: 0.5, // 50% chance
          },
          {
            monsterId: 31, // Beakerton (grass type)
            levelRange: { min: 20, max: 25 },
            chance: 0.5, // 50% chance
          },
        ],
      },
    ],
    isLocked: true,
  },
]

// Function to get a random encounter from a trainer's encounter pool
export function getRandomEncounterForTrainer(schoolId, trainerId) {
  const school = SCHOOLS.find((s) => s.id === schoolId)
  if (!school) return null

  const trainer = school.trainers.find((t) => t.id === trainerId)
  if (
    !trainer ||
    !trainer.hasRandomEncounterBefore ||
    !trainer.randomEncounterPool ||
    trainer.randomEncounterPool.length === 0
  ) {
    return null
  }

  // Determine which monster to encounter based on chance
  const randomValue = Math.random()
  let cumulativeChance = 0

  for (const monster of trainer.randomEncounterPool) {
    cumulativeChance += monster.chance
    if (randomValue <= cumulativeChance) {
      // Found our encounter, now create the monster with a random level in the range
      const level = Math.floor(
        Math.random() * (monster.levelRange.max - monster.levelRange.min + 1) + monster.levelRange.min,
      )
      return createMonster(monster.monsterId, level)
    }
  }

  // Fallback to the first monster if something went wrong with probabilities
  const fallbackMonster = trainer.randomEncounterPool[0]
  const level = Math.floor(
    Math.random() * (fallbackMonster.levelRange.max - fallbackMonster.levelRange.min + 1) +
      fallbackMonster.levelRange.min,
  )
  return createMonster(fallbackMonster.monsterId, level)
}

