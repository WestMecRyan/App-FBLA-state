import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { loadGameState, healTeam } from '../utils/gameState';
import { PROBLEMS } from '../data/problems';

export default function TeamManagementScreen() {
  const navigation = useNavigation();
  const [team, setTeam] = useState([]);
  const [showHealModal, setShowHealModal] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(PROBLEMS.math[0]);
  const [healingInProgress, setHealingInProgress] = useState(false);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    const gameState = await loadGameState();
    setTeam(gameState.playerTeam);
  };

  const handleHealAttempt = async (answer) => {
    if (answer === currentProblem.correctAnswer) {
      setHealingInProgress(true);
      await healTeam();
      const updatedState = await loadGameState();
      setTeam(updatedState.playerTeam);
      setShowHealModal(false);
      setHealingInProgress(false);
    } else {
      setHealingInProgress(false);
    }
  };

  const renderHealthBar = (current, max) => {
    const percentage = (current / max) * 100;
    const barColor = percentage > 50 ? '#4CAF50' : percentage > 25 ? '#FFC107' : '#F44336';

    return (
      <View style={styles.healthBarContainer}>
        <View 
          style={[
            styles.healthBar,
            { width: `${percentage}%`, backgroundColor: barColor }
          ]} 
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Team Management</Text>
        <TouchableOpacity
          onPress={() => setShowHealModal(true)}
          style={styles.healButton}
          disabled={healingInProgress}
        >
          <Ionicons name="medical" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.teamList}>
        {team.map((monster, index) => (
          <View key={index} style={styles.monsterCard}>
            <Image
              source={monster.image}
              style={styles.monsterImage}
            />
            <View style={styles.monsterInfo}>
              <Text style={styles.monsterName}>{monster.name}</Text>
              <Text style={styles.monsterLevel}>Level {monster.level}</Text>
              {renderHealthBar(monster.health, monster.maxHealth)}
              <Text style={styles.healthText}>
                {monster.health}/{monster.maxHealth} HP
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={showHealModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Answer to Heal Your Team</Text>
            <Text style={styles.question}>{currentProblem.question}</Text>
            
            <View style={styles.answersContainer}>
              {currentProblem.answers.map((answer, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.answerButton}
                  onPress={() => handleHealAttempt(answer)}
                  disabled={healingInProgress}
                >
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowHealModal(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    // paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    backgroundColor: "#333",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
  },
  healButton: {
    padding: 5
  },
  teamList: {
    flex: 1,
    padding: 15
  },
  monsterCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  monsterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15
  },
  monsterInfo: {
    flex: 1
  },
  monsterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  monsterLevel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
  },
  healthBarContainer: {
    height: 10,
    backgroundColor: '#DDD',
    borderRadius: 5,
    overflow: 'hidden'
  },
  healthBar: {
    height: '100%'
  },
  healthText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5
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
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },
  answersContainer: {
    marginBottom: 20
  },
  answerButton: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  answerText: {
    fontSize: 16,
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 10
  },
  closeButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});