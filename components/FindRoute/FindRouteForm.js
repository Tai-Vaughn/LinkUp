import React, {Component} from 'react';
import {globalStyles} from '../Styles';
import {View, TextInput, Button, ActionSheetIOS,
    TouchableWithoutFeedback, Keyboard, Text} from 'react-native';

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

    Group: yup.string()
    .required()
    .max(3),

    Size: yup.string()
    .required()
    .test('is-num-higher-than-4', 'You must choose a group size of at least 4 persons (including yourself)', (val) => {
        return parseInt(val) >= 4;
    }),
})

class FindRouteForm extends React.Component{
    render(){
        return (
            <ScrollView>
            <View style={globalStyles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Formik
                initialValues={{Origin: '', Destination: '', Group: '', Size: ''}}
                validationSchema={FindRouteSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                }}
                >

                {(props) => (
                    <View>
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

                        <TextInput 
                        placeholder='Would you like to travel with a Group?'
                        returnKeyType='next'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('Group')}
                        value={props.values.Group}
                        onSubmitEditing={() => this.SizeInput.focus()}
                        ref={(input) => this.placeholderInput = input}
                        onBlur={props.handleBlur('Group')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Group && props.errors.Group}</Text>

                        <TextInput 
                        placeholder='Minimum Group Size'
                        returnKeyType='next'
                        keyboardType='numeric'
                        style={globalStyles.input}
                        onChangeText={props.handleChange('Size')}
                        value={props.values.Size}
                        ref={(input) => this.SizeInput = input}
                        onBlur={props.handleBlur('Size')}
                        />
                        <Text style={globalStyles.errorMessage}> {props.touched.Size && props.errors.Size}</Text>

                        <View style={globalStyles.button}>
                            <Button 
                            title='Submit' 
                            onPress={props.handleSubmit}
                            />
                        </View>
                    </View>
                )}
                </Formik>
                </TouchableWithoutFeedback>
            </View>
            </ScrollView>
        )
    }
}

export default FindRouteForm;