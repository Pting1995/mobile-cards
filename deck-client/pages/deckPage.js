import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import cards from "../cards.json"

function App({ navigation }) {

    var deck = []
    var hand = []
    var discard = []

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
        // console.log(deck)
        // console.log(hand)
    }

    initDeck()

    // console.log(deck)
    // console.log(hand)
    // console.log(discard)

    initDeck()

    return (
        <View style={styles.container}>
            <Button
                title="View Hand"
                onPress={() =>
                    navigation.navigate('Hand')
                }
            />
            {/* display deck here */}
            <Text>Discard Pile</Text>
            {/* display discard pile here */}
        </View>
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