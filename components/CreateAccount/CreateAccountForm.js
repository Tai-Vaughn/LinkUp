import React from 'react';
import {StyleSheet, View, TextInput, Button,} from 'react-native';
import { globalStyles } from '../Styles';


class CreateAccountForm extends React.Component{
    render(){
        return (
            <View style={globalStyles.formContainer}>
                <TextInput 
                placeholder='Full Name'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                autoCapitalize='words'
                style={globalStyles.input}
                onSubmitEditing={() => this.usernameInput.focus()}
                autoCorrect={false}
                />

                <TextInput 
                placeholder='Username'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                autoCapitalize='none'
                style={globalStyles.input}
                autoCorrect={false}
                onSubmitEditing={() => this.idInput.focus()}
                ref = {(input) => this.usernameInput = input}
                />

                <TextInput 
                placeholder='ID number'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='decimal-pad'
                style={globalStyles.input}
                onSubmitEditing={() => this.emailInput.focus()}
                ref = {(input) => this.idInput = input}
                />

                <TextInput 
                placeholder='E-mail Address'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='email-address'
                autoCapitalize='none'
                style={globalStyles.input}
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                ref={(input) => this.emailInput = input}
                />

                <TextInput 
                placeholder='Password'
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry
                returnKeyType='next'
                style={globalStyles.input}
                autoCorrect={false}
                onSubmitEditing={() => this.verifyPasswordInput.focus()}
                ref={(input) => this.passwordInput = input}
                />

                <TextInput 
                placeholder='Confirm Password'
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry
                returnKeyType='go'
                autoCapitalize='none'
                style={globalStyles.input}
                autoCorrect={false}
                ref={(input) => this.verifyPasswordInput = input}
                />

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
       button:{
        marginBottom: 20,
        bottom: 0,
        borderRadius: 10,
        overflow: 'hidden',
        width: 150
        }
});

export default CreateAccountForm;
