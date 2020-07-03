import React, { useEffect, useRef, useState, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

export class MapContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const mapStyles = {
			position: 'relative',
			width: '50%',
			height: '50%'
		};
		return (
			<Map
				google={this.props.google}
				zoom={this.props.zoom}
				style={mapStyles}
				initialCenter={{ lat: this.props.lat, lng: this.props.lng }}>
				<Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
			</Map>
		);
	}
}

MapContainer.defaultProps = {
	lat: 48,
	lng: 8,
	zoom: 5
};

MapContainer.propTypes = {
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
	zoom: PropTypes.number.isRequired
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDguopZPGXR2U8RGWIvmDOyXAgqjWTZswg'
})(MapContainer);
