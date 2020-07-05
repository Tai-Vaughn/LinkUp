//This is an example code to get DatePicker// 
import React, { Component } from 'react';
//import react in our code. 
import {View, StyleSheet} from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:"08-07-2020"}
  }

  render(){
    return (
      <View style={styles.container}>

        <DatePicker
          style={{width: 200}}
          date={this.state.date} //initial date from state
          mode="datetime" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'relative',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />

      </View>
    )
  }
}
const styles = StyleSheet.create ({
 container: {
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginBottom: 10,
  color: 'gray',
  paddingHorizontal: 10,
  borderRadius: 10,
  width: 300,
  flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 30,
    padding:16
 }
})