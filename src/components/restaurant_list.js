import React, { useState } from 'react';
import RestaurantItem from './restaurant_list_item';
import AddRatingModal from './AddRatingModal';
//import classes from '../css/styles.css'

<<<<<<< HEAD
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
=======
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
>>>>>>> e291527e799b35a38a51abff7233062a05136eeb
		</div>
	);
};

export default RestaurantList;
