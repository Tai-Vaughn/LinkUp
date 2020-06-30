import React  from 'react';
import { View , Text} from 'react-native';
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
            </View>
        ); 
    }
}

export default Alerter;