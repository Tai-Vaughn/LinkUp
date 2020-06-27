import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import ViewGroups from '../Nearby/viewGroups';

const usersMap = props => {
    let userLocationMarker = null;
    callGroup = () => {
        <View>
            <ViewGroups/>
        </View>
        
       }
    if (props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
        }
    //const usersMarkers = props.usersPlaces.map(userPlace => <MapView.Marker coordinate={userPlace} key={userPlace.id} />)); 
        return (
            <View style={styles.mapContainer} >
                <MapView
                    //{usersMarkers} placed below location marker
                    //Longitude and latitude of Uwi Mona Kingston ja
                    initialRegion={{
                        latitude: 18.006013,
                        longitude: -76.747103,
                        latitudeDelta: 0.0422,
                        longitudeDelta: 0.0421,
                    }}
                    region={props.userLocation}
                    style={styles.map}>
                    {userLocationMarker}
                </MapView>
                <Button
                    name='View Groups'
                    onPress={() => {
                        this.callGroup();}} />
            </View>
        );
};
const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginTop: 30
    },
    map: {
        width: '100%',
        height: '100%'
    }
})

export default usersMap;