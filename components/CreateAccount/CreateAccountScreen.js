import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import CreateAccountForm from './CreateAccountForm';
import {globalStyles} from '../Styles'; 

class CreateAccountScreen extends React.Component{
  render(){
      return (
        <ScrollView>
          <View style={globalStyles.container}>

          <View style={globalStyles.logoContainer}>
            <Image 
            style={globalStyles.logo}
            source={require('../../static/LinkUp.png')}/>
            <Text style={globalStyles.name}>LINK UP</Text>
          </View>  

          <View>
            <CreateAccountForm/>
          </View>
          
          </View>
          </ScrollView>
      )
  }
}

export default CreateAccountScreen;