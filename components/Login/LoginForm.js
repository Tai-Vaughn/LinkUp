import React from 'react';
import {StyleSheet, View, TextInput, Button,Text} from 'react-native';
import {globalStyles} from '../Styles'; 
import { fetchUpdateAsync } from 'expo-updates';
import * as DataService from '../Service/DataService';
import {map,tap} from 'rxjs/operators'

/* 
MAY NEED FOR IOS

import StatusBar
<StatusBar barStyle='light-content'/>

import KeyboardAvoidingView
change first view component to KeyboardAvoidingView behaviour='padding'

   spacing: {
        paddingTop: 40,
    }

how to get cursor at the beginning of text
(cursor is at beginning on tablet but in the middle on phone)
*/

class LoginForm extends React.Component {
    constructor(){
        super()
        this.state = {
            Authinfo : {
                email: '',
                password: ''
            },
            Message: 'we'
        }
    }

    setAuthinfo(data,type){
        if (type == 'email'){
            this.state.Authinfo.email = data
        } else {
            this.state.Authinfo.password =data
        }
    }

    setMessage(data){
        this.state.Message = 'yoyo';
    }

    render(){
        return (
            <View style={globalStyles.formContainer}>
                <TextInput 
                placeholder='Username or E-mail address'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='email-address'
                autoCapitalize='none'
                style={globalStyles.input}
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                onChangeText = {(val) => this.setAuthinfo(val,'email')}
                />
                
                <TextInput 
                placeholder='Password'
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry
                returnKeyType='go'
                style={globalStyles.input}
                ref={(input) => this.passwordInput = input}
                onChangeText = {(val) => this.setAuthinfo(val,'password')}
                />

            <View style={styles.button}>
            <Button
                title='Login'
                onPress = { () => DataService.login(this.state.Authinfo) }
            />
            <Button
                title='test'
                onPress = { () => this.setMessage('yoyo') }
            />
            <Text>{this.state.Message}</Text>
            </View>
          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        bottom: 0,
        borderRadius: 10,
        overflow: 'hidden',
        width: 150,
        marginBottom: 100
      }

});

export default LoginForm;
