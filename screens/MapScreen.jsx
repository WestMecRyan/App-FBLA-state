import React, { useState, useEffect, useCallback } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, SafeAreaView, Linking, BackHandler } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons"
import { SCHOOLS } from "../data/schools"
import { loadGameState } from "../utils/gameState"
import { playSound, playBgMusic, stopBgMusic } from "../utils/audio"

export default function MapScreen() {
  const navigation = useNavigation()
  const [selectedSchool, setSelectedSchool] = useState(null)
  const [defeatedTrainers, setDefeatedTrainers] = useState([])
  const [completedEncounters, setCompletedEncounters] = useState([])
  const [showTrainers, setShowTrainers] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [progression, setProgression] = useState({
    questionsAnswered: { math: 0, science: 0, english: 0 },
    learningDays: [],
  });
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const totalTrainers = SCHOOLS.reduce((sum, school) => sum + school.trainers.length, 0); // Total number of trainers
  const defeatedPercentage = Math.round((defeatedTrainers.length / totalTrainers) * 100); // Calculate percentage

  const handleBackPress = () => {
    return false
  }

  useFocusEffect(
    useCallback(() => {
      // When map screen comes into focus, stop any existing music and play map music
      const setupMapAudio = async () => {
        await stopBgMusic(); // Ensure all music is stopped first
        await playBgMusic("map", 0.1); // Play map music
      };

      setupMapAudio();

      // Cleanup function when screen loses focus
      return () => {
        // Let the next screen handle its own music
        // We'll stop this music in the cleanup
        // stopBgMusic();
      };
    }, [])
  );

  useEffect(() => {
    // playBgMusic("map", 0.1);

    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackPress)

    return () => {
      backHandler.remove()
      // stopBgMusic()
    }
  }, [])

  // Add a focus listener to reload progress when returning to this screen
  useEffect(() => {
    const fetchProgression = async () => {
      const gameState = await loadGameState();
      setProgression(gameState.progression);
      setDefeatedTrainers(gameState.defeatedTrainers || []);
      setCompletedEncounters(gameState.completedEncounters || []);
      console.log("Loaded progression:", gameState.progression);
    };

    fetchProgression();

    loadProgress()

    // Add a listener to reload progress when the screen comes into focus
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("MapScreen focused, reloading progress")
      loadProgress();
      fetchProgression();
    })

    return unsubscribe
  }, [navigation])

  const toggleTooltip = () => {
    playSound("click", 0.3);
    setTooltipVisible(!tooltipVisible);
  };

  const loadProgress = async () => {
    try {
      const gameState = await loadGameState()
      console.log("Loaded defeated trainers:", gameState.defeatedTrainers)
      console.log("Loaded completed encounters:", gameState.completedEncounters || [])

      // Ensure defeatedTrainers is always an array
      setDefeatedTrainers(gameState.defeatedTrainers || [])

      // Load completed encounters
      setCompletedEncounters(gameState.completedEncounters || [])
    } catch (error) {
      console.error("Error loading progress:", error)
      // Default to empty arrays on error
      setDefeatedTrainers([])
      setCompletedEncounters([])
    }
  }

  const isSchoolLocked = (schoolId) => {
    if (schoolId === 1) return false // First school is always unlocked

    // Check if all trainers from previous school are defeated
    const previousSchool = SCHOOLS.find((s) => s.id === schoolId - 1)
    if (!previousSchool) return true

    const previousSchoolTrainers = previousSchool.trainers.map((t) => t.id)
    const allDefeated = previousSchoolTrainers.every((id) => defeatedTrainers.includes(id))

    // console.log(`School ${schoolId} locked status:`, !allDefeated)
    return !allDefeated
  }

  const handleTrainerSelect = async (trainer) => {
    try {
      if (!isTrainerLocked(trainer)) {
        try {
          await playSound("click", 0.3);
        } catch (error) {
          console.log("Error playing sound:", error);
        }

        setShowTrainers(false); // Close the modal before navigation

        // Add a small delay to ensure modal is closed before navigation
        setTimeout(() => {
          try {
            // Check if this trainer has a random encounter before it
            if (trainer &&
              trainer.hasRandomEncounterBefore === true &&
              !completedEncounters.includes(trainer.id)) {
              // Navigate to a random encounter first
              navigation.navigate("Battle", {
                trainerId: trainer.id,
                schoolId: trainer.schoolId,
                isRandomEncounter: true,
                isPreTrainerEncounter: true,
              });
            } else {
              // Navigate directly to the trainer battle
              navigation.navigate("Battle", {
                trainerId: trainer.id,
                schoolId: trainer.schoolId,
                isRandomEncounter: false,
              });
            }
          } catch (navError) {
            console.error("Navigation error:", navError);
          }
        }, 100);
      }
    } catch (error) {
      console.error("Error in handleTrainerSelect:", error);
    }
  };

  const isTrainerLocked = (trainer) => {
    try {
      if (!trainer || typeof trainer !== 'object') return true;

      // First trainer in each school is always unlocked
      const school = SCHOOLS.find((s) => s.id === trainer.schoolId);
      if (!school || !Array.isArray(school.trainers) || school.trainers.length === 0) return true;

      if (trainer.id === school.trainers[0]?.id) {
        return false;
      }

      const trainerIndex = school.trainers.findIndex((t) => t.id === trainer.id);
      if (trainerIndex <= 0) return false; // First trainer or not found

      const previousTrainer = school.trainers[trainerIndex - 1];
      if (!previousTrainer) return true;

      return !defeatedTrainers.includes(previousTrainer.id);
    } catch (error) {
      console.error("Error in isTrainerLocked:", error);
      return true; // Default to locked if there's an error
    }
  };

  const handleShare = (platform) => {
    // Define the text you want to share
    const shareText = "Check out Edumon! It's an educational game that makes learning fun and engaging!"
    const encodedText = encodeURIComponent(shareText)

    // Define URLs for different platforms
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=https://edumon.app&quote=${encodedText}`,
      // Note: Instagram doesn't support direct sharing via URL schemes like this
      instagram: "https://instagram.com/", // This will just open Instagram
    }

    // Try to open the appropriate URL
    try {
      Linking.openURL(urls[platform])
    } catch (error) {
      console.error(`Error opening ${platform} share URL:`, error)
      Alert.alert(
        "Sharing Failed",
        `Could not open ${platform}. Make sure you have the app installed or try another method.`
      )
    }

    // Close the modal after sharing
    setShowShareModal(false)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Navigation Bar */}
        <View style={styles.navbar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {SCHOOLS.map((school) => (
              <TouchableOpacity
                key={school.id}
                style={[
                  styles.schoolTab,
                  selectedSchool?.id === school.id && styles.selectedSchoolTab,
                  isSchoolLocked(school.id) && styles.lockedSchoolTab,
                ]}
                onPress={() => {
                  if (!isSchoolLocked(school.id)) {
                    playSound("click", 0.3);
                    setSelectedSchool(school)
                    setShowTrainers(true)
                  }
                }}
                disabled={isSchoolLocked(school.id)}
              >
                <Text style={styles.schoolTabText}>{school.name}</Text>
                {isSchoolLocked(school.id) && <Ionicons name="lock-closed" size={16} color="#666" />}
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Navigation Icons */}
          <View style={styles.navIcons}>
            <TouchableOpacity style={styles.iconButton} onPress={() => {
              playSound("click", 0.3);
              navigation.navigate("TeamManagement")
            }}>
              <Ionicons name="medical" size={24} color="#4CAF50" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => {
              playSound("click", 0.3);
              setShowShareModal(true);
            }}>
              <Ionicons name="share-social" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => {
              playSound("click", 0.3);
              navigation.navigate("Settings")
            }}>
              <Ionicons name="settings" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>


        {/* Progression Bar */}
        <View style={styles.progressionBar}>
          <View style={styles.textProgressionContainer}>
            <Text style={styles.progressionText}>
              Math: {progression.questionsAnswered.math} | Science:{" "}
              {progression.questionsAnswered.science} | English:{" "}
              {progression.questionsAnswered.english}
            </Text>
            <Text style={styles.progressionText}>
              Days Spent Learning: {progression.learningDays.length}
            </Text>
          </View>

          {/* Health-style Progression Bar */}
          <View style={styles.progressionBarContainer}>
            <View style={[styles.progressionBarFill, { width: `${defeatedPercentage}%` }]} />
          </View>
          <Text style={styles.progressionPercentage}>{defeatedPercentage}% Complete</Text>
        </View>


        {/* Map Background */}
        <View style={styles.mapBackground}>
          <Image source={require("../assets/edumon-map.png")} style={styles.mapImage} resizeMode="cover" />

          {/* School areas on the map - now in a row */}
          <View style={styles.schoolsRow}>
            {SCHOOLS.map((school) => (
              <TouchableOpacity
                key={school.id}
                style={[styles.schoolArea, isSchoolLocked(school.id) && styles.lockedSchoolArea]}
                onPress={() => {
                  if (!isSchoolLocked(school.id)) {
                    playSound("click", 0.3);
                    setSelectedSchool(school)
                    setShowTrainers(true)
                  }
                }}
                disabled={isSchoolLocked(school.id)}
              >
                <Text style={styles.schoolAreaText}>{school.name}</Text>
                {isSchoolLocked(school.id) && <Ionicons name="lock-closed" size={24} color="#FFF" />}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Trainers Modal */}
        {showTrainers && (
          <View style={styles.absoluteOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    try {
                      playSound("click", 0.3);
                    } catch (error) {
                      console.log("Error playing sound:", error);
                    }
                    setShowTrainers(false);
                  }}
                >
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>

                <Text style={styles.modalTitle}>
                  {selectedSchool ? selectedSchool.name : ''} Trainers
                </Text>

                <ScrollView style={{ maxHeight: 400 }}>
                  <View style={styles.trainersGrid}>
                    {selectedSchool && Array.isArray(selectedSchool.trainers) ?
                      selectedSchool.trainers.map((trainer) => (
                        <TouchableOpacity
                          key={trainer.id}
                          style={[
                            styles.trainerCard,
                            isTrainerLocked(trainer) && styles.lockedTrainer,
                            defeatedTrainers.includes(trainer.id) && styles.defeatedTrainer,
                            trainer.hasRandomEncounterBefore === true &&
                            !completedEncounters.includes(trainer.id) &&
                            styles.trainerWithEncounter,
                          ]}
                          onPress={() => handleTrainerSelect(trainer)}
                          disabled={isTrainerLocked(trainer)}
                        >
                          <View style={styles.trainerCardContent}>
                            <Image
                              source={trainer.image ? trainer.image : require('../assets/trainers/default-trainer.png')}
                              style={styles.trainerImage}
                              resizeMode="contain"
                            />

                            <View style={styles.trainerInfo}>
                              <Text style={styles.trainerName}>{trainer.name || 'Unknown'}</Text>
                              <Text style={styles.trainerType}>
                                {trainer.isLeader ? "School Leader" : "Trainer"}
                              </Text>
                              {trainer.hasRandomEncounterBefore === true &&
                                !completedEncounters.includes(trainer.id) && (
                                  <Text style={styles.encounterWarning}>
                                    ⚠️ Wild monster area
                                  </Text>
                                )}
                            </View>

                            {isTrainerLocked(trainer) && (
                              <Ionicons name="lock-closed" size={24} color="#666" style={styles.trainerIcon} />
                            )}
                            {defeatedTrainers.includes(trainer.id) && (
                              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" style={styles.trainerIcon} />
                            )}
                          </View>
                        </TouchableOpacity>
                      )) : null}
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <View style={styles.absoluteOverlay}>
            <View style={styles.modalOverlay}>
              <View style={styles.shareModalContent}>
                <Text style={styles.shareModalTitle}>Share Your Progress</Text>

                <View style={styles.shareButtons}>
                  {/* <TouchableOpacity
                  style={[styles.shareButton, styles.instagramButton]}
                  onPress={() => handleShare("instagram")}
                >
                  <Ionicons name="logo-instagram" size={24} color="#FFF" />
                  <Text style={styles.shareButtonText}>Instagram</Text>
                </TouchableOpacity> */}

                  <TouchableOpacity
                    style={styles.shareButton}
                    onPress={() => handleShare("instagram")}
                  >
                    <LinearGradient
                      colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']}
                      start={{ x: 0.0, y: 0.0 }}
                      end={{ x: 1.0, y: 1.0 }}
                      style={styles.instagramGradient}
                    >
                      <Ionicons name="logo-instagram" size={24} color="#FFF" />
                      <Text style={styles.shareButtonText}>Share on Instagram</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.shareButton, styles.twitterButton]}
                    onPress={() => handleShare("twitter")}
                  >
                    <Ionicons name="logo-twitter" size={24} color="#FFF" />
                    <Text style={styles.shareButtonText}>Share on X</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.shareButton, styles.facebookButton]}
                    onPress={() => handleShare("facebook")}
                  >
                    <Ionicons name="logo-facebook" size={24} color="#FFF" />
                    <Text style={styles.shareButtonText}>Share on Facebook</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.cancelShareButton} onPress={() => {
                  playSound("click", 0.3);
                  setShowShareModal(false)
                }}>
                  <Text style={styles.cancelShareText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* Tooltip Button */}
        <TouchableOpacity style={styles.tooltipButton} onPress={toggleTooltip}>
          <Text style={styles.tooltipButtonText}>?</Text>
        </TouchableOpacity>

        {/* Tooltip Modal */}
        {tooltipVisible && (
          <View style={styles.absoluteOverlay}>
            <View style={styles.tooltipOverlay}>
              <View style={styles.tooltipContainer}>
                <Text style={styles.tooltipTitle}>Help</Text>
                <Text style={styles.tooltipText}>
                  - You can re-fight old trainers to level up your monsters. Simply revisit their location on the map and challenge them again.
                </Text>
                <Text style={styles.tooltipText}>
                  - Heal your monsters at the healing center. Click the green cross button in the top right in the navigation bar!
                </Text>
                <Text style={styles.tooltipText}>
                  - Type advantages: Fire beats Grass, Grass beats Water, Water beats Fire. Use this to your advantage in battles!
                </Text>
                <TouchableOpacity style={styles.closeToolButton} onPress={toggleTooltip}>
                  <Text style={styles.closeToolButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}


      </View >
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#333",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#333",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  schoolTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#4CAF50",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  selectedSchoolTab: {
    backgroundColor: "#2E7D32",
  },
  lockedSchoolTab: {
    backgroundColor: "#666",
  },
  schoolTabText: {
    color: "#FFF",
    marginRight: 5,
    fontFamily: "pixel-font",
  },
  navIcons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
  },
  mapBackground: {
    flex: 1,
    position: "relative",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  // New row layout for schools
  schoolsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
  },
  schoolArea: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(76, 175, 80, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFF",
    margin: 5,
  },
  lockedSchoolArea: {
    backgroundColor: "rgba(100, 100, 100, 0.7)",
  },
  schoolAreaText: {
    color: "#FFF",
    // fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 13,
    fontFamily: "pixel-font",
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
  },
  closeButton: {
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 1,
  },
  modalTitle: {
    fontSize: 24,
    // fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "pixel-font",
  },
  // New grid layout for trainers
  trainersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  trainerCard: {
    width: "30%",
    // height: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    // marginBottom: 15,
    alignItems: "center",
  },
  trainerCardContent: {
    // marginVertical: "auto",
    width: "100%",
    alignItems: "center",
  },
  trainerWithEncounter: {
    borderLeftWidth: 5,
    borderLeftColor: "#FF9800",
  },
  lockedTrainer: {
    opacity: 0.5,
  },
  defeatedTrainer: {
    borderColor: "#4CAF50",
    borderWidth: 2,
  },
  trainerImage: {
    width: 70,
    height: 70,
    // borderRadius: 30,
    margin: "auto",
    marginBottom: 10,
  },
  trainerInfo: {
    alignItems: "center",
  },
  trainerName: {
    fontSize: 14,
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "pixel-font",
  },
  trainerType: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
    fontFamily: "pixel-font",
  },
  encounterWarning: {
    fontSize: 10,
    color: "#FF9800",
    marginTop: 4,
    textAlign: "center",
    fontFamily: "pixel-font",
  },
  trainerIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  absoluteOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2000,
  },
  // Share modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  shareModalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  shareModalTitle: {
    fontSize: 20,
    // fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "pixel-font",
  },
  shareButtons: {
    width: "100%",
  },
  shareButton: {
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden', // Important for the gradient to be contained
  },
  instagramGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: '100%',
  },
  twitterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#272727",
    borderRadius: 8,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#4267B2",
    borderRadius: 8,
  },
  shareButtonText: {
    color: "white",
    // fontWeight: "bold",
    marginLeft: 10,
    fontFamily: "pixel-font",
  },
  cancelShareButton: {
    marginTop: 10,
    padding: 12,
    width: "100%",
  },
  cancelShareText: {
    color: "#666",
    textAlign: "center",
    // fontWeight: "bold",
    fontFamily: "pixel-font",
  },
  progressionBar: {
    backgroundColor: "#333",
    padding: 10,
    alignItems: "center",
  },
  progressionText: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "pixel-font",
  },
  progressionBarContainer: {
    width: "90%",
    height: 20,
    backgroundColor: "#555",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
  },
  progressionBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  progressionPercentage: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 5,
    fontFamily: "pixel-font",
  },
  textProgressionContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tooltipButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#555",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  tooltipButtonText: {
    color: "#FFF",
    fontSize: 20,
    // fontWeight: "bold",
    fontFamily: "pixel-font",
  },
  tooltipOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  tooltipContainer: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    elevation: 5,
  },
  tooltipTitle: {
    fontSize: 16,
    // fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "pixel-font",
  },
  tooltipText: {
    fontSize: 12,
    marginBottom: 10,
    color: "#333",
    fontFamily: "pixel-font",
  },
  closeToolButton: {
    marginTop: 10,
    backgroundColor: "#555",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeToolButtonText: {
    color: "#FFF",
    fontSize: 13,
    fontFamily: "pixel-font",
  },
})

