import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Picker, TouchableOpacity, Text, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Timee from '../FindRoute/Timee';
import MyDatePicker from '../FindRoute/DatePicker';
import { Formik } from 'formik';

/* 
Time/Date source code was copied from a github repo linked on React Native's website: 
https://github.com/react-native-community/datetimepicker
*/

export default class ReportForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Location: '',
            Type: '',
            Description: '',
            Date: ''
        }
    }
    
    render() {
        return (
            <ScrollView>

                <Formik
                    initialValues={{
                        Location: '',
                        Type: '',
                        Description: '',
                        Date: ''
                    }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInput
                                placeholder='Where did the incident occur?'
                                placeholderTextColor='rgba(255,255,255,0.7)'
                                returnKeyType='next'
                                style={styles.input}
                                onChangeText={handleChange('Location')}
                                onBlur={handleBlur('Location')}
                                value={values.Location}
                            />

                            <Picker
                                style={styles.input}
                                selectedValue={this.state.Type}
                                onValueChange={(itemValue) =>this.setState({ Type: itemValue })} 
                            >
                                <Picker.Item label='Type of Crime' value='' />
                                <Picker.Item label='Aggravated Assault' value='Aggravated Assault' />
                                <Picker.Item label='Break-In' value='Break-In' />
                                <Picker.Item label="Kidnapping/Attempted Kidnapping" value='Kidnapping' />
                                <Picker.Item label="Robbery/Attempted Robbery" value='Robbery' />
                                <Picker.Item label='Sexual Assault/Rape' value='Sexual Assault' />
                                <Picker.Item label='Shooting' value='Shooting' />
                                <Picker.Item label='Theft' value='Theft' />


                            </Picker>
                            <TextInput
                                placeholder='Report Details'
                                multiline
                                numberOfLines={8}
                                placeholderTextColor='rgba(255,255,255,0.7)'
                                returnKeyType='next'
                                style={styles.details}
                                onChangeText={handleChange('Description')}
                                onBlur={handleBlur('Description')}
                                value={values.Description}
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
        width: 250,
        flexWrap: 'wrap'
    },
    details: {
        height: 140,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'white',
        paddingHorizontal: 10,
        borderRadius: 10,
        width: 250,
        flexWrap: 'wrap',
        textAlign: 'left',
        textAlignVertical:'top'
    },
    pad: {
        marginBottom: 10,
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