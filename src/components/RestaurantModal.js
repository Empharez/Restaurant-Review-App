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

					<div style={{margin: '5px'}}>
						<img
							src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant?.address}
					&fov=80&heading=70&pitch=0
					&key=AIzaSyAkqMXQhMJwYRSvhQ1_-qS_FpV7-NbZFf8`}
							alt="restaurant"
						/>
						<br/>
						<span style={{ }}>{restaurant?.globalRating}</span>
						<Ratings stars={restaurant?.globalRating} />
						<p>{restaurant?.address}</p>
					</div>
					<div>
						<h3>Reviews</h3>
						{restaurant?.ratings.map(rating => (
							<div style={{ display: 'flex', 
								flexDirection: 'column', 
								alignItems: 'center', 
								border: 'solid 1px black', borderRadius: '10px'  }}>
								<p style={{ }} className="review-author">{rating.author?rating.author: "You"}</p>
								<p style={{ }} className="panel-body">{rating.comment}</p>
								<Ratings stars={rating.stars} />
							</div>
						))}
					</div>
				</div>
			</Modal>
		)
	);
}
