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
import { render } from 'react-dom';

const getFonts = () => Font.loadAsync({
  'righteous': require('./components/fonts/Righteous-Regular.ttf')
});
//const AuthStack = createStackNavigator();
//const ProfileDrawer = createDrawerNavigator();
//const ProfileStack=createStackNavigator();
const Stack=createStackNavigator();
const MenuTab=createBottomTabNavigator();

function AuthStack(){
  return(
    
          <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle:{backgroundColor:'#00008B'},
            headerTitleStyle:{fontWeight:'bold'}
          }}>
          <Stack.Screen name="Home" component={HomeScreen} options= {{ title: "Home Page"}}/>
          <Stack.Screen name="login" component={LoginScreen} options= {{ title: "Login Page"}}/>
          <Stack.Screen name="registration" component={RegistrationScreen} options={{ title : "Registation Page"}}/>
      </Stack.Navigator>
      

  );
}
function ProfileStack(){
  return(
    <Stack.Navigator initialRouteName = "Profile"
    screenOptions={{
      headerStyle:{backgroundColor:'#00008B'},
      headerTitleStyle:{fontWeight:'bold'}
    }}>
          <Stack.Screen name='Profile' component={Profile} options= {{ title: "Profile Page"}}/>
          <Stack.Screen name='Alerter' component={Alerter} options= {{ title: "Alerts"}}/>
          <Stack.Screen name='Route' component={FindRouteScreen} options= {{ title: "Routes"}}/>

        </Stack.Navigator>
  );
}

export default class App extends React.Component {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // const [islogedin , setIsLoggedin] = React.useState (true);
  // const [JWT_Token , setToken] =React.useState(null);
  constructor(props){
    super(props);
    this.state = {
      fontsLoaded : true,
      JWT_Token : null
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
      <MenuTab.Screen name="Profile" component={ProfileStack}
      options={{menuTabBarLabel:"Profile",}}/>:
      <MenuTab.Navigator initialRouteName="Home">
        <MenuTab.Screen name="Home" component={AuthStack} 
        options={{menuTabBarLabel:"Home",}}/>
        
      </MenuTab.Navigator>
  }
    </NavigationContainer>
  );
  }
  };

  /* watchman watch-del-all && react-native start --reset-cache


          <Stack.Screen name="logout" component={LogOutScreen} options= {{ title: "Logout Page"}}/>

      <MenuTab.Navigator>
        <MenuTab.Screen name="ProfileStack" component={ProfileStack}
        options={{menuTabBarLabel:"Profile",}}/>
        <MenuTab.Screen />
        <MenuTab.Screen />
        <MenuTab.Screen />
      </MenuTab.Navigator>
      */

      /*render() {
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
  };*/