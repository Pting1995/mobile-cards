import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import deckPage from "./pages/deckPage.js"
// import handPage from "./pages/handPage.js"
import cards from "./cards.json"

const Stack = createStackNavigator();

// page: deck/discard pile - able to reshuffle deck and discard pile
// page: your hand - able to discard/put back cards

function App() {

  var deck = [];
  var hand = [];
  var discard = [];

  // initializes deck, hand and discard arrays
  function initDeck() {
    deck = [];
    hand = [];
    discard = [];
    deck = cards;
    return deck;
  }

  function getRandInt(max) {
    return Math.floor(Math.random() * max)
  }

  // draw 1 card
  function drawCard() {
    // math.random to draw a card
    var drawnCard = {}
    var drawnCardIndex = getRandInt(deck.length)
    drawnCard = deck[drawnCardIndex]
    // add it to the hand
    hand.push(drawnCard)
    // delete it from the deck
    deck.splice(drawnCardIndex, 1)
  }


  initDeck();
  drawCard();

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