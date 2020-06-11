import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {globalStyles} from '../Styles'; 
import {Formik} from 'formik'; 
import * as yup from 'yup';
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





const LoginSchema = yup.object({
    UsernameorEmail: yup.string()
    .required(),

    LoginPassword: yup.string()
    .required()
})

class LoginForm extends React.Component{
    render(){
        return (
        
            <View style={globalStyles.container}>
                
                <Formik
                initialValues={{UsernameorEmail: '', LoginPassword: ''}}
                validationSchema={LoginSchema}
                
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                }}
                >

                {(props) => (
                    <View>
                        
                        <TextInput
                        placeholder='Username or E-mail Address'
                        returnKeyType='next'

                        style={globalStyles.input}
                        onChangeText={props.handleChange('UsernameorEmail')}
                        value={props.values.UsernameorEmail}    

                        onBlur={props.handleBlur('UsernameorEmail')}
                        onSubmitEditing={() => this.LoginPasswordInput.focus()}
                        />

                        <Text 
                        style={globalStyles.errorMessage}> 
                        {props.touched.UsernameorEmail && props.errors.UsernameorEmail}
                        </Text>

                        <TextInput
                        placeholder='Confirm Password'
                        returnKeyType='go'
                        secureTextEntry

                        style={globalStyles.input}
                        onChangeText={props.handleChange('LoginPassword')}
                        value={props.values.LoginPassword}

                        ref={(input) => this.LoginPasswordInput = input}
                        onBlur={props.handleBlur('LoginPassword')}
                        />
                        
                        <Text style={globalStyles.errorMessage}> 
                        {props.touched.LoginPassword && props.errors.LoginPassword}
                        </Text>

                        <View style={globalStyles.button}>
                            <Button 
                            title='Submit' 
                            onPress={props.handleSubmit}
                            />
                        </View>
                    </View>
                )}
                </Formik>
               
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
