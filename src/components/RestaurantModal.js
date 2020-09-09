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
				<div className="restaurant-modal">
					{/* <img src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant.position.latitude},${restaurant.position.longitude}
					&fov=80&heading=70&pitch=0
					&key=AIzaSyAkqMXQhMJwYRSvhQ1_-qS_FpV7-NbZFf8`}/> */}

					<div style={{ margin: '5px' }}>
						<img
							src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant?.address}
					&fov=80&heading=70&pitch=0
					&key=AIzaSyAkqMXQhMJwYRSvhQ1_-qS_FpV7-NbZFf8`}
							style={{ width: '100%' }}
							alt="restaurant"
						/>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center'
							}}>
							<span style={{ margin: '15px', padding: '15px' }}>{restaurant?.globalRating}</span>
							<Ratings stars={restaurant?.globalRating} />
						</div>
						<p>{restaurant?.address}</p>
					</div>
					<div>
						<h3>Reviews</h3>
						{restaurant?.reviews ? (
							restaurant?.reviews.map(review => (
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<p style={{ marginRight: '15px', fontWeight: 600 }}>{review.author_name}</p>
									<p style={{ marginRight: '15px' }}>{review.text}</p>
									<Ratings stars={review.rating} />
								</div>
							))
						) : (
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<p>No reviews</p>
							</div>
						)}
					</div>
				</div>
			</Modal>
		)
	);
}
