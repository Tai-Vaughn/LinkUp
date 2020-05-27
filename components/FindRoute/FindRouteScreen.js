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
      padding: 70,
      alignItems: 'center'
  },

  text:{
    color:'white',
    fontSize: 30,
    textAlign:'justify',
    width: 325,
    textAlign: 'center'
  },

  textDetails:{
    color:'white',
    marginBottom: 30,
    width: 320,
    fontSize: 15
  }

});

export default FindRouteScreen;