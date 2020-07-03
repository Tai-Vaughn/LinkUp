import 'react-native-gesture-handler';
import {useState} from 'react';

import LoginScreen from './components/Login/LoginScreen';
import RegistrationScreen from './components/CreateAccount/CreateAccountScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Profile from './components/Profile/Profile';
import LogOut from './components/LogOut/Logout';

import * as React from 'react';
import {View, Button , Text, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as Font from 'expo-font';
import * as Dataservice from './components/Service/DataService';
import Alerter from './components/Alerts/Alerter';
import FindRouteScreen from './components/FindRoute/FindRouteScreen';
import Group from './components/Group/Group';

const getFonts = () => Font.loadAsync({
  'righteous': require('./components/fonts/Righteous-Regular.ttf')
});
const AuthStack = createStackNavigator();
const ProfileDrawer = createDrawerNavigator();

const CustomDrawerComponent = ()=>{
  <View style={{flex:1, height:150,backgroundColor:"white", alignItems:"center", justifyContent:"center"}}>
    <Image source={require('./static/profileicon.png')} style={{height:120, width:120, borderRadius:60}}/>
  </View>
}

export default class App extends React.Component {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // const [islogedin , setIsLoggedin] = React.useState (true);
  // const [JWT_Token , setToken] =React.useState(null);
  constructor(props){
    super(props);
    this.state = {
      fontsLoaded : true,
      JWT_Token : null,
      markers: null,
    };
  }
  
  componentDidMount(){
    getFonts();
    Dataservice.getMarkers()
    Dataservice.token$.subscribe(data =>this.setState({JWT_Token: data}))
  }

  stateHelper(){
    this.setState({JWT_Token: 'yes'})
  }

  render() {
  return (
    <NavigationContainer>
      {this.state.JWT_Token ?
        <ProfileDrawer.Navigator initialRouteName = "Profile">
          <ProfileDrawer.Screen name='Profile' component={Profile} options= {{title: "Profile",}}/>
          <ProfileDrawer.Screen name='Alerter' component={Alerter} options= {{title: "Alerts",}}/>
          <ProfileDrawer.Screen name='Route' component={FindRouteScreen} options= {{title: "Journey",}}/>
          <ProfileDrawer.Screen name='Group' component={Group} options= {{title: "Group",}}/>
          <ProfileDrawer.Screen name='LogOut' component={LogOut} options= {{title: "LogOut",}}/>
        
        </ProfileDrawer.Navigator> :
      <AuthStack.Navigator screenOptions= {{
        headerShown: false, }}>
          <AuthStack.Screen name=" " component={HomeScreen}/>
          <AuthStack.Screen name="login" component={LoginScreen} />
          <AuthStack.Screen name="registration" component={RegistrationScreen}/>
      </AuthStack.Navigator>
      }

    </NavigationContainer>
  );
  }
  };

  /* watchman watch-del-all && react-native start --reset-cache
     
      */
