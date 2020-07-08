import React, { useState } from 'react';
import { View, AsyncStorage, Button, Picker, Text, StyleSheet} from 'react-native';
import { globalStyles } from '../Styles';
import MyDatePicker from './DatePicker';
//import DatePicker from 'react-native-datepicker';
//import DateTimePicker from '@react-native-community/datetimepicker';

import { Icon } from 'react-native-elements';

// import FixedBottom from './FixedBottom';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import Timer from './Timer';
import Timee from './Timee';

// import * as DataService from '../Service/DataService';
// import * as yup from 'yup';
// import { map } from 'rxjs/operators';

class FindRouteScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GroupName:'',
            PickerValue2: '',
            PickerValue3: '',
            PickerValue4: '',
            Time: '',
            Markers: []
        }
    }


    // setMarkers = () => {

    // }

    // componentDidMount(){
    //     DataService.getMarkers();
    //     DataService.markers$.subscribe((data) => this.state.Markers = data)
    // }



    render() {
        //Error: can't find variable pickerOptionText

        //     pickerOptionText = () => {
        //         if (this.PickerValue==='no') {
        //           return (
        //             <Text>it works</Text>
        //           );
        //         }else {
        //           return (
        //             <Text>it does not work</Text>
        //           );
        //         }
        //         // return null;
        //       }

        return (
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.menu}>
                        <Icon name='menu'
                            underlayColor="transparent"
                            size={28}
                            iconStyle={styles.placeIcon}
                            onPress={() => this.props.navigation.toggleDrawer()} />
                    </View>
                    <Text style={globalStyles.text}>Plan Journey</Text>

                    <Formik
                    initialValues={{
                        GroupName:'',
                        PickerValue2: '',
                        PickerValue3: '',
                        PickerValue4: '',
                        Time: ''
                    }}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                            this.setState({
                                GroupName:'',
                            PickerValue2: '',
                            PickerValue3: '',
                            PickerValue4: '',
                            Time: ''})
                        }}
                    >

                        {(props) => (
                            <View>
                                <TextInput
                                placeholder='Group Name'
                                placeholderTextColor='black'
                                returnKeyType='next'
                                style={styles.input}
                                onChangeText={props.handleChange('GroupName')}
                                value={props.values.GroupName}
                            />

                                <Picker
                                    selectedValue={this.state.PickerValue2}
                                    onValueChange={(itemValue, itemIndex) =>this.setState({ PickerValue2: itemValue })} 
                                >
                                    <Picker.Item label='Group Size (Must be 4 or higher)' value='' />
                                    
                                    <Picker.Item label='4' value='Four' />
                                    <Picker.Item label='5' value='Five' />
                                    <Picker.Item label='6' value='Six' />
                                    <Picker.Item label='7' value='Seven' />
                                    <Picker.Item label='8' value='Eight' />
                                    <Picker.Item label='9' value='Nine' />
                                    <Picker.Item label='10' value='Ten' />
                                    <Picker.Item label='11' value='Eleven' />
                                    <Picker.Item label='12' value='Twelve' />
                                    <Picker.Item label='13' value='Thirteen' />
                                    <Picker.Item label='14' value='Fourteen' />
                                    <Picker.Item label='15' value='Fifteen' />
                                    <Picker.Item label='16' value='Sixteen' />
                                    <Picker.Item label='17' value='Seventeen' />
                                    <Picker.Item label='18' value='Eighteen' />
                                    <Picker.Item label='19' value='Nineteen' />
                                    <Picker.Item label='20' value='Twenty' />
                                </Picker>



                                <Picker
                                    selectedValue={this.state.PickerValue3}
                                    onValueChange={(itemValue) => this.setState({ PickerValue3: itemValue })}
                                >
                                    <Picker.Item label='Origin' value='' />
                                    <Picker.Item label='138 Student Living (Phase 1)' value='138 Phase 1' />
                                    <Picker.Item label='138 Student Living (Phase 2)' value='138 Phase 2' />
                                    <Picker.Item label="Students' Union" value='Union' />
                                    <Picker.Item label="Faculty of Medical Sciences" value='Med' />
                                    <Picker.Item label='Faculty of Law' value='Law' />
                                    <Picker.Item label='Faculty of Science and Technology' value='Sci Tech' />
                                    <Picker.Item label='Faculty of Humanities' value='Humanities' />
                                    <Picker.Item label='Mona School of Business and Management' value='MSBM' />
                                    <Picker.Item label='Other Halls' value='etc' />


                                </Picker>

                                <Picker
                                    selectedValue={this.state.PickerValue4}
                                    onValueChange={(itemValue) => this.setState({ PickerValue4: itemValue })}
                                    
                                >
                                    <Picker.Item label='Destination' value='' />
                                    <Picker.Item label='138 Student Living (Phase 1)' value='138 Phase 1' />
                                    <Picker.Item label='138 Student Living (Phase 2)' value='138 Phase 2' />
                                    <Picker.Item label="Students' Union" value='Unione' />
                                    <Picker.Item label="Faculty of Medical Sciences" value='Med' />
                                    <Picker.Item label='Faculty of Law' value='Law' />
                                    <Picker.Item label='Faculty of Science and Technology' value='Sci Tech' />
                                    <Picker.Item label='Faculty of Humanities' value='Humanities' />
                                    <Picker.Item label='Mona School of Business and Management' value='MSBM' />
                                    <Picker.Item label='Other Halls' value='etc' />
                                </Picker>
                                <TextInput
                                placeholder='Departure Time, [HH:mm]'
                                placeholderTextColor='black'
                                returnKeyType='next'
                                style={styles.input}
                                onChangeText={props.handleChange('Time')}
                                value={props.values.Time}
                            />
                                <Text style={styles.pad}></Text>


                                <View style={globalStyles.button}>
                                    <Button
                                        title='Submit'
                                        onPress={props.handleSubmit}
                                    />
                                </View>

                                {/*Error -> Invariant Violation:
                        The title prop of a Button must be a string 

                        <FixedBottom>
                            <Button
                            mode = "contained"
                            onPress={() => navigation.naviagate('ListingSwap', {with: userImg})}>
                                Let's swap
                            </Button>
                        </FixedBottom> */}

                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'steelblue',
        padding: 10,
        flex: 1
    },
    placeIcon: {
        color: 'white',
        fontSize: 28,
    },
    menu: {
        flexDirection: 'row',
        position: 'relative',
        left: 16,
        top:20,
    },
    pad:{
        marginBottom:20,
    },
    input: {
        height: 25,
        backgroundColor: 'steelblue',
        paddingHorizontal: 10,
        width: "100%",
        flexWrap: 'wrap',
        marginTop:1,
        fontWeight:'bold',
        fontSize: 12
    }

});

export default FindRouteScreen;
