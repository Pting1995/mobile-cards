import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import cards from "../cards.json"

function App({ navigation }) {

    // var deckArr = [];
    // var discardArr = [];

    // function initDeck() {
    //     for (var i = 0; i < cards.length; i++) {
    //         deckArr.push(cards[i].url)
    //         console.log(deckArr)
    //     }
    // }

    // initDeck()

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