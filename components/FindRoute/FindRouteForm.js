import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

class FindRouteForm extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder='Origin'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                autoCorrect={false}
                />
                
                <TextInput 
                placeholder='Destination'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TextInput 
                placeholder='Would you like to travel with a group?'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TextInput 
                placeholder='Minimum Group Size'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'steelblue',
        padding: 90,
        alignItems: 'center'
    },

    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'gray',
        paddingHorizontal: 10,
        borderRadius: 10,  
        width: 300
    },

    buttonContainer:{
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        paddingVertical: 10,
        width: 100,
        alignSelf: 'center',
        marginTop: 120
    },

    buttonText:{
        width: 200,
        fontWeight: '700',
        alignItems: 'center',
        height: 20
    }

});

export default FindRouteForm;