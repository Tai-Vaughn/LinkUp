import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

/* 
MAY NEED FOR IOS

import StatusBar
<StatusBar barStyle='light-content'/>

import KeyboardAvoidingView
change first view component to kav behaviour='padding'
*/

class LoginForm extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder='Enter username or email'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='email-address'
                autoCapitalize='none'
                style={styles.input}
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                />
                
                <TextInput 
                placeholder='Enter password'
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry
                returnKeyType='go'
                style={styles.input}
                ref={(input) => this.passwordInput = input}/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },

    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        width: 200,
        paddingHorizontal: 10,
        borderRadius: 10, 
        textAlign: 'center'
    },

    buttonContainer:{
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        paddingVertical: 15,
        width: 200
    },

    buttonText:{
        width: 200,
        textAlign: 'center',
        fontWeight: '900'
    }

});

export default LoginForm;
