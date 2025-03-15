// import { useEffect, useState } from "react"
// import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { hasSelectedStarter } from "../utils/gameState"

// export default function HomeScreen() {
//   const navigation = useNavigation()
//   const [starterSelected, setStarterSelected] = useState(false)

//   useEffect(() => {
//     const checkStarterSelection = async () => {
//       const hasStarter = await hasSelectedStarter()
//       setStarterSelected(hasStarter)
//     }

//     checkStarterSelection()
//   }, [])

//   const handlePlay = () => {
//     if (starterSelected) {
//       navigation.navigate("Map")
//     } else {
//       navigation.navigate("StarterSelection")
//     }
//   }

//   return (
//     <ImageBackground source={require("../assets/home-background.png")} style={styles.background} resizeMode="cover">
//       <View style={styles.container}>
//         <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
//             <Text style={styles.playButtonText}>Play</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate("Settings")}>
//             <Text style={styles.settingsButtonText}>Settings</Text>
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.versionText}>Version 1.0.0</Text>
//       </View>
//     </ImageBackground>
//   )
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   logo: {
//     width: "80%",
//     height: 150,
//     marginBottom: 50,
//   },
//   buttonContainer: {
//     width: "100%",
//     alignItems: "center",
//   },
//   playButton: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 15,
//     paddingHorizontal: 60,
//     borderRadius: 30,
//     marginBottom: 20,
//     elevation: 5,
//   },
//   playButtonText: {
//     color: "#FFF",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   settingsButton: {
//     backgroundColor: "#607D8B",
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     elevation: 3,
//   },
//   settingsButtonText: {
//     color: "#FFF",
//     fontSize: 18,
//   },
//   versionText: {
//     position: "absolute",
//     bottom: 20,
//     color: "#FFF",
//     fontSize: 12,
//   },
// })





import { useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Modal, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { hasSelectedStarter } from "../utils/gameState"

export default function HomeScreen() {
  const navigation = useNavigation()
  const [starterSelected, setStarterSelected] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)

  useEffect(() => {
    const checkStarterSelection = async () => {
      const hasStarter = await hasSelectedStarter()
      setStarterSelected(hasStarter)
    }

    checkStarterSelection()
  }, [])

  const handlePlay = () => {
    if (starterSelected) {
      navigation.navigate("Map")
    } else {
      navigation.navigate("StarterSelection")
    }
  }

  const handleShare = (platform) => {
    // In a real app, you would implement platform-specific sharing
    console.log(`Sharing to ${platform}`)
    // Close the modal after sharing
    setShowShareModal(false)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require("../assets/home-background.png")} style={styles.background} resizeMode="cover">
        <View style={styles.container}>
          <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
              <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate("Settings")}>
              <Text style={styles.settingsButtonText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.shareButton} onPress={() => setShowShareModal(true)}>
              <Ionicons name="share-social" size={20} color="#FFF" />
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ImageBackground>

      {/* Share Modal */}
      <Modal
        visible={showShareModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowShareModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.shareModalContent}>
            <Text style={styles.shareModalTitle}>Share Edumon</Text>

            <View style={styles.shareButtons}>
              <TouchableOpacity
                style={[styles.shareButton, styles.instagramButton]}
                onPress={() => handleShare("instagram")}
              >
                <Ionicons name="logo-instagram" size={24} color="#FFF" />
                <Text style={styles.shareButtonText}>Instagram</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.shareButton, styles.twitterButton]}
                onPress={() => handleShare("twitter")}
              >
                <Ionicons name="logo-twitter" size={24} color="#FFF" />
                <Text style={styles.shareButtonText}>X</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.shareButton, styles.facebookButton]}
                onPress={() => handleShare("facebook")}
              >
                <Ionicons name="logo-facebook" size={24} color="#FFF" />
                <Text style={styles.shareButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.cancelShareButton} onPress={() => setShowShareModal(false)}>
              <Text style={styles.cancelShareText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: "80%",
    height: 150,
    marginBottom: 50,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  playButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 20,
    elevation: 5,
  },
  playButtonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  settingsButton: {
    backgroundColor: "#607D8B",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
    marginBottom: 15,
  },
  settingsButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
  shareButton: {
    backgroundColor: "#3F51B5",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  shareButtonText: {
    color: "#FFF",
    fontSize: 18,
    marginLeft: 8,
  },
  versionText: {
    position: "absolute",
    bottom: 20,
    color: "#FFF",
    fontSize: 12,
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
    fontWeight: "bold",
    marginBottom: 20,
  },
  shareButtons: {
    width: "100%",
  },
  instagramButton: {
    backgroundColor: "#C13584", // Instagram color
    marginBottom: 10,
    width: "100%",
  },
  twitterButton: {
    backgroundColor: "#1DA1F2", // Twitter/X color
    marginBottom: 10,
    width: "100%",
  },
  facebookButton: {
    backgroundColor: "#4267B2", // Facebook color
    marginBottom: 10,
    width: "100%",
  },
  cancelShareButton: {
    marginTop: 10,
    padding: 12,
    width: "100%",
  },
  cancelShareText: {
    color: "#666",
    textAlign: "center",
    fontWeight: "bold",
  },
})

