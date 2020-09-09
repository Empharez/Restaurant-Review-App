import React from 'react';
import RestaurantItem from './restaurant_list_item';
//import classes from '../css/styles.css'

const RestaurantList = ({ children, restaurant, restaurants, onClick }) => {
	const list = restaurants.map((restaurant, i) => (
		<div onClick={() => onClick(restaurant)} key={i}>
			<RestaurantItem restaurant={restaurant}   />
		</div>
			
	
	));
	return (
		<div >
			{children}
			{restaurant ? (
					<RestaurantItem restaurant={restaurant} />
				
			) : (
				list
			)}
		</div>
	);
};

export default RestaurantList;
