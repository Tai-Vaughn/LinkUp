import React from 'react'
import {View, Text , StyleSheet, FlatList} from 'react-native'
import MapView, {PROVIDER_GOOGLE ,  Marker ,Callout} from 'react-native-maps';
import * as Dataservice from '../Service/DataService'

export default class Map extends React.Component {
    constructor(prop){
        super(prop),
        this.state={
            markers: []
        }
    }

    componentDidMount(){
        
        Dataservice.markers$.subscribe(data => this.setState({markers : data}))
        Dataservice.getMarkers()
    
    }
    render() {
        let markersList = this.state.markers.map(marker => 
        <Marker key={marker._id} coordinate={{latitude:parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }}>
            <Callout>
                <Text>{marker.name}</Text>
            </Callout>
        </Marker>)
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
            
            {markersList}

            {/* <Marker 
            coordinate = {{latitude: this.state.markers[0].latitude}}
            >

            </Marker> */}

            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})
