import React, { useState, Component } from "react";
import { Button, View, Text,AppRegistry,StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from 'moment'
export default class Time extends Component{
    constructor(){
        super()
        this.state={
            isVisible:false,
            chosenTime:''
        }
    }
    handlePicker=(datetime)=>{
        this.setState({
            isVisible:true,
            chosenTime: moment(datetime).format('HH:mm')
        })
    }
    hidePicker=()=>{
        this.setState({
            isVisible:false
        })
    }
    showPicker=()=>{
        this.setState({
            isVisible:true
        })
    }
    render(){
        return(
            <View>
                <Text>{this.state.chosenTime}</Text>
                <TouchableOpacity onPress={this.showPicker}>
                   <Text>Select Time</Text> 
                </TouchableOpacity>
                <DateTimePicker
                isVisible={this.state.isVisible}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                mode={'time'}
                is24Hour={'false'}
                />
            </View>
        )
    }
}
/*
const Timer = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Timer;*/