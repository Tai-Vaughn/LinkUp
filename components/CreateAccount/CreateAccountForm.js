/*
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import { globalStyles } from '../Styles';

import {Formik} from 'formik';
import * as yup from 'yup';

const CreateAccountSchema = yup.object({
    FirstName: yup.string()
     .required(),

     LastName: yup.string()
     .required(),
 
     Username: yup.string()
     .required(),
     /* must not include special symbols. '.' and '_' only *//*
 
     IDNumber: yup.string()
     .required(),
     /* must be a valid uwi id number *//*
 
     EmailAddress: yup.string()
     .required(),
     /* must be a valid uwi email *//*

     Password: yup.string()
     .required()
     .min(8),
     /* must include at least one number, uppercase letter *//*

     ConfirmPassWord: yup.string()/*
     .required()
     .min(8)
     /* passwords must match *//*
 })
 
class CreateAccountForm extends React.Component{
    render(){
        return (
            <View style={globalStyles.formContainer}>
                <Formik
                initialValues={{FirstName: '', Username: '', IDNumber: '', 
                EmailAddress: '', Password: '', ConfirmPassWord: '', LastName: ''}}

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
                        autoCapitalize='words'
                        
                        style={globalStyles.input}
                        onSubmitEditing={() => this.lastNameInput.focus()}
                        autoCorrect={false}
                        
                        onChangeText={props.handleChange('FirstName')}
                        value={props.values.FirstName}
                        onBlur={props.handleBlur('FirstName')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.FirstName && props.errors.FirstName} </Text>

                        <TextInput 
                        placeholder='Last Name'
                        returnKeyType='next'
                        autoCapitalize='words'
                        
                        style={globalStyles.input}
                        onSubmitEditing={() => this.usernameInput.focus()}
                        autoCorrect={false}
                        
                        ref = {(input) => this.lastNameInput = input}
                        onChangeText={props.handleChange('LastName')}

                        value={props.values.LastName}
                        onBlur={props.handleBlur('LastName')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.LastName && props.errors.LastName} </Text>

                        <TextInput 
                        placeholder='Username'
                        returnKeyType='next'
                        autoCapitalize='none'

                        style={globalStyles.input}
                        autoCorrect={false}
                        onSubmitEditing={() => this.idInput.focus()}

                        ref = {(input) => this.usernameInput = input}
                        onChangeText={props.handleChange('Username')}
                        
                        value={props.values.Username}
                        onBlur={props.handleBlur('Username')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Username && props.errors.Username} </Text>

                        <TextInput 
                        placeholder='ID number'
                        returnKeyType='next'
                        keyboardType='decimal-pad'

                        style={globalStyles.input}
                        onSubmitEditing={() => this.emailInput.focus()}
                        ref = {(input) => this.idInput = input}

                        onChangeText={props.handleChange('IDNumber')}
                        value={props.values.IDNumber}
                        onBlur={props.handleBlur('IDNumber')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.IDNumber && props.errors.IDNumber} </Text>

                        <TextInput 
                        placeholder='E-mail Address'
                        returnKeyType='next'

                        keyboardType='email-address'
                        autoCapitalize='none'
                        
                        style={globalStyles.input}
                        autoCorrect={false}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        
                        ref={(input) => this.emailInput = input}
                        onChangeText={props.handleChange('EmailAddress')}
                        
                        value={props.values.EmailAddress}
                        onBlur={props.handleBlur('EmailAddress')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.EmailAddress && props.errors.EmailAddress} </Text>

                        <TextInput 
                        placeholder='Password'
                        secureTextEntry
                        returnKeyType='next'

                        style={globalStyles.input}
                        autoCorrect={false}
                        onSubmitEditing={() => this.verifyPasswordInput.focus()}

                        ref={(input) => this.passwordInput = input}
                        onChangeText={props.handleChange('Password')}

                        value={props.values.Password}
                        onBlur={props.handleBlur('Password')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Password && props.errors.Password} </Text>

                        <TextInput 
                        placeholder='Confirm Password'
                        secureTextEntry
                        returnKeyType='go'

                        style={globalStyles.input}
                        autoCorrect={false}

                        ref={(input) => this.verifyPasswordInput = input}
                        onChangeText={props.handleChange('ConfirmPassWord')}

                        value={props.values.ConfirmPassWord}
                        onBlur={props.handleBlur('ConfirmPassWord')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.ConfirmPassWord && props.errors.ConfirmPassWord} </Text>

                        <View style={styles.button}>
                            <Button
                            title='Create Account'
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
        marginBottom: 20,
        bottom: 0,
        borderRadius: 10,
        overflow: 'hidden',
        width: 150,
        alignSelf: 'center'
        }
});

export default CreateAccountForm;


/**-------------------------------------------------------------------------------------------- */
/**-------------------------------------------------------------------------------------------- */
/**-------------------------------------------------------------------------------------------- */
/**-------------------------------------------------------------------------------------------- */
/**-------------------------------------------------------------------------------------------- */


import React, {Component} from 'react';
import {globalStyles} from '../Styles';
import {View, TextInput, Button, Text} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';

/*keyboard does not dismiss*/

const FindRouteSchema = yup.object({
   /* this is just until the database become linked with this screen */
    FirstName: yup.string()
    .required(),

    LastName: yup.string()
    .required(),

    Username: yup.string()
    .required()
    .max(3),

    IDNumber: yup.string()
    .required()
    .test('is-num-higher-than-4', 'You must choose a group size of at least 4 persons (including yourself)', (val) => {
        return parseInt(val) >= 4;
    }),
})

class CreateAccountScreen extends React.Component{
    render(){
        return (
        
            <View style={globalStyles.container}>
                
                <Formik
                initialValues={{FirstName: '', LastName: '', Group: '', Size: ''}}
                validationSchema={FindRouteSchema}
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
                        onSubmitEditing={() => this.DestinationInput.focus()}
                        onBlur={props.handleBlur('FirstName')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.FirstName && props.errors.FirstName} </Text>

                        <TextInput 
                        placeholder='Last Name'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('LastName')}
                        value={props.values.LastName}
                        onSubmitEditing={() => this.placeholderInput.focus()}
                        ref={(input) => this.DestinationInput = input}
                        onBlur={props.handleBlur('LastName')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.LastName && props.errors.LastName}</Text>

                        <TextInput 
                        placeholder='Username'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('Username')}
                        value={props.values.Username}
                        onSubmitEditing={() => this.SizeInput.focus()}
                        ref={(input) => this.placeholderInput = input}
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
                        ref={(input) => this.SizeInput = input}
                        onBlur={props.handleBlur('IDNumber')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.IDNumber && props.errors.IDNumber}</Text>

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

export default CreateAccountScreen;