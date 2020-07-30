import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import MapContainer from './components/mapp';

//components
import Header from './components/header';
import Sidebar from './components/sidebar';

const styles = {
	position: 'relative',
	height: '100vh',
	width: '100%',
	display: 'grid',
	gridTemplateColumns: '28% 70%'
};

class App extends Component {
	state = {
		restaurants: [],
		filtered: [],
		ratingFilter: [],
		restaurant: null
	};

	getKeyword = event => {
		//console.log(event.target.value);
		let keyword = event.target.value;
		let filtered = this.state.restaurants.filter(item => {
			return item.restaurantName.indexOf(keyword) > -1;
		});
		this.setState({
			filtered
		});
		console.log(filtered);
	};

	getRatings = event => {
		let minRatings = event.target.value;
		let maxRatings = event.targte.value;
		let ratingFilter = this.state.restaurants.filter(restaurant=> {
			return restaurant.ratings.indexOf(minRatings) > -1;
		});
		this.setState({ratingFilter});
		console.log(ratingFilter);
	}
	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(function (position) {
				console.log(position);
				console.log('Latitude is :', position.coords.latitude);
				console.log('Longitude is :', position.coords.longitude);
			});
		}
	}

	updateRestaurantList(restaurants) {
		/*{let filtered = restaurants.filter(item => {
			return item.restaurantName.indexOf(keyword) > -1;
		});}*/
		this.setState({
			restaurants: restaurants,
			filtered: restaurants
		});
	}

	getDetails(restaurant) {
		this.setState({ restaurant });
		// console.log(restaurant);
	}
	render() {
		let restaurantFiltered = this.state.filtered;
		// let restaurantWhole = this.state.restaurants;
		const { restaurant, restaurants, filtered } = this.state;
		return (
			<div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
				<Header keywords={this.getKeyword} />
				{/*<Sidebar restaurants={restaurantFiltered} />*/}
				<div style={styles}>
					<Sidebar
						title={restaurant?.restaurantName || 'Restaurants'}
						restaurants={restaurants}
						restaurant={restaurant}
						restaurants={restaurantFiltered}
					/>

					<MapContainer
						restaurants={filtered}
						updateCallback={this.updateRestaurantList.bind(this)}
						onMarkerClick={this.getDetails.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
