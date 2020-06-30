import React  from 'react';
import { View , Text, Image, StyleSheet} from 'react-native';
import {globalStyles} from '../Styles'; 


class Alerter extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={globalStyles.logoContainer}>
                <Image 
                style={globalStyles.logo}
                source={require('../../static/LinkUp.png')}/>
                <Text style={styles.text}>RECENT CRIMINAL ACTIVITY</Text>
            </View> 
            <View>
                <Button title='Aggravated Assault' onPress={this.assaultHandler}/>
                <Button title='Break-In'onPress={this.breakHandler}/>
                <Button title='Kidnapping/Attempted Kidnapping'onPress={this.kidnapHandler}/>
                <Button title='Robbery/Attempted Robbery'onPress={this.robHandler}/>
                <Button title='Sexual Assault/Rape'onPress={this.saHandler}/>
                <Button title='Shooting'onPress={this.shootHandler}/>
                <Button title='Theft'onPress={this.theftHandler}/>
            </View> 
            </View>
        ); 
    }
}
const styles = StyleSheet.create({
    container: {
       backgroundColor: 'steelblue',
       padding: 50,
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1
   },
 
   text:{
     color: 'white',
     fontSize: 40,
     marginBottom: 90,
     fontFamily: 'righteous'
   }
 
 });
export default Alerter;