import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import logo from './components/Images/logo.jpeg';
/*TO DO: call login and register js files on click*/
export default function App() {
    const [outputText, setOutputText] = useState('LINK UP');
    return (
        <View style={styles.screen}>
            <View style={{ padding: 10 } }>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.root}>  
              <Text>LINK UP</Text>
              <Button title="Login" onClick={login} onPress={() => setOutputText('Begin Login!')} />  
              <Button title="Create Account" onClick={register} onPress={() => setOutputText('Begin Registering!')} />
              <TouchableOpacity
                  onPress={() => alert('Start')}
                  style={{ backgroundColor: 'blue' }}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>Map</Text>
              </TouchableOpacity>
              
          </View>
           
       </View>
  );
}

const styles = StyleSheet.create({
    screen: { padding: 30 },
    root: { flexDirection="row", justifyContent="space-between", alignItems="center" },
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


