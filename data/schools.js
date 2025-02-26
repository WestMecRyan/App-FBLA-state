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
        monsters: [MONSTERS[0]], // One basic fire monster
        problems: PROBLEMS.math.slice(0, 3), // First 3 math problems
        isLeader: false,
        schoolId: 1,
        image: require('../assets/trainers/flynn.png')
      },
      {
        id: 2,
        name: 'Apprentice Ember',
        type: 'fire',
        monsters: [MONSTERS[0], MONSTERS[1]], // Two fire monsters
        problems: PROBLEMS.math.slice(3, 6),
        isLeader: false,
        schoolId: 1,
        image: require('../assets/trainers/ember.png')
      },
      {
        id: 3,
        name: 'Master Blaze',
        type: 'fire',
        monsters: [MONSTERS[0], MONSTERS[1], MONSTERS[1]], // Three fire monsters
        problems: PROBLEMS.math.slice(6, 9),
        isLeader: true,
        schoolId: 1,
        image: require('../assets/trainers/blaze.png')
      }
    ],
    isLocked: false
  },
  // Add Water and Grass schools similarly...
];