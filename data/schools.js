import { MONSTERS } from './monsters';
import { PROBLEMS } from './problems';

export const SCHOOLS = [
  {
    id: 1,
    name: 'Fire School',
    type: 'fire',
    trainers: [
      {
        id: 1,
        name: 'Novice Flynn',
        type: 'fire',
        monsters: [MONSTERS[0]],
        problems: PROBLEMS.math.slice(0, 3),
        isLeader: false,
        schoolId: 1,
        // image: require('../assets/trainers/flynn.png')
        image: require('../assets/trainers/test-trainer.png')
      },
      {
        id: 2,
        name: 'Apprentice Ember',
        type: 'fire',
        monsters: [MONSTERS[0], MONSTERS[1]],
        problems: PROBLEMS.math.slice(3, 6),
        isLeader: false,
        schoolId: 1,
        // image: require('../assets/trainers/ember.png')
        image: require('../assets/trainers/test-trainer.png')
      },
      {
        id: 3,
        name: 'Master Blaze',
        type: 'fire',
        monsters: [MONSTERS[0], MONSTERS[1], MONSTERS[1]],
        problems: PROBLEMS.math.slice(6, 9),
        isLeader: true,
        schoolId: 1,
        // image: require('../assets/trainers/blaze.png')
        image: require('../assets/trainers/test-trainer.png')
      }
    ],
    isLocked: false
  }
  // {
  //   id: 2,
  //   name: 'Water School',
  //   type: 'water',
  //   trainers: [
  //     {
  //       id: 4,
  //       name: 'Novice Brook',
  //       type: 'water',
  //       monsters: [MONSTERS[2]],
  //       problems: PROBLEMS.math.slice(9, 12),
  //       isLeader: false,
  //       schoolId: 2,
  //       image: require('../assets/trainers/brook.png')
  //     },
  //     {
  //       id: 5,
  //       name: 'Apprentice River',
  //       type: 'water',
  //       monsters: [MONSTERS[2], MONSTERS[3]],
  //       problems: PROBLEMS.math.slice(12, 15),
  //       isLeader: false,
  //       schoolId: 2,
  //       image: require('../assets/trainers/river.png')
  //     },
  //     {
  //       id: 6,
  //       name: 'Master Tidal',
  //       type: 'water',
  //       monsters: [MONSTERS[2], MONSTERS[3], MONSTERS[3]],
  //       problems: PROBLEMS.math.slice(15, 18),
  //       isLeader: true,
  //       schoolId: 2,
  //       image: require('../assets/trainers/tidal.png')
  //     }
  //   ],
  //   isLocked: true
  // },
  // {
  //   id: 3,
  //   name: 'Grass School',
  //   type: 'grass',
  //   trainers: [
  //     {
  //       id: 7,
  //       name: 'Novice Leaf',
  //       type: 'grass',
  //       monsters: [MONSTERS[4]],
  //       problems: PROBLEMS.math.slice(18, 21),
  //       isLeader: false,
  //       schoolId: 3,
  //       image: require('../assets/trainers/leaf.png')
  //     },
  //     {
  //       id: 8,
  //       name: 'Apprentice Vine',
  //       type: 'grass',
  //       monsters: [MONSTERS[4], MONSTERS[5]],
  //       problems: PROBLEMS.math.slice(21, 24),
  //       isLeader: false,
  //       schoolId: 3,
  //       image: require('../assets/trainers/vine.png')
  //     },
  //     {
  //       id: 9,
  //       name: 'Master Flora',
  //       type: 'grass',
  //       monsters: [MONSTERS[4], MONSTERS[5], MONSTERS[5]],
  //       problems: PROBLEMS.math.slice(24, 27),
  //       isLeader: true,
  //       schoolId: 3,
  //       image: require('../assets/trainers/flora.png')
  //     }
  //   ],
  //   isLocked: true
  // }
];
