import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import MapContainer from './components/mapp';

import JSON from './restaurants.json';
//components
import Header from './components/header';
import RestaurantList from './components/restaurant_list';

class App extends Component {
	state = {
		restaurants: JSON,
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
	render() {
		let restaurantFiltered = this.state.filtered;
		let restaurantWhole = this.state.restaurants;
		return (
			<div>
				<Header keywords={this.getKeyword} />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
					<MapContainer />
					<RestaurantList
						restaurants={restaurantFiltered.length === 0 ? restaurantWhole : restaurantFiltered}>
						<h3>Restaurant list are: </h3>
					</RestaurantList>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
