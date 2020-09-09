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
		restaurant: null,
		min: 0,
		max: 5,
		keyword: ""
	};

	getKeyword = event => {
		let {min, max} = this.state;
		let keyword = event.target.value;
		let filtered = this.filter(
			keyword, min, max
		);
		this.setState({
			filtered,
			keyword
		});
		console.log(filtered);
	};

	filter(keyword, min, max){
		const restaurants = this.state.restaurants.filter(item => item.restaurantName.toLowerCase().includes(keyword.toLowerCase())
		&& item.globalRating >= min && item.globalRating <= max
		)
		return restaurants;

	}

	getRatings = () => {
		this.setState({ filtered: null });
		const { min, max, keyword } = this.state;
		let ratingFilter = this.filter(
			keyword, min, max
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
						onClick={this.getDetails.bind(this)}
					/>

					<MapContainer
						restaurants={filtered !== null ? filtered : restaurants}
						updateCallback={this.updateRestaurantList.bind(this)}
						onMarkerClick={this.getDetails.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
