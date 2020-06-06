import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FindRouteForm from './FindRouteForm';

class FindRouteScreen extends React.Component{
  render(){
      return (
          <View style={styles.container}> 
            <Text style={styles.text}>Find Route</Text>
            <FindRouteForm/>    
          </View>  
      )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'steelblue',
      padding: 50,
      flex: 1,
      alignItems: 'center'
  },

  text:{
    color:'white',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'righteous'
  },

  textDetails:{
    color:'white',
    marginBottom: 30,
    width: 320,
    fontSize: 15
  }

});

export default FindRouteScreen;