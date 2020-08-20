import React, { useState } from 'react';
import RestaurantItem from './restaurant_list_item';
import AddRatingModal from './AddRatingModal';
//import classes from '../css/styles.css'

const RestaurantList = ({ children, showModal, toggleModal, restaurants, onClick }) => {
	const [item, setItem] = useState(null);

	const list = restaurants.map((restaurant, i) => {
		return (
			<div>
				<RestaurantItem
					showModal={showModal}
					toggleModal={toggleModal}
					restaurant={restaurant}
					onClick={onClick}
					key={i}
					item={item}
					setItem={setItem}
					// onChange={onChange}
					// addRating={addRating}
					// review={review}
				/>
			</div>
		);
	});
	return (
		<div>
			<AddRatingModal
				item={item}
				setItem={setItem}
				toggleModal={toggleModal}
				showModal={showModal}
				// onChange={onChange}
				// addRating={addRating}
				// review={review}
			/>
			{children}
			{list}
		</div>
	);
};

export default RestaurantList;
