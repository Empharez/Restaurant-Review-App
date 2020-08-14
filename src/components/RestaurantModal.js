import React from 'react';
import Modal from './modal';
import Ratings from './ratings';

export default function RestaurantModal({
	restaurant,
	showRestaurantModal,
	toggleRestaurantModal
}) {
	return (
		showRestaurantModal && (
			<Modal title={restaurant?.restaurantName} toggleModal={toggleRestaurantModal}>
				<div>
					<span>{restaurant?.globalRating}</span>
					<Ratings stars={restaurant.globalRating} />
					<p>{restaurant?.address}</p>
				</div>
			</Modal>
		)
	);
}
