import React from 'react'
import {View, Text , StyleSheet, Picker,Button} from 'react-native'
import MapView, {PROVIDER_GOOGLE ,  Marker ,Callout} from 'react-native-maps';
import * as Dataservice from '../Service/DataService'
import {filter,map} from 'rxjs/operators';

export default class Map extends React.Component {
    constructor(prop){
        super(prop),
        this.state={
            markers: [],
            names: [],
            Start: '',
            End: '',
            Graph: null,
            Path: []
        }
    }

    componentDidMount(){
        Dataservice.getMarkers()
        Dataservice.graph$.subscribe(data => {this.setState({Graph:data})
        //; console.log(data)
    })

        Dataservice.markers$.subscribe(data => 
            {
                let names = []
                
                for(let i=0 ; i< data.length; i++){
                    names.push(data[i].name)
                }
                this.setState({markers : data})
                this.setState({Path : data})
                this.setState({names : names})

            })
    }

    findPath(Start,End){
        let path = this.state.Graph.dijkstra(Start,End)
        let newMarkers = []

        for(let i = 0; i< this.state.markers.length; i++) {
            
            if(path.includes(this.state.markers[i].name)){
                newMarkers.push(this.state.markers[i])
            }
        }
        this.setState({Path:newMarkers})
    }

    render() {
        let markersList = this.state.Path.map(marker => 
        <Marker key={marker._id} coordinate={{latitude:parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }}>
            <Callout>
                <Text>{marker.name}</Text>
            </Callout>
        </Marker>)

        let markerNames = this.state.names.map(names =>
            <Picker.Item key={names} label={names} value={names}/> )
        return (
            <View>
                <Picker
                selectedValue={this.state.Start}
                onValueChange= { (itemValue , itemIndex) =>
                        this.setState({Start : itemValue})
                }
                >
                    <Picker.Item key='start' label='start' value=''/>
                    {markerNames}
                </Picker>

                <Picker
                selectedValue={this.state.End}
                onValueChange= { (itemValue , itemIndex) =>
                        this.setState({End : itemValue})
                }
                >
                    <Picker.Item key='end' label='end' value=''/>
                    {markerNames}
                </Picker>

                <Button title="Get route"
                onPress={()=> this.findPath(this.state.Start,this.state.End)}
                />

                <MapView
                    style={styles.map}
                    provider = {PROVIDER_GOOGLE}
                    region={{
                            latitude: 17.998099,
                            longitude: -76.745103,
                            latitudeDelta: 0.0000,
                            longitudeDelta: 0.0121,
                    }}>
                        {markersList}
                </MapView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})
