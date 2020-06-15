import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function getPoints(){
    //should have select of points on map instead
    //(name, distance, safety) makes up a point
    //obtain user�s start location and end destination from user and database
    
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const startInputHandler= enteredText =>{
            setStart(enteredText);
        };
    const endInputHandler= enteredText =>{
            setEnd(enteredText);
        };
    return (
            
        <View>
        <TextInput
            placeholder='Starting Point'
            placeholderTextColor='rgba(255,255,255,0.7)'
            returnKeyType='next'
            keyboardType='default'
            style={styles.input}
            autoCorrect={false}
            onChangeText={startInputHandler}
            value={start}
        />
        <TextInput
            placeholder='Destination'
            placeholderTextColor='rgba(255,255,255,0.7)'
            returnKeyType='next'
            keyboardType='default'
            style={styles.input}
            autoCorrect={false}
            onChangeText={endInputHandler}
            value={end}
        />
        <Button title='Enter' onPress={props.onAddPoint.bind(this, start, end)}  />
        
    </View>
        );
        
    };