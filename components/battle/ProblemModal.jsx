import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Animated
} from 'react-native';

export default function ProblemModal({
  visible,
  problem,
  onAnswer
}) {
  const [shake] = useState(new Animated.Value(0));

  const handleAnswer = (selectedAnswer) => {
    const correct = selectedAnswer === problem.correctAnswer;
    if (!correct) {
      Animated.sequence([
        Animated.timing(shake, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true
        }),
        Animated.timing(shake, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true
        }),
        Animated.timing(shake, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        })
      ]).start();
    }
    onAnswer(correct);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <Animated.View 
          style={[
            styles.modalContent,
            { transform: [{ translateX: shake }] }
          ]}
        >
          <Text style={styles.question}>{problem.question}</Text>
          <View style={styles.answersContainer}>
            {problem.answers.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={styles.answerButton}
                onPress={() => handleAnswer(answer)}
              >
                <Text style={styles.answerText}>{answer}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    maxWidth: 400
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  answersContainer: {
    width: '100%'
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
  }
});