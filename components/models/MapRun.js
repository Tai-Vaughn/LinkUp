import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';
//import StartMenue from './components/StartMenue.js';
import UsersMap from './components/models/UsersMap';

export default function MapRun() {
    return (
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../static/LinkUp.png')} />
                <Text style={styles.name}>LINK UP</Text>
            </View>

            <View>
                <UsersMap />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
        padding: 100
    },

    logo: {
        width: 100,
        height: 100
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    name: {
        textAlign: 'center',
        color: 'white',
        flex: 1,
        fontSize: 40,
        marginTop: 10
    }

});