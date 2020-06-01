import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import logo from './components/Images/logo.jpeg';
//import LoginScreen from './components/LoginScreen';
/*TO DO: call login and register js files on click onClick(<LoginScreen />)*/
export default function App() {
    const [outputText, setOutputText] = useState('App.tsx');
    return (
        <View style={styles.containers}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={logo} />
                <Text style={styles.name}>LINK UP</Text>
            </View>  

            <View style={styles.root}>
                <Text> Login</Text>
                
              <Button title="Login" onPress={() => setOutputText('Begin Login!')} />  
                <Text> Create Account</Text>
                <Button title="Create Account" onPress={() => setOutputText('Begin Registering!')} />
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
    root: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    containers: {
    flex: 1,
    backgroundColor: 'steelblue', 
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    borderRadius: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'steelblue',/*options: steelblue, cornflowerblue*/
        padding: 100
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    name: {
        textAlign: 'center',
        color: 'white',
        flex: 1,
        fontSize: 40,
        marginTop: 10
    },
});


