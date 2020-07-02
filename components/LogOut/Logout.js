import React from 'react';
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';
import {globalStyles} from '../Styles'; 

export default function LogOut  ({ navigation }){
        return (
          <ScrollView>
            <View style={styles.container}>

            <View style={globalStyles.logoContainer}>
              <Image 
              style={globalStyles.logo}
              source={require('../../static/LinkUp.png')}/>
              <Text style={globalStyles.name}>LINK UP</Text>
           
              <LoginForm/>
            </View>

            </View>
            </ScrollView>
        )
    }

const styles = StyleSheet.create({
      container: {
          backgroundColor: 'steelblue',
          flex: 1,
          padding: 100
      }
});
