import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    setTime = (event, date) => {
        if (date !== undefined) {
            
          // Use the hour and minute from the date object
        }
      };
      <RNDateTimePicker mode="time" onChange={this.setTime} />;
  }

  render(){
    return (
        <View>
            <View>
        <Button onPress={showTimepicker} title="Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
        
      
    )
  }
}
/*<DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="time"
        placeholder="select time"
        is24Hour="false"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          
        }}
        onOpenModal
        onPressDate
        onDateChange={(date) => {this.setState({date: date})}}
      />*/