import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Picker, TouchableOpacity, Text, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Timee from '../FindRoute/Timee';
import MyDatePicker from '../FindRoute/DatePicker';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as DataService from '../Service/DataService';


/* 
Time/Date source code was copied from a github repo linked on React Native's website: 
https://github.com/react-native-community/datetimepicker
*/

const ReportFormSchema = yup.object({
    location: yup.string()
        .required(),

    type: yup.string()
        .required(),

    description: yup.string()
        .required(),

    time: yup.string()
        .required(),

})


export default class ReportForm extends Component {
    constructor(props, { navigation }) {
        super(props),
            this.state = {
                location: '',
                type: '',
                description: '',
                time: ''
            }

    }

    render() {
        return (
            <ScrollView>

                <Formik
                    initialValues={{
                        location: '',
                        type: '',
                        description: '',
                        time: ''
                    }}
                   // validationSchema={ReportFormSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        console.log(values);
                        this.setState({location: '',
                        type: '',
                        description: '',
                        time: ''});
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInput
                                placeholder='Where did the incident occur?'
                                placeholderTextColor='rgba(255,255,255,0.7)'
                                returnKeyType='next'
                                style={styles.input}
                                onChangeText={handleChange('location')}
                                onBlur={handleBlur('location')}
                                value={values.location}
                            />

                            <Picker
                                style={styles.input}
                                selectedValue={this.state.type}
                                onValueChange={(value) => this.setState({ type: value })} >


                                <Picker.Item label='Type of Crime' value='' />
                                <Picker.Item label='Aggravated Assault' value='aggravatedAssault' />
                                <Picker.Item label='Break-In' value='breakIn' />
                                <Picker.Item label="Kidnapping/Attempted Kidnapping" value='kidnapping' />
                                <Picker.Item label="Robbery/Attempted Robbery" value='robbery' />
                                <Picker.Item label='Sexual Assault/Rape' value='sexualAssault' />
                                <Picker.Item label='Shooting' value='shooting' />
                                <Picker.Item label='Theft' value='theft' />
                            </Picker>
                            <TextInput
                                placeholder='Report Details'
                                multiline
                                numberOfLines={8}
                                placeholderTextColor='rgba(255,255,255,0.7)'
                                returnKeyType='next'
                                style={styles.details}
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}
                            />
                            <TextInput
                                placeholder='What time did the incident occur?'
                                placeholderTextColor='rgba(255,255,255,0.7)'
                                returnKeyType='next'
                                style={styles.input}
                                keyboardType='numeric'
                                onChangeText={handleChange('time')}
                                onBlur={handleBlur('time')}
                                value={values.time}
                            />



                            <Text style={styles.pad}></Text>
                            <View style={styles.buttonContainer}>
                                <Button onPress={handleSubmit} title="Submit" />
                            </View>

                        </View>

                    )}
                </Formik>

            </ScrollView>
        );

    }

};

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'white',
        paddingHorizontal: 10,
        borderRadius: 10,
        width: 275,
        flexWrap: 'wrap'
    },
    details: {
        height: 140,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'white',
        paddingHorizontal: 10,
        borderRadius: 10,
        width: 275,
        flexWrap: 'wrap',
        textAlign: 'left',
        textAlignVertical: 'top'
    },
    pad: {
        marginBottom: 5,
    },
    buttonContainer: {
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        overflow: 'hidden',
        alignSelf: 'center',

    },

    // buttonText:{
    //     width: 200,
    //     textAlign: 'center',
    //     fontWeight: '700'
    // },

    pickerContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        paddingVertical: 10,
        width: 120,
        textAlign: 'right',
        marginBottom: 20
    },

    pickerText: {
        width: 200,
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)'
    }

});
//<Text ><MyDatePicker /></Text>