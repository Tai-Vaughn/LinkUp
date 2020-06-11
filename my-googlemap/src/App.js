import React, { Component } from 'react';
import {GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
            render() {
                return (
                    <CurrentLocation
                        centerAroundCurrentLocation
                        google={this.props.google}
                    >
                        <Marker onClick={this.onMarkerClick} name={'current location'} />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </CurrentLocation>
                );
            }
        } 
           
export default GoogleApiWrapper(
    (props) => ({
        apiKey: props.'AIzaSyDYSVMRlOph8MhghCon6P5nfiJLv - eCnS8'
    }
    ))(MapContainer)
/*first one should be used
 * export default GoogleApiWrapper({
    apiKey: 'AIzaSyDYSVMRlOph8MhghCon6P5nfiJLv-eCnS8'
})(MapContainer);
*/


    }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
