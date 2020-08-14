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
				<div className="add-restaurant">
					<button onClick={this.props.toggleModal}>+</button>
					<div>
						<h4>Add Restaurant</h4>
					</div>
				</div>
				<RestaurantList
					restaurants={this.props.restaurants}
					onClick={this.onClick.bind(this)}
				/>
			</div>
		);
	}
}

export default Sidebar;
