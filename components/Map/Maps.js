import React from 'react'
import {View, Text , StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class Map extends React.Component {
    render() {
        return (
            <MapView
            style={styles.map}
            provider = {PROVIDER_GOOGLE}
            region={{
                latitude: 18.006013,
                longitude: -76.747103,
                latitudeDelta: 0.0422,
                longitudeDelta: 0.0421,
            }}>

            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})
