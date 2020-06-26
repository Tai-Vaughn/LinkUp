import React, {Component} from 'react';
import {globalStyles} from '../Styles';
import {View, TextInput, Button, Text} from 'react-native';
import * as DataService from '../Service/DataService';
import {Formik} from 'formik';
import * as yup from 'yup';

const CreateAccountSchema = yup.object({
    FirstName: yup.string()
    .required(),

    LastName: yup.string()
    .required(),

    Username: yup.string()
    .required()
    .min(6),

    IDNumber: yup.string() 
    .required(),

    Email: yup.string()
    .required()
    .email(),

    Password: yup.string()
    .required()
    .min(8),

    ConfirmPassword: yup.string()
    .required()
    .test('passwords-match', 'Passwords must match', function(value) {
        return this.parent.Password === value;
      }),
})

class CreateAccountScreen extends React.Component{
    render(){
        return (
        
            <View style={globalStyles.container}>
                
                <Formik
                initialValues={{FirstName: '', LastName: '', Username: '', IDNumber: '', Email: '',
                Password: '', ConfirmPassword: ''}}
                validationSchema={CreateAccountSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                }}
                >

                {(props) => (
                    <View>
                        <TextInput 
                        placeholder='First Name'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('FirstName')}
                        value={props.values.FirstName}
                        onSubmitEditing={() => this.LastNameInput.focus()}
                        onBlur={props.handleBlur('FirstName')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.FirstName && props.errors.FirstName} </Text>

                        <TextInput 
                        placeholder='Last Name'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('LastName')}
                        value={props.values.LastName}
                        onSubmitEditing={() => this.UsernameInput.focus()}
                        ref={(input) => this.LastNameInput = input}
                        onBlur={props.handleBlur('LastName')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.LastName && props.errors.LastName}</Text>

                        <TextInput 
                        placeholder='Username'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('Username')}
                        value={props.values.Username}
                        onSubmitEditing={() => this.IDNumberInput.focus()}
                        ref={(input) => this.UsernameInput = input}
                        onBlur={props.handleBlur('Username')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Username && props.errors.Username}</Text>

                        <TextInput 
                        placeholder='ID Number'
                        returnKeyType='next'
                        keyboardType='numeric'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('IDNumber')}
                        value={props.values.IDNumber}
                        ref={(input) => this.IDNumberInput = input}
                        onBlur={props.handleBlur('IDNumber')}
                        onSubmitEditing={() => this.EmailInput.focus()}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.IDNumber && props.errors.IDNumber}</Text>

                        <TextInput
                        placeholder='E-mail Address'
                        returnKeyType='next'
                        keyboardType='email-address'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('Email')}
                        value={props.values.Email}
                        ref={(input) => this.EmailInput = input}
                        onBlut={props.handleBlur('Email')}
                        onSubmitEditing={() => this.PasswordInput.focus()}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Email && props.errors.Email}</Text>

                        <TextInput
                        placeholder='Password'
                        returnKeyType='next'
                        secureTextEntry
                        style={globalStyles.input}
                        onChangeText={props.handleChange('Password')}
                        value={props.values.Password}
                        ref={(input) => this.PasswordInput = input}
                        onBlut={props.handleBlur('Password')}
                        onSubmitEditing={() => this.ConfirmPasswordInput.focus()}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Password && props.errors.Password}</Text>

                        <TextInput
                        placeholder='Confirm Password'
                        returnKeyType='go'
                        secureTextEntry
                        style={globalStyles.input}
                        onChangeText={props.handleChange('ConfirmPassword')}
                        value={props.values.ConfirmPassword}
                        ref={(input) => this.ConfirmPasswordInput = input}
                        onBlur={props.handleBlur('ConfirmPassword')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.ConfirmPassword && props.errors.ConfirmPassword}</Text>

                        <View style={globalStyles.button}>
                            <Button 
                            title='Submit' 
                            onPress={() => DataService.createUser(props.values)}
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

export default CreateAccountScreen;
