import { useState, useEffect } from "react"
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function ProblemModal({ visible, problem, onAnswer, onContinue }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedExplanation, setSelectedExplanation] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (problem) {
      const answerObjects = problem.answers
        ? problem.answers.map((ans) => ({
            text: ans.answer,
            explanation: ans.explanation,
            isCorrect: ans.answer === problem.correctAnswer,
          }))
        : [
            { text: problem.correctAnswer, explanation: "Correct answer", isCorrect: true },
            ...(problem.wrongAnswers || []).map((ans) => ({
              text: ans.answer,
              explanation: "Incorrect answer",
              isCorrect: false,
            })),
          ];

      const shuffled = shuffleArray(answerObjects);
      setShuffledAnswers(shuffled);
      setSelectedExplanation(null); // Reset explanation when a new problem is loaded
    }
  }, [problem]);

  const handleAnswer = (answer) => {
    setIsCorrect(answer.isCorrect);
    setSelectedExplanation(answer.explanation);
    onAnswer(answer.isCorrect); // Notify parent component
  };

  if (!problem) return null

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {selectedExplanation ? (
            // Show explanation and "Continue" button after an answer is selected
            <>
              <Text
                style={[
                  styles.explanationText,
                  { color: isCorrect ? "green" : "red" },
                ]}
              >
                {selectedExplanation}
              </Text>
              <TouchableOpacity
                style={[
                  styles.continueButton,
                  { backgroundColor: isCorrect ? "#4CAF50" : "#F44336" },
                ]}
                onPress={onContinue}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
                <Ionicons name="arrow-forward" size={24} color="#FFF" />

              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.questionTitle}>Answer this question:</Text>
              <Text style={styles.questionText}>{problem.question}</Text>

              <View style={styles.answersContainer}>
                {shuffledAnswers.map((answer, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.answerButton}
                    onPress={() => handleAnswer(answer)}
                  >
                    <Text style={styles.answerText}>{answer.text}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2000,
  },
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
    justifyContent: "space-between",
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
  explanationText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "pixel-font",
  },
  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  continueButtonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "pixel-font",
    marginRight: 8,
  },
})

