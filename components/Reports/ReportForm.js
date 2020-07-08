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
   
    type: yup.string()
        .required(),

    description: yup.string()
        .required(),
    start: yup.string()
        .required(),

    end: yup.string()
        .required(),

})


export default class ReportForm extends Component {
    constructor(props, { navigation }) {
        super(props),
            this.state = {
                type: '',
                description:'',
                start: '',
                end: ''
            }

    }

    render() {
        return (
            <ScrollView>

                <Formik
                    initialValues={{
                        type: '',
                        description:'',
                        start: '',
                        end: ''
                    }}
                   // validationSchema={ReportFormSchema}
                    onSubmit={(values, actions) => {
                        
                        actions.resetForm(); 
                        console.log(values);                       
                        this.setState({type: '',
                        description:'',
                        start: '',
                        end: ''});
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        
                        <View>
                            

                            <Picker
                                style={styles.input}
                                
                                selectedValue={this.state.type}
                                
                                onValueChange={(itemValue, itemIndex) =>this.setState({ type: itemValue })} 
                                >


                                <Picker.Item label='Type of Crime' value=''></Picker.Item>
                                <Picker.Item label='Aggravated Assault' value='aggravatedAssault' ></Picker.Item>
                                <Picker.Item label='Break-In' value='breakIn' />
                                <Picker.Item label="Kidnapping/Attempted Kidnapping" value='kidnapping' ></Picker.Item>
                                <Picker.Item label="Robbery/Attempted Robbery" value='robbery' ></Picker.Item>
                                <Picker.Item label='Sexual Assault/Rape' value='sexualAssault' ></Picker.Item>
                                <Picker.Item label='Shooting' value='shooting' ></Picker.Item>
                                <Picker.Item label='Theft' value='theft' ></Picker.Item>
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
                                onSubmitEditing={() => this.start.focus()}
                                value={values.description}
                            />
                            <TextInput
                                placeholder='Where did the incident start?'
                                placeholderTextColor='rgba(255,255,255,0.7)'
                                returnKeyType='next'
                                style={styles.input}
                                
                                onChangeText={handleChange('start')}
                                onBlur={handleBlur('start')}
                                onSubmitEditing={() => this.end.focus()}
                                value={values.start}
                            />
                            <TextInput
                                placeholder='Where did the incident end?'
                                placeholderTextColor='rgba(255,255,255,0.7)'
                                returnKeyType='next'
                                style={styles.input}
                                
                                onChangeText={handleChange('end')}
                                onBlur={handleBlur('end')}
                                value={values.end}
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