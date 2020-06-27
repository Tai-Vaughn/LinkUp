import React from 'react'
import {View, Image, Text} from 'react-native';

export default class Profile extends React.Component {
    
    callAlerts=()=>{
        <View>
            <CriminalScreen />
        </View>

        }
    render() {
        return (
            <View>
                 <Button
                    name='Alert'
                    onPress={() => {
                        this.callAlerts();}} />
            </View>
        ); 
                    }
}