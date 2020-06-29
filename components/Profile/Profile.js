import React  from 'react';
import { View , Text, Button, StyleSheet} from 'react-native';
import FindRouteScreen from '../FindRoute/FindRouteScreen';
import {globalStyles} from '../Styles'; 

class StartMenue extends React.Component {
    callRoute(){
        new FindRouteScreen().render();
    }
    render() {
        return (
            <View style={styles.container}>
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

export default StartMenue;