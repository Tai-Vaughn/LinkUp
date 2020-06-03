import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
//import StartMenue from './components/StartMenue.js';
import Graph from './components/models/Graph.js';
export default function MapRun() {
    return (
        //need a function to call and run the classes 
        <View>
            <Text> Graph </Text>
            <Graph />
        </View>
    );
}