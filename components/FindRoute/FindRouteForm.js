import React, {Component} from 'react';
import {globalStyles} from '../Styles';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {Formik} from 'formik';

class FindRouteForm extends React.Component{
    render(){
        return (
            <View style={globalStyles.container}>
                <Formik
                initialValues={{origin: '', destination: '', group: '', size: ''}}
                onSubmit={(values) => {
                    console.log(values);
                }}
                >
                {(props) => (
                    <View>
                        <TextInput 
                        placeholder='Origin'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('origin')}
                        value={props.values.origin}
                        onSubmitEditing={() => this.destinationInput.focus()}
                        />
                
                        <TextInput 
                        placeholder='Destination'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('destination')}
                        value={props.values.destination}
                        onSubmitEditing={() => this.placeholderInput.focus()}
                        ref={(input) => this.destinationInput = input}
                        />

                        <TextInput 
                        placeholder='Would you like to travel with a group?'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('group')}
                        value={props.values.group}
                        onSubmitEditing={() => this.sizeInput.focus()}
                        ref={(input) => this.placeholderInput = input}
                        />

                        <TextInput 
                        placeholder='Minimum Group Size'
                        returnKeyType='next'
                        keyboardType='numeric'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('size')}
                        value={props.values.size}
                        ref={(input) => this.sizeInput = input}
                        />

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

export default FindRouteForm;