import React from 'react';
import RestaurantItem from './restaurant_list_item';
//import classes from '../css/styles.css'

const RestaurantList = ({ children, toggleModal, restaurant, restaurants, onClick }) => {
	const list = restaurants.map((restaurant, i) => (
		<div key={i}>
			<RestaurantItem toggleModal={toggleModal} restaurant={restaurant} onClick={onClick}  />
		</div>
	));
	return (
		<div>
			{children}
			{restaurant ? (
				<div>
					<RestaurantItem toggleModal={toggleModal} restaurant={restaurant} onClick={onClick} />
				</div>
			) : (
				list
			)}
		</div>
	);
};

export default RestaurantList;
