import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import LoginForm from './LoginForm';
import {globalStyles} from '../Styles'; 

export default function LoginScreen  ({ navigation }){
        return (
          <ScrollView>
            <View style={globalStyles.container}>

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


