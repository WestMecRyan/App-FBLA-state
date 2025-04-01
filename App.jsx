"use client"

import "react-native-get-random-values" // Add this as the first import
import { useEffect, useState, useRef } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  UIManager,
} from "react-native"
import HomeScreen from "./screens/HomeScreen"
import MapScreen from "./screens/MapScreen"
import BattleScreen from "./screens/BattleScreen"
import SettingsScreen from "./screens/SettingsScreen"
import TeamManagementScreen from "./screens/TeamManagementScreen"
import StarterSelectionScreen from "./screens/StarterSelectionScreen"
import { hasSelectedStarter } from "./utils/gameState"
import { loadFonts } from "./utils/fonts"
import { Audio } from "expo-av"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen" // Import the new screen
import { preloadAllAudio } from "./utils/audio"

// Enable layout animations for Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

const Stack = createNativeStackNavigator()

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [showStartScreen, setShowStartScreen] = useState(true) // Track if the "Press screen to start" screen is shown
  const [isAudioLoaded, setIsAudioLoaded] = useState(false)
  const [starterSelected, setStarterSelected] = useState(false)

  const [loadingStatus, setLoadingStatus] = useState("Initializing...")
  const [currentLoadingItem, setCurrentLoadingItem] = useState(0)
  const [totalLoadingItems, setTotalLoadingItems] = useState(3) // Fonts, audio, game state

  const [backgroundX] = useState(new Animated.Value(0))
  const [backgroundY] = useState(new Animated.Value(0))

  const carouselRef = useRef(null)
  const screenWidth = Dimensions.get("window").width
  const [carouselPosition, setCarouselPosition] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const [scrollViewWidth, setScrollViewWidth] = useState(0)
  const trainerImages = [
    require("./assets/trainers/fire-trainer-2.png"),
    require("./assets/trainers/grass-trainer-1.png"),
    require("./assets/trainers/water-trainer-2.png"),
    require("./assets/trainers/fire-leader.png"),
    require("./assets/trainers/grass-leader.png"),
    require("./assets/trainers/water-leader.png"),
  ]

  const [currentTipIndex, setCurrentTipIndex] = useState(0)
  const tips = [
    "Tip: Answer questions correctly to win battles and advance through schools!",
    "Tip: Fire monsters are effective against Grass, but weak to Water!",
    "Tip: Visit the healing center to restore your monsters' health!",
    "Tip: Water monsters are effective against Fire, but weak to Grass!",
    "Tip: Catch wild monsters to expand your team!",
    "Tip: You can re-challenge trainers you've already defeated to gain more experience!",
    "Tip: Grass monsters are effective against Water, but weak to Fire!",
  ]

  // Setup audio configuration
  const setupAudio = async () => {
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
      })
    } catch (error) {
      console.error("Error setting up audio:", error)
    }
  }

  useEffect(() => {
    // Don't run the timer if we're not on the loading screen
    if (!isLoading) return

    // Change the tip every 3 seconds
    const tipTimer = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length)
    }, 5000)

    // Clean up the timer when component unmounts or loading completes
    return () => clearInterval(tipTimer)
  }, [isLoading, tips.length])

  useEffect(() => {
    // Start horizontal parallax animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundX, {
          toValue: -20,
          duration: 15000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(backgroundX, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]),
    ).start()

    // Start vertical parallax animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundY, {
          toValue: -15,
          duration: 12000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(backgroundY, {
          toValue: 0,
          duration: 12000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]),
    ).start()
  }, [])

  useEffect(() => {
    // Don't exit early - this ensures animation runs even during debugging
    console.log("Starting carousel animation")

    // Create our animation sequence
    const animateCarousel = () => {
      // Reset to beginning
      scrollX.setValue(0)
      const itemWidth = 134

      // Start smooth scroll animation
      Animated.timing(scrollX, {
        toValue: -itemWidth * trainerImages.length, // Account for the full width including padding
        duration: 10000, // 10 seconds for the complete scroll
        easing: Easing.linear,
        useNativeDriver: true,
      }).start((finished) => {
        // If animation completes normally (not interrupted), restart it
        if (finished) {
          animateCarousel()
        }
      })
    }

    // Start the animation immediately
    animateCarousel()

    // Clean up on unmount
    return () => {
      console.log("Cleaning up animation")
      scrollX.stopAnimation()
    }
  }, []) // Empty dependency array - run once on mount

  useEffect(() => {
    const loadAppResources = async () => {
      try {
        console.log("Starting to load app resources...")
        setLoadingStatus("Initializing...")

        // Load fonts first
        setLoadingStatus("Loading fonts...")
        setCurrentLoadingItem(1)
        await loadFonts()
        setFontsLoaded(true)
        console.log("Fonts loaded state set to true")

        // Setup audio configuration
        setLoadingStatus("Setting up audio system...")
        setCurrentLoadingItem(2)
        await setupAudio()

        // Load audio resources
        setLoadingStatus("Preloading game audio...")
        const audioLoaded = await preloadAllAudio()
        setIsAudioLoaded(true)
        console.log("Audio loaded state set to true")

        // Check starter selection
        setLoadingStatus("Loading game state...")
        setCurrentLoadingItem(3)
        const hasStarter = await hasSelectedStarter()
        setStarterSelected(hasStarter)
        console.log("Starter selected:", hasStarter)

        setLoadingStatus("Ready to play!")
        // Simulate login check
        setTimeout(() => {
          setIsLoggedIn(false)
          setIsLoading(false)
          console.log("Loading state set to false")
        }, 1000)
      } catch (error) {
        console.error("Error loading app resources:", error)
        setLoadingStatus("Error loading resources")
        setIsLoading(false)
      }
    }

    loadAppResources()
  }, [])

  // if (!fontsLoaded || isLoading || !isAudioLoaded) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <Text style={styles.loadingText}>
  //         Loading game resources...
  //       </Text>
  //     </View>
  //   );
  // }

  if (!fontsLoaded || isLoading || !isAudioLoaded) {
    return (
      <View style={styles.loadingBackgroundContainer}>
        <Animated.Image
          source={require("./assets/home-bg-1.jpg")}
          style={[
            styles.loadingBackground,
            {
              transform: [{ translateX: backgroundX }, { translateY: backgroundY }],
            },
          ]}
          resizeMode="cover"
        />
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContainer}>
            <Image
              source={require("./assets/edumon-logo-education.png")}
              style={styles.loadingLogo}
              resizeMode="contain"
            />

            <Text style={[styles.loadingText, fontsLoaded ? { fontFamily: "pixel-font" } : { fontWeight: "bold" }]}>
              {loadingStatus}
            </Text>

            {/* Loading progress bar */}
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBarFill, { width: `${(currentLoadingItem / totalLoadingItems) * 100}%` }]} />
            </View>

            {/* Auto-scrolling Trainer Carousel */}
            <View
              style={styles.trainerCarousel}
              onLayout={(event) => {
                setScrollViewWidth(event.nativeEvent.layout.width)
              }}
            >
              <Animated.View
                style={[
                  styles.trainerCarouselContent,
                  {
                    transform: [{ translateX: scrollX }],
                    // Make a double-width container for seamless looping
                    width: trainerImages.length * 120 * 2,
                    flexDirection: "row",
                  },
                ]}
              >
                {/* First set of images */}
                {trainerImages.map((image, index) => (
                  <View style={styles.trainerImageWrapper} key={index}>
                    <Image key={`first-${index}`} source={image} style={styles.trainerImage} />
                  </View>
                ))}

                {/* Duplicate set for seamless looping */}
                {trainerImages.map((image, index) => (
                  <View style={styles.trainerImageWrapper} key={index}>
                    <Image key={`second-${index}`} source={image} style={styles.trainerImage} />
                  </View>
                ))}
              </Animated.View>
            </View>

            <Text style={[styles.tipText, fontsLoaded ? { fontFamily: "pixel-font" } : null]}>
              {tips[currentTipIndex]}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  // Show start screen when ready
  if (showStartScreen) {
    return (
      <TouchableOpacity
        style={styles.startScreenContainer}
        onPress={() => setShowStartScreen(false)} // Hide the start screen on press
      >
        <Text style={styles.startScreenText}>Press screen to start</Text>
      </TouchableOpacity>
    )
  }

  // Main app
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isLoggedIn ? "Home" : "Login"}
          // initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            orientation: "landscape",
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="StarterSelection" component={StarterSelectionScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Battle" component={BattleScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="TeamManagement" component={TeamManagementScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  loadingText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  startScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Black background
  },
  startScreenText: {
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "pixel-font",
  },

  loadingBackgroundContainer: {
    flex: 1,
    overflow: "hidden",
  },
  loadingBackground: {
    position: "absolute",
    width: Dimensions.get("window").width + 40, // Extra width for parallax movement
    height: Dimensions.get("window").height + 30, // Extra height for parallax movement
    left: -20,
    top: -15,
  },
  loadingOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    width: "80%",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  loadingLogo: {
    width: 250,
    height: 100,
    marginBottom: 20,
  },
  loadingText: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  progressBarContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#333",
    borderRadius: 5,
    marginBottom: 25,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  trainerCarousel: {
    height: 120,
    marginBottom: 20,
    width: "100%",
    overflow: "hidden",
  },
  trainerCarouselContent: {
    height: 120,
    alignItems: "center",
  },
  trainerImageWrapper: {
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    borderColor: "#FFF",
  },
  trainerImage: {
    width: 100,
    height: 100,
  },
  tipText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    opacity: 0.8,
    fontStyle: "italic",
  },
})

