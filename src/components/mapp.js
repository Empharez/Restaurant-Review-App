import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import { searchNearby } from '../utils/googleApiHelpers';
import Restaurant from '../restaurant';
import NewRestaurantModal from './NewRestaurantModal';
import { PropTypes } from 'prop-types';


class MapContainer extends Component {
	state = {
		places: [],
		pagination: null,
		location: {
			lat: null,
			lng: null
		}
	};

	onReady(mapProps, map) {
		const { google } = this.props;
<<<<<<< HEAD
=======
		this.gmap = map;
		// console.log(map.getBounds());

>>>>>>> e291527e799b35a38a51abff7233062a05136eeb
		const opts = {
			location: map.center,
			radius: '1000',
			types: ['restaurant']
		};
		searchNearby(google, map, opts).then((results, pagination) => {
<<<<<<< HEAD
				this.props.updateCallback(
					results.map(place => {
						return new Restaurant(
							place.name,
							place.vicinity,
							place.geometry.location.lat(),
							place.geometry.location.lng(),
							place.rating ? place.rating : 0,
							place.user_ratings_total ? place.user_ratings_total : 0,
							place.place_id
						);
					})
				)
			});
=======
			console.log("results->>", results)
			this.props.getRestaurant(
				results.map(place => {
					return new Restaurant(
						place.name,
						place.vicinity,
						place.geometry.location.lat(),
						place.geometry.location.lng(),
						place.rating ? place.rating : 0,
						place.user_ratings_total ? place.user_ratings_total : 0,
						place.place_id
					);
				})
			);

			/*this.setState({
              places: results,
              pagination
            })*/
		});
>>>>>>> e291527e799b35a38a51abff7233062a05136eeb
	}


	handleClick(ref, map, event) {
		console.log(ref);
		console.log(map);
		console.log(event.latLng.lat());
		console.log(event.latLng.lng());

		this.setState({
			location: {
				lat: event.latLng.lat(),
				lng: event.latLng.lng()
			}
		});

		this.props.toggleModal();
	}

	render() {
		const mapStyles = {
			position: 'relative',
			width: '70%',
			height: '100%'
		};
		/*const markers = this.props.restaurants.map((restaurant, i) => {
            return <Marker position={{lat: restaurant.lat , lng: restaurant.long}} key={i}
            onClick={this.onMarkerClick} ></Marker>
        });*/

		return (
			<>
				<NewRestaurantModal
					showModal={this.props.showModal}
					toggleModal={this.props.toggleModal}
					location={this.state.location}
					updateRestaurant={this.props.updateRestaurant}
				/>
				<Map
					google={this.props.google}
					zoom={15}
					style={mapStyles}
					onReady={this.onReady.bind(this)}
					// visible={true}
					onClick={this.handleClick.bind(this)}
					// center={this.props.currentPosition}
					initialCenter={this.props.currentPosition}>
					{this.props.restaurants &&
						this.props.restaurants.map((restaurant, i) => (
							<Marker
								key={i}
								name={restaurant.name}
								position={{
									lat: restaurant.position.latitude,
									lng: restaurant.position.longitude
								}}
								onClick={() => this.props.onMarkerClick(restaurant)}
							/>
						))}
				</Map>
			</>
		);
	}
}

MapContainer.propTypes = {
	updateCallback: PropTypes.func,
	currentPosition: PropTypes.objectOf({
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired
	}).isRequired
};
export default GoogleApiWrapper({
	apiKey: 'AIzaSyAkqMXQhMJwYRSvhQ1_-qS_FpV7-NbZFf8'
	//libraries= ['places']
})(MapContainer);
