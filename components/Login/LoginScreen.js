import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';
import LoginForm from './LoginForm';

/*
const fontStyles = ["normal", "italic", "sans-serif-light"];
const fontFamily = ['Iowan Old Style'];
<Text style={{styles.name, fontFamily: 'Iowan Old Style'}}
fontStyles = ["sans-serif-light"]
*/

class LoginScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>

            <View style={styles.logoContainer}>
              <Image 
              style={styles.logo}
              source={require('./LinkUp.png')}/>
              <Text style={styles.name}>LINK UP</Text>
            </View>  

            <View>
              <LoginForm/>
            </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
        padding: 100
    },

    logo:{
      width: 100,
      height: 100
    },

    logoContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },

    name:{
      textAlign: 'center',
      color: 'white',
      flex: 1,
      fontSize: 35,
      marginTop: 10
    }

});

export default LoginScreen;
