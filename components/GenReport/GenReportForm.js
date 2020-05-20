import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

class GenReportForm extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder='Time'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                autoCorrect={false}
                />
                
                <TextInput 
                placeholder='Date'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TextInput 
                placeholder='Where did it occur?'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TextInput 
                placeholder='What was the type of crime committed?'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TextInput 
                placeholder='Report Details'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.details}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /*container: {
        padding: 20,
        alignItems: 'center'
    },*/

    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'gray',
        paddingHorizontal: 10,
        borderRadius: 10,  
        width: 300
    },

    details:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'gray',
        paddingHorizontal: 10,
        borderRadius: 10,  
        width: 300,
        height: 200
    },

    buttonContainer:{
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        paddingVertical: 10,
        width: 100,
        alignSelf: 'center'
    },

    buttonText:{
        width: 200,
        fontWeight: '700',
        alignContent: 'center'
    }

});

export default GenReportForm;
