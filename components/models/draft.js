import React from 'react';
import { Stylesheet, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAesome';

const Draft = ({ props }) => {
    return (
        );
};
const addMember = ({ member }) => {
    if (!text) {
        Alert.alert('Error', 'Please type member', { text: 'OK');
    } else {
        setMember(prevMembers => {
            return [{ id: Math.random(), text: member }, ...prevMembers];
        });
    }
    
}
const styles = StyleSheet.create({

});

export default Draft;


import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import CreateAccountForm from './CreateAccountForm';

class CreateAccountScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../static/LinkUp.png')} />
                    <Text style={styles.name}>LINK UP</Text>
                </View>

                <View>
                    <CreateAccountForm />
                </View>

            </View>
        )
    }
}

import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';

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