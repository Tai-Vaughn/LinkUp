import React  from 'react';
import { View , Text} from 'react-native';
import {globalStyles} from '../Styles'; 

class Alert extends React.Component {
    render() {
        return (
            <View>
                <Text style={globalStyles.name}>RECENT CRIMINAL ACTIVITY</Text>
            </View>
        ); 
    }
}

export default Alert;