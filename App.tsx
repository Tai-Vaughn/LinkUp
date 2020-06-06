import 'react-native-gesture-handler'; 

import {useState} from 'react';
import FindRouteScreen from './components/FindRoute/FindRouteScreen';
/*import regis from './components/FindRoute/FindRouteScreen';*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as Font from 'expo-font';
import {AppLoading} from 'expo';


const AuthStack = createStackNavigator(); 
const ProfileStack = createStackNavigator();

const getFonts = () => Font.loadAsync({
  'righteous': require('./components/fonts/Righteous-Regular.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [islogedin , setIsLoggedin] = React.useState (true);
  
  if (fontsLoaded){
    return (
      /*
      <NavigationContainer>
          <AuthStack.Screen name=" " component={FindRouteScreen}/>
      </NavigationContainer>
      */
     <FindRouteScreen/>
  );
  }

  /* watchman watch-del-all && react-native start --reset-cache */
  
  else{
    return(
    <AppLoading
    startAsync={getFonts}
    onFinish={()=> setFontsLoaded(true)}
    />
    )
  }
}
