import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MapScreen from './screens/MapScreen';
import TeamManagementScreen from './screens/TeamManagementScreen';
import BattleScreen from './screens/BattleScreen';
import { resetGameState, debugGameState } from './utils/gameState';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    // Uncomment this line to reset the game state for testing
    // resetGameState().then(() => console.log('Game state reset'));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'fade'
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="TeamManagement" component={TeamManagementScreen} />
        <Stack.Screen name="Battle" component={BattleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}