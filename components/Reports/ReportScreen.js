import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ReportForm from './ReportForm';
import { Icon } from 'react-native-elements';

class GenReportScreen extends React.Component{
  render(){
      return (
       
          <View style={styles.container}>
             <View style={styles.menu}>
                        <Icon name='menu'
                            underlayColor="transparent"
                            size={28}
                            iconStyle={styles.placeIcon}
                            onPress={() => this.props.navigation.toggleDrawer()} />
                    </View> 
            <ScrollView>
            
              <Text style={styles.text}>Make a Report</Text>
              <Text style={styles.textDetails}>If you or someone you know has been attacked or 
                you happened to witness one and wish to report it, fill out the fields below. 
                If you do not see the location in the prescribed menu, ensure to include it in your 
                report details.
              </Text>
              <ReportForm/>
            </ScrollView>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'steelblue',
      padding: 40,
      alignItems: 'center',
      flex: 1
  },

  text:{
    color:'white',
    fontSize: 35,
    textAlign:'justify',
    width: 300,
    textAlign: 'center',
    borderColor: 'white',
    marginBottom: 10
  },
  placeIcon: {
    color: 'white',
    fontSize: 28,
},
menu: {
    flexDirection: 'row',
    position: 'relative',
    left: 16,
},

  textDetails:{
    color:'white',
    justifyContent:'flex-start',
    marginBottom: 10,
    width: 300
  }

});

export default GenReportScreen;