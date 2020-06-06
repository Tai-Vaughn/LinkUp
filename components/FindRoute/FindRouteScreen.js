import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../Styles'
import FindRouteForm from './FindRouteForm';

class FindRouteScreen extends React.Component{
  render(){
      return (
          <View style={globalStyles.container}> 
            <Text style={styles.text}>Find Route</Text>
            <FindRouteForm/>    
          </View>  
      )
  }
}

const styles = StyleSheet.create({
  text:{
    color:'white',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'righteous'
  }

});

export default FindRouteScreen;