import React, {Component} from 'react';
import {globalStyles} from '../Styles';
import {View, TextInput, Button, Picker, Text, StyleSheet} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

import {Formik} from 'formik';
import * as yup from 'yup';

/*keyboard does not dismiss*/

const FindRouteSchema = yup.object({
   /* this is just until the database become linked with this screen */
    Origin: yup.string()
    .required(),

    Destination: yup.string()
    .required(),

    Size: yup.string()
    .required()
    .test('is-num-higher-than-4', 'You must choose a group size of at least 4 persons (including yourself)', (val) => {
        return parseInt(val) >= 4;
    }),
})

class FindRouteForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            PickerValue:''
        }
    }
    
    render(){
        return (
            <ScrollView>
            <View style={globalStyles.container}>
                <Formik
                initialValues={{Origin: '', Destination: '', Size: ''}}
                validationSchema={FindRouteSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                }}
                >

                {(props) => (
                    <View>
                        <Picker
                        style={{width:'80000%'}}
                        selectedValue={this.state.PickerValue}
                        onValueChange={(itemValue) => this.setState({PickerValue: itemValue})}
                        >
                            <Picker.Item label='Would you like to travel with a group?' value=''/>
                            <Picker.Item label='Yes' value='yes'/>
                            <Picker.Item label='No' value='no'/>
                        </Picker>

                        <Picker
                        style={{width:'80000%'}}
                        selectedValue={this.state.PickerValue}
                        onValueChange={(itemValue,itemIndex) => this.setState({PickerValue: itemValue})}
                        >
                            <Picker.Item label='Group Size (including yourself)' value=''/>
                            <Picker.Item label='4' value='4'/>
                            <Picker.Item label='5' value='5'/>
                        </Picker>
                        
                        <TextInput 
                        placeholder='Origin'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('Origin')}
                        value={props.values.Origin}
                        onSubmitEditing={() => this.DestinationInput.focus()}
                        onBlur={props.handleBlur('Origin')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Origin && props.errors.Origin} </Text>

                        <TextInput 
                        placeholder='Destination'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('Destination')}
                        value={props.values.Destination}
                        onSubmitEditing={() => this.placeholderInput.focus()}
                        ref={(input) => this.DestinationInput = input}
                        onBlur={props.handleBlur('Destination')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Destination && props.errors.Destination}</Text>

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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1
    }
});

export default FindRouteForm;