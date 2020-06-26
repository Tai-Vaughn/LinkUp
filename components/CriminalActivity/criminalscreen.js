import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';

import {globalStyles} from '../Styles'; 

class CriminalScreen extends React.Component{
    assaultHandler=()=>{
        
    }
  render(){
      return (
        <ScrollView>
          <View style={globalStyles.container}>

          <View style={globalStyles.logoContainer}>
            <Image 
            style={globalStyles.logo}
            source={require('../../static/LinkUp.png')}/>
            <Text style={globalStyles.name}>RECENT CRIMINAL ACTIVITY</Text>
          </View>  

          <View>
              <Button title='Aggravated Assault' onPress={this.assaultHandler}/>
              <Button title='Break-In'/>
              <Button title='Kidnapping/Attempted Kidnapping'/>
              <Button title='Robbery/Attempted Robbery'/>
              <Button title='Sexual Assault/Rape'/>
              <Button title='Shooting'/>
              <Button title='Theft'/>
          </View>
          
          </View>
          </ScrollView>
      )
  }
}

export default CriminalScreen;
/*<Text>Aggravated Assault</Text>
              <Text>Break-In</Text>
              <Text>Kidnapping/Attempted Kidnapping</Text>
              <Text>Robbery/Attempted Robbery</Text>
              <Text>Sexual Assault/Rape</Text>
              <Text>Shooting</Text>
              <Text>Theft</Text>*/