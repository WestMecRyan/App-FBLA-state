import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  BackHandler,
  Modal,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Audio } from 'expo-av';
import MonsterDisplay from '../components/battle/MonsterDisplay';
import MovesPanel from '../components/battle/MovesPanel';
import ProblemModal from '../components/battle/ProblemModal';
import BattleText from '../components/battle/BattleText';
import { loadGameState, saveGameState, updatePlayerTeam } from '../utils/gameState';
import { SCHOOLS } from '../data/schools';
import { playSound, playBgMusic, stopBgMusic } from '../utils/audio';

export default function BattleScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { trainerId, schoolId } = route.params;

  const [playerTeam, setPlayerTeam] = useState([]);
  const [activeMonster, setActiveMonster] = useState(null);
  const [enemyTrainer, setEnemyTrainer] = useState(null);
  const [enemyMonster, setEnemyMonster] = useState(null);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [battleText, setBattleText] = useState('');
  const [isBattleOver, setIsBattleOver] = useState(false);
  const [showSwitchModal, setShowSwitchModal] = useState(false);

  const playerHealthAnim = useRef(new Animated.Value(100)).current;
  const enemyHealthAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    initializeBattle();
    playBgMusic('battle');

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => {
      backHandler.remove();
      stopBgMusic();
    };
  }, []);

  const handleBackPress = () => {
    if (isBattleOver) {
      navigation.goBack();
      return true;
    }
    return false;
  };

  const initializeBattle = async () => {
    const gameState = await loadGameState();
    const trainer = SCHOOLS
      .find(s => s.id === schoolId)
      ?.trainers.find(t => t.id === trainerId);

    if (trainer && gameState.playerTeam.length > 0) {
      setPlayerTeam(gameState.playerTeam);
      setActiveMonster(gameState.playerTeam[0]);
      setEnemyTrainer(trainer);
      setEnemyMonster(trainer.monsters[0]);

      playerHealthAnim.setValue(gameState.playerTeam[0].health);
      enemyHealthAnim.setValue(trainer.monsters[0].health);

      setBattleText(`${trainer.name} wants to battle!`);
      playSound('battleStart');
    }
  };

  const handleMoveSelect = (move) => {
    const problem = enemyTrainer?.problems[
      Math.floor(Math.random() * enemyTrainer.problems.length)
    ];
    if (problem) {
      setCurrentProblem(problem);
      playSound('question');
    }
  };

  const handleProblemAnswer = async (correct) => {
    setCurrentProblem(null);

    if (correct && activeMonster && enemyMonster) {
      playSound('correctAnswer');

      // Player's turn
      const damage = calculateDamage(activeMonster, enemyMonster);
      const newEnemyHealth = Math.max(0, enemyMonster.health - damage);

      Animated.timing(enemyHealthAnim, {
        toValue: newEnemyHealth,
        duration: 1000,
        useNativeDriver: false
      }).start();

      enemyMonster.health = newEnemyHealth;
      setBattleText(`${activeMonster.name} dealt ${damage} damage!`);
      playSound('hit');

      if (newEnemyHealth <= 0) {
        handleEnemyMonsterFainted();
        return;
      }
    } else {
      playSound('wrongAnswer');
      setBattleText('The attack missed!');
    }

    // Enemy's turn after a delay
    setTimeout(() => {
      handleEnemyTurn();
    }, 2000);
  };

  const handleEnemyTurn = () => {
    if (!activeMonster || !enemyMonster) return;

    const enemyMove = enemyMonster.moves[
      Math.floor(Math.random() * enemyMonster.moves.length)
    ];
    const damage = calculateDamage(enemyMonster, activeMonster);
    const newPlayerHealth = Math.max(0, activeMonster.health - damage);

    Animated.timing(playerHealthAnim, {
      toValue: newPlayerHealth,
      duration: 1000,
      useNativeDriver: false
    }).start();

    activeMonster.health = newPlayerHealth;
    setBattleText(`Enemy ${enemyMonster.name} used ${enemyMove.name}!`);
    playSound('hit');

    if (newPlayerHealth <= 0) {
      handlePlayerMonsterFainted();
    }
  };

  const handleSwitchMonster = (newMonster) => {
    setActiveMonster(newMonster);
    playerHealthAnim.setValue(newMonster.health);
    setBattleText(`Go, ${newMonster.name}!`);
    playSound('switch');
    setShowSwitchModal(false);

    // Enemy's turn after switch
    setTimeout(() => {
      handleEnemyTurn();
    }, 2000);
  };

  const handleEnemyMonsterFainted = () => {
    setBattleText(`Enemy ${enemyMonster?.name} fainted!`);
    playSound('faint');

    const nextEnemyMonster = enemyTrainer?.monsters.find(
      m => m.health > 0 && m.id !== enemyMonster?.id
    );

    if (nextEnemyMonster) {
      setTimeout(() => {
        setEnemyMonster(nextEnemyMonster);
        enemyHealthAnim.setValue(nextEnemyMonster.health);
        setBattleText(`${enemyTrainer?.name} sent out ${nextEnemyMonster.name}!`);
        playSound('switch');
      }, 2000);
    } else {
      handleBattleWin();
    }
  };

  const handlePlayerMonsterFainted = () => {
    setBattleText(`${activeMonster?.name} fainted!`);
    playSound('faint');

    const nextMonster = playerTeam.find(
      m => m.health > 0 && m.id !== activeMonster?.id
    );

    if (nextMonster) {
      setShowSwitchModal(true);
    } else {
      handleBattleLoss();
    }
  };

  const handleBattleWin = async () => {
    setBattleText(`You defeated ${enemyTrainer?.name}!`);
    playSound('victory');

    // Save progress
    const gameState = await loadGameState();
    await saveGameState({
      defeatedTrainers: [...gameState.defeatedTrainers, trainerId],
      playerTeam
    });

    setIsBattleOver(true);
  };

  const handleBattleLoss = () => {
    setBattleText('You lost the battle...');
    playSound('defeat');
    setIsBattleOver(true);
  };

  const calculateDamage = (attacker, defender) => {
    const base = 20;
    const levelFactor = attacker.level / defender.level;
    const typeBonus = getTypeBonus(attacker.type, defender.type);
    const randomFactor = 0.85 + Math.random() * 0.3; // Random factor between 0.85 and 1.15
    return Math.floor(base * levelFactor * typeBonus * randomFactor);
  };

  const getTypeBonus = (attackerType, defenderType) => {
    const typeChart = {
      fire: { grass: 2, water: 0.5 },
      water: { fire: 2, grass: 0.5 },
      grass: { water: 2, fire: 0.5 }
    };
    return typeChart[attackerType]?.[defenderType] || 1;
  };

  return (
    <View style={styles.container}>
      {/* Battle Scene */}
      <View style={styles.battleScene}>
        {enemyMonster && (
          <MonsterDisplay
            monster={enemyMonster}
            isEnemy={true}
            animatedHealth={enemyHealthAnim}
          />
        )}
        {activeMonster && (
          <MonsterDisplay
            monster={activeMonster}
            animatedHealth={playerHealthAnim}
          />
        )}
      </View>

      {/* Controls */}
      {activeMonster && (
        <MovesPanel
          monster={activeMonster}
          onMoveSelect={handleMoveSelect}
          onSwitchPress={() => setShowSwitchModal(true)}
          disabled={!!currentProblem || isBattleOver}
        />
      )}

      {/* Problem Modal */}
      {currentProblem && (
        <ProblemModal
          visible={true}
          problem={currentProblem}
          onAnswer={handleProblemAnswer}
        />
      )}

      {/* Switch Monster Modal */}
      <Modal
        visible={showSwitchModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose a Monster</Text>
            {playerTeam.map((monster, index) => (
              monster.health > 0 && monster.id !== activeMonster?.id && (
                <TouchableOpacity
                  key={index}
                  style={styles.monsterOption}
                  onPress={() => handleSwitchMonster(monster)}
                >
                  <Image
                    source={monster.image}
                    style={styles.monsterOptionImage}
                  />
                  <View style={styles.monsterOptionInfo}>
                    <Text style={styles.monsterOptionName}>{monster.name}</Text>
                    <Text style={styles.monsterOptionHealth}>
                      HP: {monster.health}/{monster.maxHealth}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            ))}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowSwitchModal(false)}
            >
              <Text style={styles.cancelButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Battle Text */}
      <BattleText
        message={battleText}
        onComplete={() => {
          if (isBattleOver) {
            navigation.goBack();
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB' // Sky blue background
  },
  battleScene: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '80%'
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  monsterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 10
  },
  monsterOptionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
  },
  monsterOptionInfo: {
    flex: 1
  },
  monsterOptionName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  monsterOptionHealth: {
    fontSize: 14,
    color: '#666'
  },
  cancelButton: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  cancelButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});







// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   StyleSheet,
//   Animated,
//   BackHandler
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import MonsterDisplay from '../components/battle/MonsterDisplay';
// import MovesPanel from '../components/battle/MovesPanel';
// import ProblemModal from '../components/battle/ProblemModal';
// import BattleText from '../components/battle/BattleText';
// import { loadGameState, saveGameState } from '../utils/gameState';
// import { SCHOOLS } from '../data/schools';
// import { playSound, playBgMusic, stopBgMusic } from '../utils/audio';

// export default function BattleScreen() {
//   const navigation = useNavigation();
//   const route = useRoute();

//   // Add console.log to debug params
//   console.log('Battle Screen Params:', route.params);

//   const { trainerId, schoolId } = route.params || {};

//   // Add early return if params are missing
//   if (!trainerId || !schoolId) {
//     console.error('Missing required battle parameters');
//     navigation.goBack();
//     return null;
//   }

//   const [playerTeam, setPlayerTeam] = useState([]);
//   const [activeMonster, setActiveMonster] = useState(null);
//   const [enemyTrainer, setEnemyTrainer] = useState(null);
//   const [enemyMonster, setEnemyMonster] = useState(null);
//   const [currentProblem, setCurrentProblem] = useState(null);
//   const [battleText, setBattleText] = useState('');
//   const [isBattleOver, setIsBattleOver] = useState(false);
//   const [showSwitchModal, setShowSwitchModal] = useState(false); // Added state variable

//   const playerHealthAnim = useRef(new Animated.Value(100)).current;
//   const enemyHealthAnim = useRef(new Animated.Value(100)).current;

//   useEffect(() => {
//     const initBattle = async () => {
//       try {
//         const gameState = await loadGameState();
//         const school = SCHOOLS.find(s => s.id === schoolId);
//         const trainer = school?.trainers.find(t => t.id === trainerId);

//         console.log('Found trainer:', trainer); // Debug log


//         // console.log(gameState);
//         if (trainer && gameState.playerTeam.length > 0) {
//           setPlayerTeam(gameState.playerTeam);
//           setActiveMonster(gameState.playerTeam[0]);
//           setEnemyTrainer(trainer);
//           setEnemyMonster(trainer.monsters[0]);

//           playerHealthAnim.setValue(gameState.playerTeam[0].health);
//           enemyHealthAnim.setValue(trainer.monsters[0].health);

//           setBattleText(`${trainer.name} wants to battle!`);
//           playSound('battleStart');
//         } else {
//           console.error('Failed to initialize battle');
//           navigation.goBack();
//         }
//       } catch (error) {
//         console.error('Battle initialization error:', error);
//         navigation.goBack();
//       }
//     };

//     initBattle();
//     playBgMusic('battle');

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       handleBackPress
//     );

//     return () => {
//       backHandler.remove();
//       stopBgMusic();
//     };
//   }, [trainerId, schoolId, playerHealthAnim, enemyHealthAnim, navigation]); // Added dependencies

//   const handleBackPress = () => {
//     // Implement your back press logic here
//     console.log('Back button pressed during battle');
//     // For example, you might want to show a confirmation dialog
//     // before allowing the user to exit the battle.
//     return true; // Return true to prevent default back behavior
//   };

//   const handleMoveSelect = (move) => {
//     // Implement your move selection logic here
//     console.log('Move selected:', move);
//     // Example: Update battleText, animate health, check for win/loss conditions
//   };

//   const handleProblemAnswer = (isCorrect) => {
//     // Implement problem answer handling logic here
//     console.log('Problem answered:', isCorrect);
//     // Update battle state based on the answer
//   };


//   return (
//     <View style={styles.container}>
//       <View style={styles.battleScene}>
//         {enemyMonster && (
//           <MonsterDisplay
//             monster={enemyMonster}
//             isEnemy={true}
//             animatedHealth={enemyHealthAnim}
//           />
//         )}
//         {activeMonster && (
//           <MonsterDisplay
//             monster={activeMonster}
//             animatedHealth={playerHealthAnim}
//           />
//         )}
//       </View>

//       {activeMonster && (
//         <MovesPanel
//           monster={activeMonster}
//           onMoveSelect={handleMoveSelect}
//           onSwitchPress={() => setShowSwitchModal(true)}
//           disabled={!!currentProblem || isBattleOver}
//         />
//       )}

//       {currentProblem && (
//         <ProblemModal
//           visible={true}
//           problem={currentProblem}
//           onAnswer={handleProblemAnswer}
//         />
//       )}

//       <BattleText
//         message={battleText}
//         onComplete={() => {
//           if (isBattleOver) {
//             navigation.goBack();
//           }
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#87CEEB' // Sky blue background
//   },
//   battleScene: {
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: 20
//   }
// });