import { useState, useEffect } from "react"
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native"

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function ProblemModal({ visible, problem, onAnswer }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([])

  // Fix the problem modal to use the answers array from problems.js
  useEffect(() => {
    if (problem) {
      // Create an array of answer objects with correct/incorrect flags
      // This handles the format in problems.js which has an answers array
      const answerObjects = problem.answers
        ? problem.answers.map((answer) => ({
            text: answer,
            isCorrect: answer === problem.correctAnswer,
          }))
        : // Fallback to old format if needed
          [
            { text: problem.correctAnswer, isCorrect: true },
            ...(problem.wrongAnswers || []).map((answer) => ({ text: answer, isCorrect: false })),
          ]

      console.log("Problem:", problem)
      console.log("Answer objects before shuffle:", answerObjects)

      // Shuffle the answers
      const shuffled = shuffleArray(answerObjects)
      console.log("Shuffled answers:", shuffled)
      setShuffledAnswers(shuffled)
    }
  }, [problem])

  if (!problem) return null

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.questionTitle}>Answer this question:</Text>
          <Text style={styles.questionText}>{problem.question}</Text>

          <View style={styles.answersContainer}>
            {shuffledAnswers && shuffledAnswers.length > 0 ? (
              shuffledAnswers.map((answer, index) => (
                <TouchableOpacity key={index} style={styles.answerButton} onPress={() => onAnswer(answer.isCorrect)}>
                  <Text style={styles.answerText}>{answer.text}</Text>
                </TouchableOpacity>
              ))
            ) : (
              // Fallback if shuffling fails
              <>
                <TouchableOpacity style={styles.answerButton} onPress={() => onAnswer(true)}>
                  <Text style={styles.answerText}>{problem.correctAnswer}</Text>
                </TouchableOpacity>
                {problem.wrongAnswers &&
                  problem.wrongAnswers.map((answer, index) => (
                    <TouchableOpacity key={index} style={styles.answerButton} onPress={() => onAnswer(false)}>
                      <Text style={styles.answerText}>{answer}</Text>
                    </TouchableOpacity>
                  ))}
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
    overflow: "scroll",
  },
  questionTitle: {
    fontSize: 16,
    // fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "pixel-font",
  },
  questionText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "pixel-font",
  },
  answersContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  answerButton: {
    backgroundColor: "#4CAF50",
    // backgroundColor: '#F5F5F5',
    padding: 15,
    paddingVertical: 25,
    borderRadius: 10,
    marginBottom: 10,
    width: "48%",
    margin: "auto",
  },
  answerText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "pixel-font",
  },
})

