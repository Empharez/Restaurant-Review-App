import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import MapContainer from './components/mapp';


import json from './restaurants.json';
//components
import Header from './components/header';
import Sidebar from './components/sidebar';



class App extends Component {
	state = {
		restaurants: [],
		filtered: []
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
	componentDidMount() {
		if (navigator.geolocation) {
		  navigator.geolocation.watchPosition(function(position) {
			  console.log(position);
			console.log("Latitude is :", position.coords.latitude);
			console.log("Longitude is :", position.coords.longitude);
		  });
		}
	  }

	updateRestaurantList (restaurants){
		{/*let filtered = restaurants.filter(item => {
			return item.restaurantName.indexOf(keyword) > -1;
		});*/}
		this.setState({
			restaurants: restaurants,
			filtered: restaurants
		})

	}
	render() {
		let restaurantFiltered = this.state.filtered;
		{/*let restaurantWhole = this.state.restaurants;*/}
		return (
			<div>
				<Header keywords={this.getKeyword} />
				
				<MapContainer restaurants={restaurantFiltered} updateCallback={this.updateRestaurantList.bind(this)}>
					
				</MapContainer>
				
					
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
