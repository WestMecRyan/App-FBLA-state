"use client"

import { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import SettingsScreen from "./screens/SettingsScreen"
import MapScreen from "./screens/MapScreen"
import TeamManagementScreen from "./screens/TeamManagementScreen"
import BattleScreen from "./screens/BattleScreen"
import LoginScreen from "./screens/LoginScreen"
import { debugGameState } from "./utils/gameState"
import RegisterScreen from "./screens/RegisterScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Uncomment this line to reset the game state for testing
    // resetGame().then(() => console.log('Game state reset'));

    // Debug current game state
    debugGameState()

    // Check if user is logged in
    // This is where you would check AsyncStorage, SecureStore, or your auth state
    // For demo purposes, we'll just set isLoggedIn to false
    setTimeout(() => {
      setIsLoggedIn(false)
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    // You could return a splash screen here
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "Home" : "Login"}
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="TeamManagement" component={TeamManagementScreen} />
        <Stack.Screen name="Battle" component={BattleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

