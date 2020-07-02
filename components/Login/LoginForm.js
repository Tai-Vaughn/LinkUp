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
*/





const LoginSchema = yup.object({
    Email: yup.string()
    .required(),

    Password: yup.string()
    .required()
})

class LoginForm extends React.Component{
    render(){
        return (
        
            <View style={globalStyles.container}>
                
                <Formik
                initialValues={{Email: '', Password: ''}}
                validationSchema={LoginSchema}
                
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    DataService.login(values)
                    console.log(values)
                }}
                >

                {(props) => (
                    <View>
                        
                        <TextInput
                        placeholder='Username or E-mail Address'
                        returnKeyType='next'

                        style={globalStyles.input}
                        onChangeText={props.handleChange('Email')}
                        value={props.values.Email}    

                        onBlur={props.handleBlur('Email')}
                        onSubmitEditing={() => this.Password.focus()}
                        />

                        <Text 
                        style={globalStyles.errorMessage}> 
                        {props.touched.Email && props.errors.Email}
                        </Text>

                        <TextInput
                        placeholder='Password'
                        returnKeyType='go'
                        secureTextEntry

                        style={globalStyles.input}
                        onChangeText={props.handleChange('Password')}
                        value={props.values.Password}

                        ref={(input) => this.Password = input}
                        onBlur={props.handleBlur('Password')}
                        />
                        
                        <Text style={globalStyles.errorMessage}> 
                        {props.touched.Password && props.errors.Password}
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
