import 'react-native-gesture-handler';
import login from './components/Login/LoginScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View, Button} from 'react-native';


const Stack = createStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login}/>
      </Stack.Navigator>
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


