import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import deckPage from "./pages/deckPage.js"
import handPage from "./pages/handPage.js"
import cards from "./cards.json"

const Stack = createStackNavigator();

// page: deck/discard pile - able to reshuffle deck and discard pile
// page: your hand - able to discard/put back cards

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Deck"
          component={deckPage}
        />
        <Stack.Screen
          name="Hand"
          component={handPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;