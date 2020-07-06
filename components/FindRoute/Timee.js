/*Gets Current Time in 12 hours format AM PM*/
import React, { Component } from 'react';

import { Text, View } from 'react-native';

import moment from 'moment';
//import moment to help you play with date and time

export default class Timee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the time
      time: '',
    };
  }
  componentDidMount() {
    var that = this;

    //Getting the current date-time with required format  
    var date = moment()
      .format('YYYY-MM-DD hh:mm a');

    that.setState({ time: date });
    //Settign up time to show
  }

  render() {
    console.log(this.state.totalDuration);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>{this.state.time}</Text>
      </View>
    );
  }
}
