import React from 'react';
import {StyleSheet, View, Image, Button, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../Styles'; 

export default function HomeScreen ({navigation}) {
    return (
      <View style={styles.container}>
      
      <View style={globalStyles.logoContainer}>
      <Image style={globalStyles.logo} source={require('../../static/LinkUp.png')}/>
      </View>

      <Text style={styles.text}>LINK UP</Text>

      <View style={globalStyles.button}>
      <Button
        title='Login'
        onPress = {() => navigation.push('login')}
      />
      </View>

      <View style={globalStyles.button}>
      <Button
        title='Create Account'
        onPress = {() => navigation.push('registration')}
      />
      </View>

      <View style={globalStyles.button}>
      <Button
        title='Find Route'
        onPress = {() => navigation.push('find route')}
      />
      </View>

     
      
      </View>
  )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'steelblue',
      padding: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },

  text:{
    color: 'white',
    fontSize: 40,
    marginBottom: 90,
    fontFamily: 'righteous'
  }

});
 /*<TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AuthStack', { screen: 'Login' })}>
              <Text>Login</Text>
           </TouchableOpacity>*/