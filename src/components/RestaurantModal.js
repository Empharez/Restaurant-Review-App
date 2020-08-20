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
					{/* <img src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant.position.latitude},${restaurant.position.longitude}
					&fov=80&heading=70&pitch=0
					&key=AIzaSyAkqMXQhMJwYRSvhQ1_-qS_FpV7-NbZFf8`}/> */}

					<img
						src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant.address}
					&fov=80&heading=70&pitch=0
					&key=AIzaSyAkqMXQhMJwYRSvhQ1_-qS_FpV7-NbZFf8`}
						alt="restaurant"
					/>
					<span>{restaurant?.globalRating}</span>
					<Ratings stars={restaurant.globalRating} />
					<p>{restaurant?.address}</p>
				</div>
			</Modal>
		)
	);
}
