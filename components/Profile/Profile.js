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
            <View style={styles.container}>
                <Text style={styles.text}>Profile Page</Text>
                <View>
                    <Text>{firstname} {lastname}</Text>
                </View>
                <View >
                <Image source={require('../../static/LinkUp.png')}/>
                </View>
                <View>
                    <Text>{username}</Text>
                </View>
                <Text>Menu:</Text>
                <View style={globalStyles.button}>
                    <Button
                        title='Map'
                    />
                </View>

                <View style={globalStyles.button}>
                    <Button
                        title='Find Route'
        
                    />
                </View>
                <View style={globalStyles.button}>
                    <Button
                        title='Friends'
        
                    />
                </View>
                <View style={globalStyles.button}>
                <Button
                    name='Alert'
                    onPress={() => {
                        this.callAlerts();}} />
                </View>
                
            </View>
        ); 
    }
}
