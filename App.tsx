import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
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


