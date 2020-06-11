import React from 'react';
import MapView from 'react-native-maps'; //https://medium.com/@samil.mehdiyev/integrating-google-maps-into-react-native-app-on-android-40c984c0e4f2
import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
//import StartMenue from './components/StartMenue.js';
import MapRun from './components/models/MapRun.js';

export default function App() {
    return (
        <View>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <MapRun />
        </View>

    );
}




