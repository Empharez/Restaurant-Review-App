import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import MapContainer from './components/mapp';
import { getDetails } from './utils/googleApiHelpers';

//components
import Header from './components/header';
import Sidebar from './components/sidebar';
import RestaurantModal from './components/RestaurantModal';

const styles = {
	display: 'grid',
	gridTemplateColumns: '30% 70%'
};

class App extends Component {
	constructor(props) {
		super(props);
		this.mapRef = React.createRef();
	}
	state = {
		restaurants: [],
		filtered: null,
<<<<<<< HEAD
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
=======
		showModal: false,
		showRestaurantModal: false,
		showNewRestaurantModal: false,
		// ratingFilter: [],
		restaurant: null,
		min: null,
		max: null,
		currentPosition: {
			lat: null,
			lng: null
		}
	};

	getKeyword = event => {
		this.setState({ filtered: null });
		let keyword = event.target.value;
		let filtered = this.state.restaurants.filter(item => {
			let names = item.restaurantName.split(' ');
			return (
				names[0].substring(0, keyword.length).toLowerCase() === keyword ||
				names[1]?.substring(0, keyword.length).toLowerCase() === keyword
			);
		});
>>>>>>> e291527e799b35a38a51abff7233062a05136eeb
		this.setState({
			filtered,
			keyword
		});
	};

	filter(keyword, min, max){
		const restaurants = this.state.restaurants.filter(item => item.restaurantName.toLowerCase().includes(keyword.toLowerCase())
		&& item.globalRating >= min && item.globalRating <= max
		)
		return restaurants;

	}

	getRatings = () => {
		this.setState({ filtered: null });
<<<<<<< HEAD
		const { min, max, keyword } = this.state;
		let ratingFilter = this.filter(
			keyword, min, max
=======
		const { min, max, restaurants } = this.state;
		console.log('is it working', restaurants);
		let ratingFilter = restaurants.filter(
			restaurant => restaurant.globalRating >= min && restaurant.globalRating <= max
>>>>>>> e291527e799b35a38a51abff7233062a05136eeb
		);
		this.setState({ filtered: ratingFilter });
		console.log(ratingFilter);
	};
	componentDidMount() {
		//need to fix this
		if (navigator.geolocation) {
			let vm = this;
			navigator.geolocation.getCurrentPosition(function (position) {
				console.log(position);
				console.log('Latitude is :', position.coords.latitude);
				console.log('Longitude is :', position.coords.longitude);
				const currentPos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				console.log('Current position', currentPos);
				vm.setState({
					currentPosition: { ...currentPos }
				});
			});
		}
	}

	getRestaurantList(restaurants) {
		this.setState({
			restaurants
		});
	}

	updateRestaurantList(restaurants) {
		const arr = [restaurants, ...this.state.restaurants];
		this.setState(prevState => ({
			...prevState,
			restaurants: arr
		}));
	}

	async getRatingFromPlaces(restaurant) {
		if (restaurant.placeId) {
			let place = await getDetails(
				this.mapRef.current.state.google,
				document.createElement('div'),
				restaurant.placeId
			);
			console.log(place);
			return place;
		}
	}

	async getDetails(restaurant) {
		// if(restaurant.gotReviews){
		// 	this.setState({
		// 		showRestaurantModal: !this.state.showRestaurantModal,
		// 		restaurant: { ...restaurant }
		// 	});
		// 	return ;
		// }
		// let place = await this.getRatingFromPlaces(restaurant);
		// console.log('this.map ref', place.reviews);
		// if(place.reviews < 1){
		// 	alert('no reviews')
		// }else {
		// 	for(let review of place.reviews){
		// 		restaurant.ratings.push({
		// 			stars: review.rating,
		// 			comment: review.text,
		// 			author: review.author_name
		// 		})
		// 	}
		// }

		// restaurant.gotReviews = true;
		// this.setState({
		// 	showRestaurantModal: !this.state.showRestaurantModal,
		// 	restaurant: { ...restaurant}
		// });
		// console.log(restaurant);

		let result = await this.getRatingFromPlaces(restaurant);
		this.setState({
			showRestaurantModal: !this.state.showRestaurantModal,
			restaurant: { ...restaurant, reviews: result.reviews }
		});
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		// let restaurantFiltered = this.state.filtered;
		// let restaurantWhole = this.state.restaurants;
		const {
			restaurant,
			restaurants,
			filtered,
			showModal,
			showRestaurantModal,
			showNewRestaurantModal,
			currentPosition
		} = this.state;
		return (
			<div
				style={{
					position: 'relative',
					overflow: 'hidden',
					height: '100vh',
					display: 'flex',
					flexDirection: 'column'
				}}>
				<RestaurantModal
					toggleRestaurantModal={() => this.setState({ showRestaurantModal: !showRestaurantModal })}
					showRestaurantModal={showRestaurantModal}
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
<<<<<<< HEAD
						restaurants={filtered !== null ? filtered : restaurants} //
						restaurant={restaurant}
						onClick={this.getDetails.bind(this)}
					/>

					<MapContainer
						restaurants={filtered !== null ? filtered : restaurants}
						updateCallback={this.updateRestaurantList.bind(this)}
=======
						restaurants={filtered !== null ? filtered : restaurants}
						toggleModal={() => this.setState({ showModal: !this.state.showModal })}
						showModal={showModal}
						onShowDetails={this.getDetails.bind(this)}
						toggleRestaurantModal={() =>
							this.setState({ showRestaurantModal: !showRestaurantModal })
						}
					/>

					<MapContainer
						currentPosition={currentPosition}
						restaurants={filtered ? filtered : restaurants}
						getRestaurant={this.getRestaurantList.bind(this)}
						updateRestaurant={this.updateRestaurantList.bind(this)}
>>>>>>> e291527e799b35a38a51abff7233062a05136eeb
						onMarkerClick={this.getDetails.bind(this)}
						toggleModal={() => this.setState({ showNewRestaurantModal: !showNewRestaurantModal })}
						showModal={showNewRestaurantModal}
						ref={this.mapRef}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
