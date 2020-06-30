import React  from 'react';
import { View , Text, Image, StyleSheet} from 'react-native';
import {globalStyles} from '../Styles'; 


class Alerter extends React.Component{
    render() {
        return (
            <View>
                <View style={globalStyles.logoContainer}>
                <Image 
                style={globalStyles.logo}
                source={require('../../static/LinkUp.png')}/>
                <Text style={globalStyles.name}>RECENT CRIMINAL ACTIVITY</Text>
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

export default Alerter;