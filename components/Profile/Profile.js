import React  from 'react';
import { View , Text, Button} from 'react-native';
import FindRouteScreen from '../FindRoute/FindRouteScreen';

class StartMenue extends React.Component {
    callRoute(){
        <View>
            <FindRouteScreen />
        </View>
    }
    render() {
        return (
            <View>
                <Text>
                    Profile Page
                </Text>
                <Text>John Doe</Text>
                <Text>jdoe</Text>
                <View>
                    <Text> Menu:</Text>
                    <Button title='Map'/>
                    <Button title='Find Route' onPress={() =>{this.callRoute();}}/>
                    <Button title='Alert'/>
                    <Button title='Friends'/>
                </View>
            </View>
        ); 
    }
}

export default StartMenue;