import React, { useState } from 'react';
import RestaurantItem from './restaurant_list_item';
import AddRatingModal from './AddRatingModal';
//import classes from '../css/styles.css'

const RestaurantList = ({
	children,
	showModal,
	toggleModal,
	toggleRestaurantModal,
	onShowDetails,
	restaurants,
	onClick
}) => {
	const [item, setItem] = useState(null);

	const list = restaurants.map((restaurant, i) => {
		return (
			<div key={i}>
				<RestaurantItem
					showModal={showModal}
					toggleModal={toggleModal}
					restaurant={restaurant}
					onClick={onClick}
					
					item={item}
					setItem={setItem}
					toggleRestaurantModal={toggleRestaurantModal}
					onShowDetails={onShowDetails}
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
