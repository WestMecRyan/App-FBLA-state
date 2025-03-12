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
import { calculateExpGain, getEvolution, calculateExpToNextLevel } from "../data/monsters"

export default function BattleScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { trainerId, schoolId } = route.params;

  if (!trainerId || !schoolId) {
    console.error("Missing required battle parameters")
    navigation.goBack()
    return null
  }

  const [playerTeam, setPlayerTeam] = useState([]);
  const [activeMonster, setActiveMonster] = useState(null);
  const [enemyTrainer, setEnemyTrainer] = useState(null);
  const [enemyMonster, setEnemyMonster] = useState(null);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [battleText, setBattleText] = useState('');
  const [isBattleOver, setIsBattleOver] = useState(false);
  const [showSwitchModal, setShowSwitchModal] = useState(false);
  //   const [isProcessingTurn, setIsProcessingTurn] = useState(false)

  const playerHealthAnim = useRef(new Animated.Value(100)).current;
  const enemyHealthAnim = useRef(new Animated.Value(100)).current;
  const playerExpAnim = useRef(new Animated.Value(0)).current;

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
      console.log(trainer);

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
    console.log(problem);
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
      console.log("Player Damage: ", damage);
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
    console.log("Enemy Damage: ", damage);
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



  const handleEnemyMonsterFainted = async () => {
    setBattleText(`Enemy ${enemyMonster?.name} fainted!`)
    playSound("faint")

    // Award experience to the active monster
    const expGained = calculateExpGain(enemyMonster.level, activeMonster.level)

    // Create a copy of the active monster to update
    const updatedMonster = { ...activeMonster }
    updatedMonster.exp += expGained;

    activeMonster.exp += expGained;
    Animated.timing(playerExpAnim, {
      toValue: activeMonster.exp,
      duration: 500,
      useNativeDriver: false,
    }).start();

    // Check for level ups
    let leveledUp = false
    let evolvedMonster = null

    // while (updatedMonster.exp >= updatedMonster.expToNextLevel) {
    if (updatedMonster.exp >= updatedMonster.expToNextLevel) {
      // Level up the monster
      updatedMonster.level += 1
      updatedMonster.exp -= updatedMonster.expToNextLevel
      updatedMonster.expToNextLevel = calculateExpToNextLevel(updatedMonster.level)
      updatedMonster.maxHealth = Math.floor(updatedMonster.maxHealth * 1.1) // Increase max health by 10%
      updatedMonster.health = updatedMonster.maxHealth // Heal on level up
      leveledUp = true

      // Check for evolution
      const evolution = getEvolution(updatedMonster.id, updatedMonster.level)
      if (evolution) {
        const newMaxHealth = Math.floor(evolution.baseHealth * (1 + (updatedMonster.level - 1) * 0.1))
        evolvedMonster = {
          ...evolution,
          level: updatedMonster.level,
          exp: updatedMonster.exp,
          expToNextLevel: updatedMonster.expToNextLevel,
          health: newMaxHealth, // Set health to full with new max health
          maxHealth: newMaxHealth,
        }

        setActiveMonster(evolvedMonster);

        const updatedTeam = playerTeam.map((monster) =>
          monster.id === activeMonster.id ? evolvedMonster : monster,
        );

        console.log("Updated team: ", updatedTeam);
        setPlayerTeam(updatedTeam);

        // break
      }
    }

    // // Update the active monster and player team
    // const updatedTeam = playerTeam.map((monster) =>
    //   monster.id === activeMonster.id ? evolvedMonster || updatedMonster : monster,
    // )

    // setPlayerTeam(updatedTeam);

    // setActiveMonster(evolvedMonster || updatedMonster)
    // playerHealthAnim.setValue((evolvedMonster || updatedMonster).health)

    // // Save the game state immediately after exp gain
    // saveGameState({
    //   playerTeam: updatedTeam,
    // }).catch((error) => console.error("Error saving exp gain:", error))

    // Show appropriate messages
    setTimeout(() => {
      setBattleText(`${activeMonster.name} gained ${expGained} EXP!`)
      playSound("expGain")

      setTimeout(() => {
        if (evolvedMonster) {
          setBattleText(`${activeMonster.name} is evolving into ${evolvedMonster.name}!`)
          playSound("evolution")
        } else if (leveledUp) {
          setBattleText(`${activeMonster.name} leveled up to level ${updatedMonster.level}!`)
          playSound("levelUp")
        }

        // Check for next enemy monster
        setTimeout(
          () => {
            const nextEnemyMonster = enemyTrainer?.monsters.find((m) => m.health > 0 && m.id !== enemyMonster?.id)

            if (nextEnemyMonster) {
              setEnemyMonster(nextEnemyMonster)
              enemyHealthAnim.setValue(nextEnemyMonster.health)
              setBattleText(`${enemyTrainer?.name} sent out ${nextEnemyMonster.name}!`)
              playSound("switch")
              setIsProcessingTurn(false)
            } else {
              handleBattleWin()
            }
          },
          evolvedMonster || leveledUp ? 2000 : 0,
        )
      }, 2000)
    }, 2000)
  }

  // const handlePlayerMonsterFainted = () => {
  //   setBattleText(`${activeMonster?.name} fainted!`);
  //   playSound('faint');

  //   const nextMonster = playerTeam.find(
  //     m => m.health > 0 && m.id !== activeMonster?.id
  //   );

  //   if (nextMonster) {
  //     setShowSwitchModal(true);
  //   } else {
  //     handleBattleLoss();
  //   }
  // };

  const handlePlayerMonsterFainted = () => {
    setBattleText(`${activeMonster?.name} fainted!`)
    playSound("faint")

    const nextMonster = playerTeam.find((m) => m.health > 0 && m.id !== activeMonster?.id)

    if (nextMonster) {
      setTimeout(() => {
        setActiveMonster(nextMonster)
        playerHealthAnim.setValue(nextMonster.health)
        setBattleText(`Go, ${nextMonster.name}!`)
        playSound("switch")
        setIsProcessingTurn(false)
      }, 2000)
    } else {
      handleBattleLoss()
    }
  }



  // const handleBattleWin = async () => {
  //   setBattleText(`You defeated ${enemyTrainer?.name}!`);
  //   playSound('victory');

  //   // Save progress
  //   const gameState = await loadGameState();
  //   console.log("Player team before save: ", playerTeam);
  //   await saveGameState({
  //     defeatedTrainers: [...gameState.defeatedTrainers, trainerId],
  //     playerTeam: playerTeam,
  //   });

  //   setIsBattleOver(true);
  // };


  const handleBattleWin = async () => {
    setBattleText(`You defeated ${enemyTrainer?.name}!`);
    playSound('victory');

    // Update the game state with defeated trainers
    const gameState = await loadGameState();
    console.log("Player team before save: ", playerTeam);
    const updatedGameState = {
      ...gameState,
      defeatedTrainers: [...gameState.defeatedTrainers, trainerId],
      playerTeam: playerTeam,
    };

    await saveGameState(updatedGameState);

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



  useEffect(() => {
    console.log("Saving team:", playerTeam);
    saveGameState({
      playerTeam: playerTeam,
    }).catch((error) => console.error("Error saving team:", error));
  }, [playerTeam]);


  useEffect(() => {
    if (activeMonster) {
      console.log("New active monster: ", activeMonster);
    }
  }, [activeMonster]);

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
            animatedExp={playerExpAnim}
          />
        )}
      </View>


      {/* Battle Text */}
      <BattleText
        message={battleText}
        onComplete={() => {
          if (isBattleOver) {
            navigation.goBack();
          }
        }}
      />

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
      {/* <BattleText
        message={battleText}
        onComplete={() => {
          if (isBattleOver) {
            navigation.goBack();
          }
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB' // blue background
  },
  battleScene: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
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