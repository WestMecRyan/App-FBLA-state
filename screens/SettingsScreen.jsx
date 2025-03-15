// import { useState, useEffect } from "react"
// import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, ScrollView } from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { loadGameState, saveGameState, resetGameState } from "../utils/gameState"
// import { Ionicons } from "@expo/vector-icons"

// export default function SettingsScreen() {
//   const navigation = useNavigation()
//   const [settings, setSettings] = useState({
//     soundEnabled: true,
//     musicEnabled: true,
//     difficulty: "normal",
//   })

//   useEffect(() => {
//     loadSettings()
//   }, [])

//   const loadSettings = async () => {
//     try {
//       const gameState = await loadGameState()
//       if (gameState.settings) {
//         setSettings(gameState.settings)
//       }
//     } catch (error) {
//       console.error("Error loading settings:", error)
//     }
//   }

//   const updateSetting = async (key, value) => {
//     try {
//       const newSettings = { ...settings, [key]: value }
//       setSettings(newSettings)

//       const gameState = await loadGameState()
//       await saveGameState({
//         ...gameState,
//         settings: newSettings,
//       })
//     } catch (error) {
//       console.error("Error updating setting:", error)
//     }
//   }

//   const handleDifficultyChange = (difficulty) => {
//     updateSetting("difficulty", difficulty)
//   }

//   const handleResetProgress = () => {
//     Alert.alert(
//       "Reset Progress",
//       "Are you sure you want to reset all game progress? This will delete your team and all progress.",
//       [
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//         {
//           text: "Reset",
//           style: "destructive",
//           onPress: async () => {
//             try {
//               await resetGameState()
//               Alert.alert("Success", "Game progress has been reset. The game will now return to the home screen.")
//               navigation.navigate("Home")
//             } catch (error) {
//               console.error("Error resetting game state:", error)
//               Alert.alert("Error", "Failed to reset game progress.")
//             }
//           },
//         },
//       ],
//     )
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#FFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Settings</Text>
//       </View>

//       <ScrollView style={styles.settingsContainer}>
//         <View style={styles.settingSection}>
//           <Text style={styles.sectionTitle}>Audio</Text>

//           <View style={styles.settingRow}>
//             <Text style={styles.settingLabel}>Sound Effects</Text>
//             <Switch
//               value={settings.soundEnabled}
//               onValueChange={(value) => updateSetting("soundEnabled", value)}
//               trackColor={{ false: "#767577", true: "#81b0ff" }}
//               thumbColor={settings.soundEnabled ? "#4CAF50" : "#f4f3f4"}
//             />
//           </View>

//           <View style={styles.settingRow}>
//             <Text style={styles.settingLabel}>Background Music</Text>
//             <Switch
//               value={settings.musicEnabled}
//               onValueChange={(value) => updateSetting("musicEnabled", value)}
//               trackColor={{ false: "#767577", true: "#81b0ff" }}
//               thumbColor={settings.musicEnabled ? "#4CAF50" : "#f4f3f4"}
//             />
//           </View>
//         </View>

//         <View style={styles.settingSection}>
//           <Text style={styles.sectionTitle}>Gameplay</Text>

//           <Text style={styles.settingLabel}>Difficulty</Text>
//           <View style={styles.difficultyButtons}>
//             <TouchableOpacity
//               style={[styles.difficultyButton, settings.difficulty === "easy" && styles.selectedDifficulty]}
//               onPress={() => handleDifficultyChange("easy")}
//             >
//               <Text style={styles.difficultyText}>Easy</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.difficultyButton, settings.difficulty === "normal" && styles.selectedDifficulty]}
//               onPress={() => handleDifficultyChange("normal")}
//             >
//               <Text style={styles.difficultyText}>Normal</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.difficultyButton, settings.difficulty === "hard" && styles.selectedDifficulty]}
//               onPress={() => handleDifficultyChange("hard")}
//             >
//               <Text style={styles.difficultyText}>Hard</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.settingSection}>
//           <Text style={styles.sectionTitle}>Game Data</Text>

//           <TouchableOpacity style={styles.resetButton} onPress={handleResetProgress}>
//             <Text style={styles.resetButtonText}>Reset Game Progress</Text>
//           </TouchableOpacity>
//           <Text style={styles.resetWarning}>Warning: This will delete all your monsters and progress!</Text>
//         </View>

//         <View style={styles.versionInfo}>
//           <Text style={styles.versionText}>Edumon v1.0.0</Text>
//         </View>
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//   },
//   header: {
//     backgroundColor: "#4CAF50",
//     paddingTop: 50,
//     paddingBottom: 15,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     color: "#FFF",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   settingsContainer: {
//     flex: 1,
//     padding: 20,
//   },
//   settingSection: {
//     backgroundColor: "#FFF",
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 15,
//     color: "#333",
//   },
//   settingRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#EEE",
//   },
//   settingLabel: {
//     fontSize: 16,
//     color: "#333",
//   },
//   difficultyButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   difficultyButton: {
//     flex: 1,
//     padding: 10,
//     alignItems: "center",
//     backgroundColor: "#EEE",
//     marginHorizontal: 5,
//     borderRadius: 5,
//   },
//   selectedDifficulty: {
//     backgroundColor: "#4CAF50",
//   },
//   difficultyText: {
//     fontWeight: "bold",
//     color: "#333",
//   },
//   resetButton: {
//     backgroundColor: "#F44336",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   resetButtonText: {
//     color: "#FFF",
//     fontWeight: "bold",
//   },
//   resetWarning: {
//     color: "#F44336",
//     fontSize: 12,
//     marginTop: 10,
//     textAlign: "center",
//   },
//   versionInfo: {
//     alignItems: "center",
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   versionText: {
//     color: "#999",
//     fontSize: 14,
//   },
// })







import { useState, useEffect } from "react"
import { View, Text, StyleSheet, Switch, TouchableOpacity, Modal, ScrollView, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { loadGameState, saveGameState, resetGameState } from "../utils/gameState"
import { Ionicons } from "@expo/vector-icons"

export default function SettingsScreen() {
  const navigation = useNavigation()
  const [settings, setSettings] = useState({
    soundEnabled: true,
    musicEnabled: true,
    difficulty: "normal",
  })
  const [showResetModal, setShowResetModal] = useState(false)

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const gameState = await loadGameState()
      if (gameState.settings) {
        setSettings(gameState.settings)
      }
    } catch (error) {
      console.error("Error loading settings:", error)
    }
  }

  const updateSetting = async (key, value) => {
    try {
      const newSettings = { ...settings, [key]: value }
      setSettings(newSettings)

      const gameState = await loadGameState()
      await saveGameState({
        ...gameState,
        settings: newSettings,
      })
    } catch (error) {
      console.error("Error updating setting:", error)
    }
  }

  const handleDifficultyChange = (difficulty) => {
    updateSetting("difficulty", difficulty)
  }

  const handleResetProgress = async () => {
    try {
      await resetGameState()
      setShowResetModal(false)
      navigation.navigate("Home")
    } catch (error) {
      console.error("Error resetting game state:", error)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <ScrollView style={styles.settingsContainer}>
          <View style={styles.settingSection}>
            <Text style={styles.sectionTitle}>Audio</Text>

            <View style={styles.settingRow}>
              <Text style={styles.settingLabel}>Sound Effects</Text>
              <Switch
                value={settings.soundEnabled}
                onValueChange={(value) => updateSetting("soundEnabled", value)}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={settings.soundEnabled ? "#4CAF50" : "#f4f3f4"}
              />
            </View>

            <View style={styles.settingRow}>
              <Text style={styles.settingLabel}>Background Music</Text>
              <Switch
                value={settings.musicEnabled}
                onValueChange={(value) => updateSetting("musicEnabled", value)}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={settings.musicEnabled ? "#4CAF50" : "#f4f3f4"}
              />
            </View>
          </View>

          <View style={styles.settingSection}>
            <Text style={styles.sectionTitle}>Gameplay</Text>

            <Text style={styles.settingLabel}>Difficulty</Text>
            <View style={styles.difficultyButtons}>
              <TouchableOpacity
                style={[styles.difficultyButton, settings.difficulty === "easy" && styles.selectedDifficulty]}
                onPress={() => handleDifficultyChange("easy")}
              >
                <Text style={styles.difficultyText}>Easy</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.difficultyButton, settings.difficulty === "normal" && styles.selectedDifficulty]}
                onPress={() => handleDifficultyChange("normal")}
              >
                <Text style={styles.difficultyText}>Normal</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.difficultyButton, settings.difficulty === "hard" && styles.selectedDifficulty]}
                onPress={() => handleDifficultyChange("hard")}
              >
                <Text style={styles.difficultyText}>Hard</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.settingSection}>
            <Text style={styles.sectionTitle}>Game Data</Text>

            <TouchableOpacity style={styles.resetButton} onPress={() => setShowResetModal(true)}>
              <Text style={styles.resetButtonText}>Reset Game Progress</Text>
            </TouchableOpacity>
            <Text style={styles.resetWarning}>Warning: This will delete all your monsters and progress!</Text>
          </View>

          <View style={styles.versionInfo}>
            <Text style={styles.versionText}>Edumon v1.0.0</Text>
          </View>
        </ScrollView>

        {/* Reset Confirmation Modal */}
        <Modal
          visible={showResetModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowResetModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Reset Progress</Text>
              <Text style={styles.modalText}>
                Are you sure you want to reset all game progress? This will delete your team and all progress.
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setShowResetModal(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, styles.confirmButton]} onPress={handleResetProgress}>
                  <Text style={styles.confirmButtonText}>Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4CAF50",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#4CAF50",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  settingsContainer: {
    flex: 1,
    padding: 20,
  },
  settingSection: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  settingLabel: {
    fontSize: 16,
    color: "#333",
  },
  difficultyButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  difficultyButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#EEE",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  selectedDifficulty: {
    backgroundColor: "#4CAF50",
  },
  difficultyText: {
    fontWeight: "bold",
    color: "#333",
  },
  resetButton: {
    backgroundColor: "#F44336",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  resetButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  resetWarning: {
    color: "#F44336",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
  versionInfo: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  versionText: {
    color: "#999",
    fontSize: 14,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "48%",
  },
  cancelButton: {
    backgroundColor: "#9E9E9E",
  },
  confirmButton: {
    backgroundColor: "#F44336",
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})

