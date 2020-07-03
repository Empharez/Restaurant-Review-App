import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';

class MapContainer extends Component{
    render(){
        const mapStyles = {
            position: 'relative',
			width: '50%',
			height: '50%'
          };
         
        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={5}
                    style={mapStyles}
                    initialCenter={{ lat: 48.8737815, lng: 2.3501649}}
                >
                <Marker position={{ lat: 48.8737815, lng: 2.3501649}} />
                </Map>
            </div>
        )
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDguopZPGXR2U8RGWIvmDOyXAgqjWTZswg'
  })(MapContainer);