import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

function App({ navigation }) {

    function discardCard() {

    }

    function shuffleCard() {

    }

    return (
        <View style={styles.container}>
            <Text>Hey</Text>
            <Button
                title="View Hand"
                onPress={() =>
                    navigation.navigate('Deck')
                }
            />
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