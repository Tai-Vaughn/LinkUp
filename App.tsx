import 'react-native-gesture-handler';
import {useState} from 'react';

import LoginScreen from './components/Login/LoginScreen';
import regis from './components/CreateAccount/CreateAccountScreen';
import HomeScreen from './components/HomeScreen/HomeScreen'

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const getFonts = () => Font.loadAsync({
  'righteous': require('./components/fonts/Righteous-Regular.ttf')
});
const AuthStack = createStackNavigator(); 
const ProfileStack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [islogedin , setIsLoggedin] = React.useState (true);
  const [JWT_Token , setToken] =React.useState(null);
  
  if (fontsLoaded){
  return (
    <NavigationContainer>
        {}
      <AuthStack.Navigator>
          <AuthStack.Screen name=" " component={HomeScreen}/>
          <AuthStack.Screen name="login" component={LoginScreen} options= {{ title: ""}}/>
          <AuthStack.Screen name="registration" component={regis} options={{ title : ""}}/>
        </AuthStack.Navigator>  
   
  </NavigationContainer>
  );
  }

  else{
    return(
    <AppLoading
    startAsync={getFonts}
    onFinish={()=> setFontsLoaded(true)}
    />
    )
  }
  };

  /* watchman watch-del-all && react-native start --reset-cache */
  

