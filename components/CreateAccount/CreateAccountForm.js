import React from 'react';
import {StyleSheet, View, TextInput, Button,} from 'react-native';
import { globalStyles } from '../Styles';


class CreateAccountForm extends React.Component{
    constructor(){
        super();
        this.state = {
            userInfo: {
                firstName: 'joe',
                lastName: 'Shmo',
                username: 'regular',
                studentID: 1234567,
                email: 'joeShmo@hotmail.com',
                password: 'pass123'
            }
        }
        
    }
    setuserinfo(data,type){
        switch(type){
            case 'FirstName':
                this.state.userInfo.firstName = data
                break;
            case 'LastName':
                this.state.userInfo.lastName = data
                break;
            case 'Username':
                this.state.userInfo.username = data
                break;
            case 'StudentID':
                this.state.userInfo.studentID = parseInt(data)
                break;
            case 'Email':
                this.state.userInfo.email = data
                break;
            case 'Password':
                this.state.userInfo.password = data
                break;
            
        }

    }

    createUser(){
        fetch('https://linkupcapstone.herokuapp.com/users/signup',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(this.state.userInfo)

        })
        .then( (response) => response.json())
        .then((json) => console.log(json))
        .catch( (err) => console.log(err))
    }
    render(){
        return (
            <View style={globalStyles.formContainer}>
                <TextInput 
                placeholder='First Name'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                autoCapitalize='words'
                style={globalStyles.input}
                onSubmitEditing={() => this.usernameInput.focus()}
                autoCorrect={false}
                onChangeText={(val) => {this.setuserinfo(val,'FirstName')}}
                />

                <TextInput 
                placeholder='Last Name'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                autoCapitalize='words'
                style={globalStyles.input}
                onSubmitEditing={() => this.usernameInput.focus()}
                autoCorrect={false}
                onChangeText={(val) => {this.setuserinfo(val,'LastName')}}
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
                onChangeText={(val) => {this.setuserinfo(val,'Username')}}
                />

                <TextInput 
                placeholder='ID number'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='decimal-pad'
                style={globalStyles.input}
                onSubmitEditing={() => this.emailInput.focus()}
                ref = {(input) => this.idInput = input}
                onChangeText={(val) => {this.setuserinfo(val,'StudentID')}}
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
                onChangeText={(val) => {this.setuserinfo(val,'Email')}}
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
                onChangeText={(val) => {this.setuserinfo(val,'Password')}}
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
                    onPress={() => this.createUser()}
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
