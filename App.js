import 'react-native-gesture-handler';
import {useState} from 'react';

import LoginScreen from './components/Login/LoginScreen';
import RegistrationScreen from './components/CreateAccount/CreateAccountScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Profile from './components/Profile/Profile'

import * as React from 'react';
import {View, Button , Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as Font from 'expo-font';
import * as Dataservice from './components/Service/DataService';
import Alerter from './components/Alerts/Alerter';
import FindRouteScreen from './components/FindRoute/FindRouteScreen';

const getFonts = () => Font.loadAsync({
  'righteous': require('./components/fonts/Righteous-Regular.ttf')
});
const AuthStack = createStackNavigator();
const ProfileDrawer = createDrawerNavigator();

export default class App extends React.Component {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // const [islogedin , setIsLoggedin] = React.useState (true);
  // const [JWT_Token , setToken] =React.useState(null);
  constructor(props){
    super(props);
    this.state = {
      fontsLoaded : true,
      JWT_Token : true
    }
  }
  componentDidMount(){
    getFonts();
    Dataservice.token$.subscribe(data =>this.setState({JWT_Token: data}))
    Dataservice.getGroups()
  }

  stateHelper(){
    this.setState({JWT_Token: 'yes'})
  }

  render() {
  return (
    <NavigationContainer>
      {this.state.JWT_Token ?
        <ProfileDrawer.Navigator initialRouteName = "Profile">
          <ProfileDrawer.Screen name='Profile' component={Profile}/>
          <ProfileDrawer.Screen name='Alerter' component={Alerter}/>
          <ProfileDrawer.Screen name='Route' component={FindRouteScreen}/>

        </ProfileDrawer.Navigator> :
      <AuthStack.Navigator>
          <AuthStack.Screen name=" " component={HomeScreen}/>
          <AuthStack.Screen name="login" component={LoginScreen} options= {{ title: ""}}/>
          <AuthStack.Screen name="registration" component={RegistrationScreen} options={{ title : ""}}/>
      </AuthStack.Navigator>
      }

    </NavigationContainer>
  );
  }
  };

  /* watchman watch-del-all && react-native start --reset-cache


      <MenuTab.Navigator>
        <MenuTab.Screen name="ProfileStack" component={ProfileStack}
        options={{menuTabBarLabel:"Profile",}}/>
        <MenuTab.Screen />
        <MenuTab.Screen />
        <MenuTab.Screen />
      </MenuTab.Navigator>
      */
