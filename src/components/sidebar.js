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
					showModal={this.props.showModal}
					restaurants={this.props.restaurants}
					onClick={this.onClick.bind(this)}
					// onChange={this.props.onChange}
					// addRating={this.props.addRating}
					// review={this.props.review}
				/>
			</div>
		);
	}
}

export default Sidebar;
