import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import logo from './components/Images/logo.jpeg';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.tsx to start working on your app!');
  return (
      <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text>Start Menu</Text>
          <TouchableOpacity
              onPress={() => alert('Start')}
              style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>Map</Text>
           </TouchableOpacity>
      <Button title = "Hello world" onPress={() => setOutputText('The text has been changed!')} />
    </View>
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
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
    },
});


