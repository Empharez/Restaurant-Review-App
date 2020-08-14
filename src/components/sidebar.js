import React, { Component } from 'react';
import RestaurantList from './restaurant_list';

class Sidebar extends Component {
	onClick(restaurant, map, google) {
		if (this.props.onListItemClick) {
			restaurant.place = restaurant;
			this.props.onListItemClick(restaurant, map, google);
		}
	}
	render() {
		return (
			<div className="heading">
				<RestaurantList
					toggleModal={this.props.toggleModal}
					restaurants={this.props.restaurants}
					onClick={this.onClick.bind(this)}
				/>
			</div>
		);
	}
}

export default Sidebar;
