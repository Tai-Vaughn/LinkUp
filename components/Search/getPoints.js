import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function getPoints(){
    //should have select of points on map instead
    //(name, distance, safety) makes up a point
    //obtain user�s start location and end destination from user and database
    
    return points((start,end) => {
        const [start, setStart] = useState('start');
        const [end, setEnd] = useState('end');
        <View>
            <TextInput
                placeholder='Starting Point'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='default'
                style={styles.input}
                autoCorrect={false}
                onChangeText={(val) => setStart(val)}
            />
            <TextInput
                placeholder='Destination'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='default'
                style={styles.input}
                autoCorrect={false}
                onChangeText={(val) => setEnd(val)}
            />
            <Text> {start}, {end} </Text>
        </View>
        return start, end;
    }, undefined);
        
    };