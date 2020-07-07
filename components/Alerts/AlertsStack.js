import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import {StyleSheet} from 'react-native'

import BreakIn from './BreakIn'
import Alerter from './Alerter'
import Assault from './Assault'
import Kidnapping from './Kidnapping'
import Robbery from './Robbery'
import SexualAssault from './SexualAssault'
import Shooting from './Shooting'
import Theft from './Theft'
//import { createStackNavigator, createAppContainer } from '@react-navigation';

const AlertsStack = createStackNavigator();
export default class Alerted extends React.Component{
    render(){
        return(
            <NavigationContainer independent={true}>
                <AlertsStack.Navigator>
                    <AlertsStack.Screen name="Alerts" component={Alerter} options={{headerShown: false,}}/>
                    <AlertsStack.Screen name="Assault" component={Assault} options = {{title:'Aggravated Assault', headerStyle: {backgroundColor: 'steelblue'}}}/>
                    <AlertsStack.Screen name="BreakIn" component={BreakIn} options = {{title:'Break-In', headerStyle: {backgroundColor: 'steelblue'}}}/>
                    <AlertsStack.Screen name="Kidnapping" component={Kidnapping} options = {{title:'Kidnapping', headerStyle: {backgroundColor: 'steelblue'}}}/>
                    <AlertsStack.Screen name="Robbery" component={Robbery} options = {{title:'Robbery', headerStyle: {backgroundColor: 'steelblue'}}}/>
                    <AlertsStack.Screen name="SexualAssault" component={SexualAssault} options = {{title:'Sexual Assault', headerStyle: {backgroundColor: 'steelblue'}}}/>
                    <AlertsStack.Screen name="Shooting" component={Shooting} options = {{title:'Shooting', headerStyle: {backgroundColor: 'steelblue'}}}/>
                    <AlertsStack.Screen name="Theft" component={Theft} options = {{title:'Theft', headerStyle: {backgroundColor: 'steelblue'}}}/>
                </AlertsStack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'steelblue',
       padding: 50,
       flex: 1
   },
   placeIcon: {
    color: 'white',
    fontSize: 26,
  },
pad:{
    marginBottom:20,
},menu:{
    flexDirection:'row',
    position:'absolute',
    left:16,
   },
   
   user:{
       color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    fontFamily: 'righteous'
  },
  username:{
    color: '#FFF',
     fontSize: 28,
     fontWeight: 'bold',
     paddingBottom: 8,
     textAlign: 'center',
 fontFamily: 'righteous'
}, 
   
 
 });

/*

       justifyContent: 'center',
       alignItems: 'center',

   text:{
     color: 'white',
     fontSize: 30,
     marginBottom: 50,
     alignItems: 'center',
     fontFamily: 'righteous'
   },
 
*/