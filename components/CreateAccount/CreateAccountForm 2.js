import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView} from 'react-native';

/* 
need screen to scroll while user moves through the inputs 
ensure formatting is right 
need to switch to next field when user clicks next
*/

class CreateAccountForm extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder='Full Name'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='default'
                autoCapitalize='words'
                style={styles.input}
                /*onSubmitEditing={() => this.passwordInput.focus()}*/
                autoCorrect={false}
                />

                <TextInput 
                placeholder='Username'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='default'
                autoCapitalize='none'
                style={styles.input}
                autoCorrect={false}
                /*ref={(input) => this.passwordInput = input}*/
                />

                <TextInput 
                placeholder='E-mail Address'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='email-address'
                autoCapitalize='none'
                style={styles.input}
                autoCorrect={false}
                /*ref={(input) => this.passwordInput = input}*/
                />

                <TextInput 
                placeholder='Password'
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry
                returnKeyType='next'
                keyboardType='default'
                autoCapitalize='none'
                style={styles.input}
                autoCorrect={false}
                /*ref={(input) => this.passwordInput = input}*/
                />

                <TextInput 
                placeholder='Confirm Password'
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry
                returnKeyType='go'
                keyboardType='default'
                autoCapitalize='none'
                style={styles.input}
                autoCorrect={false}
                /*ref={(input) => this.passwordInput = input}*/
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
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
        fontWeight: '700'
    }

});

export default CreateAccountForm;
