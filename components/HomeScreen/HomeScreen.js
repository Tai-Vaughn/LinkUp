import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, Image, Button, Text} from 'react-native';

export default function HomeScreen ({navigation}) {
    return (
      <View style={styles.container}>
      
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../../static/LinkUp.png')}/>
      </View>

      <Text style={styles.text}>LINK UP</Text>

      <View style={styles.spacing}>
      <Button
        title='Login'
        onPress = {() => navigation.push('login')}
      />
      </View>

      <Button
        title='Create Account'
        onPress = {() => navigation.push('registration')}
      />

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'steelblue',
      padding: 50,
      alignItems: 'center',
      flex: 1
  },

  logo:{
    width: 100,
    height: 100
  },

  logoContainer:{
    alignItems: 'center',
    marginBottom: 20
  },

  text:{
    color: 'white',
    fontSize: 40,
    marginBottom: 90
  },

  spacing:{
    marginBottom: 20
  }

});
