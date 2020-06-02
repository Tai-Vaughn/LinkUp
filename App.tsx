import 'react-native-gesture-handler';
import LoginScreen from './components/Login/LoginScreen';
import regis from './components/CreateAccount/CreateAccountScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, Button} from 'react-native';

const AuthStack = createStackNavigator(); 



export default function App() {
  const [islogedin , setIsLoggedin] = React.useState (false);
  return (
    <NavigationContainer>
      
        {islogedin ? () : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="login" component={LoginScreen} options= {{ title: "Sign in"}}/>
          <AuthStack.Screen name="regis" component={regis} options={{ title : "Create Account"}}/>
        </AuthStack.Navigator>
        ) }
        
      
    {/* Rest of your app code */}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue', /*options: steelblue, cornflowerblue*/
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    borderRadius: 20,
  },
});


