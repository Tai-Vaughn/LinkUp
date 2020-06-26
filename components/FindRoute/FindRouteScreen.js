import React from 'react';
import {View, Button, Picker, Text} from 'react-native';
import {globalStyles} from '../Styles'

// import * as DataService from '../Service/DataService';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';

// import * as yup from 'yup';
// import { map } from 'rxjs/operators';

class FindRouteScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            PickerValue:'',
            PickerValue2:'',
            PickerValue3:'',
            PickerValue4:'',
            Markers: []
        }
    }
    // setMarkers = () => {
        
    // }

    // componentDidMount(){
    //     DataService.getMarkers();
    //     DataService.markers$.subscribe((data) => this.state.Markers = data)
    // }

    render(){
      return (
          <View style={globalStyles.container}> 
            <ScrollView>
            <Text style={globalStyles.text}>Find Route</Text>
            
            <Formik
                  onSubmit={(values, actions) => {
                      actions.resetForm();
                      console.log(values);
                  }}
                  >      
            
            {(props) => (
                    <View style={globalStyles.test}>
                        
                        {/* currently unable to choose one  */}
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
                        selectedValue={this.state.PickerValue2}
                        onValueChange={(itemValue,itemIndex) => this.setState({PickerValue2: itemValue})}
                        >
                            <Picker.Item label='Group Size (including yourself)' value=''/>
                            <Picker.Item label='4' value='Four'/>
                            <Picker.Item label='5' value='Five'/>
                            <Picker.Item label='6' value='Six'/>
                            <Picker.Item label='7' value='Seven'/>
                            <Picker.Item label='8' value='Eight'/>
                            <Picker.Item label='9' value='Nine'/>
                            <Picker.Item label='10' value='Ten'/>
                            <Picker.Item label='11' value='Eleven'/>
                            <Picker.Item label='12' value='Twelve'/>
                            <Picker.Item label='13' value='Thirteen'/>
                            <Picker.Item label='14' value='Fourteen'/>
                            <Picker.Item label='15' value='Fifteen'/>
                            <Picker.Item label='16' value='Sixteen'/>
                            <Picker.Item label='17' value='Seventeen'/>
                            <Picker.Item label='18' value='Eighteen'/>
                            <Picker.Item label='19' value='Nineteen'/>
                            <Picker.Item label='20' value='Twenty'/>
                        </Picker>

                        <Picker
                        style={{width:'120%'}}
                        selectedValue={this.state.PickerValue3}
                        onValueChange={(itemValue) => this.setState({PickerValue3: itemValue})}
                        >
                            <Picker.Item label='Origin' value=''/>
                            <Picker.Item label='138 Student Living (Phase 1)' value='138 Phase 1'/>
                            <Picker.Item label='138 Student Living (Phase 2)' value='138 Phase 2'/>
                            <Picker.Item label= "Students' Union" value='Unione'/>
                            <Picker.Item label="Faculty of Medical Sciences Teaching and Research Complex" value='Med'/>
                            <Picker.Item label='Faculty of Law' value='Law'/>
                            <Picker.Item label='Faculty of Science and Technology' value='Sci Tech'/>
                            <Picker.Item label='Faculty of Humanities' value='Humanities'/>
                            <Picker.Item label='Mona School of Business and Management' value='MSBM'/>
                            <Picker.Item label='Other Halls' value='etc'/>
                            

                        </Picker>

                        <Picker
                        style={{width:'120%'}}
                        selectedValue={this.state.PickerValue4}
                        onValueChange={(itemValue) => this.setState({PickerValue4: itemValue})}
                        >
                            <Picker.Item label='Destination' value=''/>
                            <Picker.Item label='138 Student Living (Phase 1)' value='138 Phase 1'/>
                            <Picker.Item label='138 Student Living (Phase 2)' value='138 Phase 2'/>
                            <Picker.Item label= "Students' Union" value='Unione'/>
                            <Picker.Item label="Faculty of Medical Sciences Teaching and Research Complex" value='Med'/>
                            <Picker.Item label='Faculty of Law' value='Law'/>
                            <Picker.Item label='Faculty of Science and Technology' value='Sci Tech'/>
                            <Picker.Item label='Faculty of Humanities' value='Humanities'/>
                            <Picker.Item label='Mona School of Business and Management' value='MSBM'/>
                            <Picker.Item label='Other Halls' value='etc'/>
                        </Picker>
                        
                        <View style={globalStyles.button}>
                            <Button 
                            title='Submit' 
                            onPress={props.handleSubmit}
                            />
                        </View>
                        
                    </View>
                )}
                </Formik>
                </ScrollView>
            </View>
        )
    }
}

export default FindRouteScreen;