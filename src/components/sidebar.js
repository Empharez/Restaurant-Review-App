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
<<<<<<< HEAD
			<div className="sidebar">
				<div className="heading">
					<h1>{this.props.title}</h1>
					<RestaurantList
						restaurant={this.props.restaurant}
						restaurants={this.props.restaurants}
						onClick={this.props.onClick}
					/>
				</div>
=======
			<div className="heading">
				<RestaurantList
					toggleModal={this.props.toggleModal}
					toggleRestaurantModal={this.props.toggleRestaurantModal}
					onShowDetails={this.props.onShowDetails}
					showModal={this.props.showModal}
					restaurants={this.props.restaurants}
					onClick={this.onClick.bind(this)}
					// onChange={this.props.onChange}
					// addRating={this.props.addRating}
					// review={this.props.review}
				/>
>>>>>>> e291527e799b35a38a51abff7233062a05136eeb
			</div>
		);
	}
}

export default Sidebar;
