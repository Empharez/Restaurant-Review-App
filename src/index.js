import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import MapContainer from './components/mapp';

//components
import Header from './components/header';
import Sidebar from './components/sidebar';
import AddModal from './components/AddModal';
import RestaurantModal from './components/RestaurantModal';

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
		showModal: false,
		showRestaurantModal: false,
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
			let names = item.restaurantName.split(' ');
			return (
				names[0].substring(0, keyword.length).toLowerCase() === keyword ||
				names[1]?.substring(0, keyword.length).toLowerCase() === keyword
			);
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
		this.setState({ showRestaurantModal: !this.state.showRestaurantModal, restaurant });
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
		const { restaurant, restaurants, filtered, showModal } = this.state;
		return (
			<div
				style={{
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					height: '100%'
				}}>
				<AddModal
					toggleModal={() => this.setState({ showModal: !this.state.showModal })}
					showModal={showModal}
				/>
				<RestaurantModal
					toggleRestaurantModal={() =>
						this.setState({ showRestaurantModal: !this.state.showRestaurantModal })
					}
					showRestaurantModal={this.state.showRestaurantModal}
					restaurant={restaurant}
				/>
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
						toggleModal={() => this.setState({ showModal: !this.state.showModal })}
					/>

					<MapContainer
						restaurants={filtered ? filtered : restaurants}
						updateCallback={this.updateRestaurantList.bind(this)}
						onMarkerClick={this.getDetails.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
