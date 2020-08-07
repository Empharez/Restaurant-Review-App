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
		filtered: null,
		// ratingFilter: [],
		restaurant: null,
		min: null,
		max: null
	};

	getKeyword = event => {
		//console.log(event.target.value);
		this.setState({ filtered: null });
		let keyword = event.target.value;
		let filtered = this.state.restaurants.filter(item => {
			return item.restaurantName.indexOf(keyword) > -1;
		});
		this.setState({
			filtered
		});
		console.log(filtered);
	};

	getRatings = () => {
		this.setState({ filtered: null });
		const { min, max, restaurants } = this.state;
		let ratingFilter = restaurants.filter(
			restaurant => restaurant.globalRating >= min && restaurant.globalRating <= max
		);
		this.setState({ filtered: ratingFilter });
		console.log(ratingFilter);
	};
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
		// restaurants.map(restaurant => (restaurant.ratings = restaurant.getRating()));
		this.setState({
			restaurants: restaurants
			// filtered: restaurants
		});
		console.log(restaurants);
	}

	getDetails(restaurant) {
		this.setState({ restaurant });
		// console.log(restaurant);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		// let restaurantFiltered = this.state.filtered;
		// let restaurantWhole = this.state.restaurants;
		const { restaurant, restaurants, filtered } = this.state;
		return (
			<div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
				<Header
					getRatings={this.getRatings.bind(this)}
					onChange={this.onChange.bind(this)}
					keywords={this.getKeyword}
				/>
				{/*<Sidebar restaurants={restaurantFiltered} />*/}
				<div style={styles}>
					<Sidebar
						title={restaurant?.restaurantName || 'Restaurants'}
						restaurants={filtered !== null ? filtered : restaurants} //
						restaurant={restaurant}
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
