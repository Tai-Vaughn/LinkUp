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
                <View style={styles.text}>
                    <Text>
                        Profile Page
                    </Text>
                </View>
                <View style={styles.text}>
                    <Text >John Doe</Text>
                    <Text>jdoe</Text>
                </View>
                
                <View>
                    <Text> Menu:</Text>
                    <View style={globalStyles.button}>
                        <Button title='Map'/>
                    </View>
                    <View style={globalStyles.button}>
                        <Button title='Find Route' 
                        onPress = {() => {this.callRoute}}/>
                    </View>
                    <View style={globalStyles.button}>
                        <Button title='Alert'/>
                    </View>
                    <View style={globalStyles.button}>
                        <Button title='Friends'/>
                    </View>
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