import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import logo from './components/Images/logo.jpeg';
import LoginScreen from './components/Login/LoginScreen';

/*TO DO: call login and register js files on click onClick(<LoginScreen />);  onPress={() => setOutputText('Begin Registering!')}; onPress={() => <View> <LoginScreen /> </View>} */
class StartMenue extends React.Component{
    //const [outputText, setOutputText] = useState('');
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={logo} />
                    <Text style={styles.name}>LINK UP</Text>
                </View>

                <View style={styles.root}>
                    <Text>Login</Text>
                    <Button title="Login" />
                    <Text>Create Account</Text>
                    <Button title="Create Account" />
                   
                </View>

            </View>
        );
    }
    
}


const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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

export default StartMenue;