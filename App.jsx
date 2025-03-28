import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Platform, UIManager } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import BattleScreen from "./screens/BattleScreen";
import SettingsScreen from "./screens/SettingsScreen";
import TeamManagementScreen from "./screens/TeamManagementScreen";
import StarterSelectionScreen from "./screens/StarterSelectionScreen";
import { hasSelectedStarter } from "./utils/gameState";
import { loadFonts } from "./utils/fonts";
import { Audio } from "expo-av";

// Enable layout animations for Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showStartScreen, setShowStartScreen] = useState(true); // Track if the "Press screen to start" screen is shown

  const setupAudio = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
    });
  };

  useEffect(() => {
    const loadAppFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    const checkStarterSelection = async () => {
      const hasStarter = await hasSelectedStarter();
      setIsLoading(false);
    };

    loadAppFonts();
    setupAudio();
    checkStarterSelection();
  }, []);

  if (!fontsLoaded || isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (showStartScreen) {
    return (
      <TouchableOpacity
        style={styles.startScreenContainer}
        onPress={() => setShowStartScreen(false)} // Hide the start screen on press
      >
        <Text style={styles.startScreenText}>Press screen to start</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            orientation: "portrait", // Force portrait orientation
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="StarterSelection" component={StarterSelectionScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Battle" component={BattleScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="TeamManagement" component={TeamManagementScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
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
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "pixel-font",
  },
});