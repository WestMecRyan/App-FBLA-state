import { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { View, Text, Platform, UIManager, StatusBar } from "react-native"
import HomeScreen from "./screens/HomeScreen"
import MapScreen from "./screens/MapScreen"
import BattleScreen from "./screens/BattleScreen"
import SettingsScreen from "./screens/SettingsScreen"
import TeamManagementScreen from "./screens/TeamManagementScreen"
import StarterSelectionScreen from "./screens/StarterSelectionScreen"
import { hasSelectedStarter } from "./utils/gameState"
import { loadFonts } from './utils/fonts';
import { resetGameState } from './utils/gameState';
import { Audio } from 'expo-av';

// Enable layout animations for Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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

    loadAppFonts();
    setupAudio();

    // Uncomment this line to reset the game state for testing
    // resetGameState().then(() => console.log('Game state reset'));
  }, []);

  const [isLoading, setIsLoading] = useState(true)
  const [starterSelected, setStarterSelected] = useState(false)

  useEffect(() => {
    // Force portrait orientation
    // Note: This would require additional native code in a real app
    // For Expo, you would set this in app.json

    const checkStarterSelection = async () => {
      const hasStarter = await hasSelectedStarter()
      setStarterSelected(hasStarter)
      setIsLoading(false)
    }

    checkStarterSelection()
  }, [])

  if (!fontsLoaded || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
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
  )
}

