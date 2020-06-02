import React from 'react';
import {StyleSheet, View, Image, Button, Text} from 'react-native';
import {globalStyles} from '../Styles'; 

class HomeScreen extends React.Component{
  render(){
    return (
      <View style={globalStyles.container}>
      
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('./LinkUp.png')}/>
      </View>

      <Text style={styles.text}>LINK UP</Text>

      <View style={styles.button}>
      <Button 
        title='Login'
      />
      </View>

      <View style={styles.button}>
      <Button 
        title='Create Account'
      />
      </View>

      </View>
  )
}
}

const styles = StyleSheet.create({
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
    marginBottom: 90,
    fontFamily: 'righteous'
  }, 

  button:{
    marginBottom: 20,
    bottom: 0,
    borderRadius: 10,
    overflow: 'hidden',
    width: 150
  }

});

export default HomeScreen;