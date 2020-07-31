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
			<div className="sidebar">
				<div className="heading">
					<h1>{this.props.title}</h1>
					<RestaurantList
						restaurant={this.props.restaurant}
						restaurants={this.props.restaurants}
						onClick={this.onClick.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default Sidebar;
