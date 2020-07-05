import React from 'react';
import {View, Image, Text, ScrollView, StyleSheet, Button} from 'react-native';
import {globalStyles} from '../Styles'; 
import * as DataService from '../Service/DataService';

export default class LogOut extends React.Component {

    LogOut() {
      DataService.LogOut()
    }
        
    render(){
      return (
          <ScrollView>
            <View style={styles.container}>

            <View style={globalStyles.logoContainer}>
              <Image 
              style={globalStyles.logo}
              source={require('../../static/LinkUp.png')}/>
              <Text style={globalStyles.name}>LINK UP</Text>
              <Button title="Log Out" onPress={() => this.LogOut()}/>
              
            </View>

            </View>
            </ScrollView>
        )
    }
    
    }

const styles = StyleSheet.create({
      container: {
          backgroundColor: 'steelblue',
          flex: 1,
          padding: 100
      }
});
