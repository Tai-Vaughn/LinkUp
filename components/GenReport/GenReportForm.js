import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

/* 
Time/Date source code was copied from a github repo linked on React Native's website: 
https://github.com/react-native-community/datetimepicker
*/

const GenReportForm = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate= (event, date) => {};
    };
  
    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };   
  
  return (
    <ScrollView>
        <View>
                <TouchableOpacity style={styles.pickerContainer}>
                    <Text style={styles.pickerText} onPress={showDatepicker}>
                        Date
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.pickerContainer}>
                    <Text style={styles.pickerText} onPress={showTimepicker}>
                        Time
                    </Text>
                </TouchableOpacity>

            {show && (
            <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={false}
                display="spinner"
                onChange={onChange}
            />
            )}

            <TextInput 
                placeholder='Where did the incident occur?'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TextInput 
                placeholder='What was the type of crime committed?'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TextInput 
                placeholder='Report Details'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                style={styles.input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
           
            </View>
            </ScrollView>
        );
    };

const styles = StyleSheet.create({
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'gray',
        paddingHorizontal: 10,
        borderRadius: 10,  
        width: 300,
        flexWrap: 'wrap'
    },

    buttonContainer:{
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        paddingVertical: 10,
        width: 150,
        alignItems: 'center',
        marginTop: 50
    },

    buttonText:{
        width: 200,
        textAlign: 'center',
        fontWeight: '700'
    },

    pickerContainer:{
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        paddingVertical: 10,
        width: 120,
        textAlign: 'right',
        marginBottom: 20
    },

    pickerText:{
        width: 200,
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)'
    }

});
 
  export default GenReportForm;
