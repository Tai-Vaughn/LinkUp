import React  from 'react';
import { View , Text} from 'react-native';
import {globalStyles} from '../Styles'; 
import { createStackNavigator, createAppContainer } from '@react-navigation';

class Alert extends React.Component{
    render() {
        return (
            <View>
                <Text style={globalStyles.name}>RECENT CRIMINAL ACTIVITY</Text>
            </View>
        ); 
    }
}

export default Alert;