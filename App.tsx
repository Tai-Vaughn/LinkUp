import React from 'react';
import MapView from 'react-native-maps'; //https://medium.com/@samil.mehdiyev/integrating-google-maps-into-react-native-app-on-android-40c984c0e4f2
import { Image, StyleSheet, TouchableHighlight, Text, View, TouchableOpacity, Button } from 'react-native';
//import StartMenue from './components/StartMenue.js';
import MapRun from './components/models/MapRun.js';
import Graph from './components/models/Graph.js'
import UsersMap from './components/models/UsersMap';
import FetchLocation from './components/models/FetchLocation';

export default function App() {
    
    /*state = {
        userLocation: null,
        usersPlaces: []
    }

    getUserLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                userLocation: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421
                }
            });
            send to database 
            fetch('API url', {
                method: 'POST',
                body: JSON.stringify({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
                
        },
            err => console.log(err)
        );

    };*/
    /*
    getUserPlacesHandler = () => {
        fetch('http url for database')
            .then(res => res.json())
            .then(parsedRes => {
                const placesArray = [];
                for (const key in parsedRes) {
                    placesArray.push({
                        latitude: parsedRes[key].latitude,
                        longitude: parsedRes[key].longitude,
                        id: key
                    });
                }
                this.setState({
                    usersPlaces:placesArray
                });
            })
            .catch(err => console.log(err));
    };*/
        return (
            <View style={styles.container}>
               
                <Graph />
                

            </View>

        );
    
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


/*place above fetch loction 
 * <View>
 <Button title="Get User Places" onPress={this.getUserPlacesHandler} />
  </View>
  <FetchLocation onGetLocation={this.getUserLocationHandler} />
  <UsersMap userLocation={this.state.userLocation} />
 * replace with <UsersMap userLocation={this.state.userLocation}
 * usersPlaces={this.state.usersPlaces}/> binds the other user places to map
 *<Graph />
 * 
 * onPressButton(){
        <Graph />
    }
 *  <Text>Opening Graph Sample</Text>
            <Button
                onPress={this.onPressButton}
                title="Graph"
                />
 *  <TouchableHighlight onPress={this.OnBUttonPress}>
                <Text>{this.state.text}</Text>
            </TouchableHighlight>
 * 
 * <UsersMap />
 * <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />*/
