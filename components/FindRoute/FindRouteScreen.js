import React from 'react';
import {View, TextInput, Button, Picker, Text} from 'react-native';
import {globalStyles} from '../Styles'
import * as DataService from '../Service/DataService';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';
import { map } from 'rxjs/operators';


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

class FindRouteScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            PickerValue:'',
            Markers: []
        }
    }
    setMarkers = () => {
        
    }

    componentDidMount(){
        DataService.getMarkers();
        DataService.markers$.subscribe((data) => this.state.Markers = data)
    }
    render(){
      return (
     
          <View style={globalStyles.container}> 
            
            <Text style={globalStyles.text}>Find Route</Text>
            
            <Formik
                  initialValues={{Origin: '', Destination: '', Size: ''}}
                  validationSchema={FindRouteSchema}
                  onSubmit={(values, actions) => {
                      actions.resetForm();
                      console.log(values);
                  }}
                  >
                    
            
            {(props) => (
                    <View style={globalStyles.test}>
                        <Picker
                        style={{width:'120%'}}
                        selectedValue={this.state.PickerValue}
                        onValueChange={(itemValue) => this.setState({PickerValue: itemValue})}
                        >
                            <Picker.Item label='Would you like to travel with a group?' value=''/>
                            <Picker.Item label='Yes' value='yes'/>
                            <Picker.Item label='No' value='no'/>
                        </Picker>

                        <Picker
                        style={{width:'120%'}}
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
        
        )
    }
}

export default FindRouteScreen;