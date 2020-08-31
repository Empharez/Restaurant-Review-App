import React from 'react';
import { css } from 'glamor';
import Ratings from './ratings';

const RestaurantItem = ({
	restaurant,
	item,
	setItem,
	toggleModal,
	toggleRestaurantModal,
	onShowDetails
}) => {
	let container = css({
		position: 'relative',
		background: '#073b4c',
		// height: '100%',
		// paddingBottom: '60px',
		margin: '0',
		padding: '20px',
		boxSizing: 'border-box',
		borderBottom: '1px solid #024249',
		transition: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
		color: '#fff',
		':hover': {
			color: '#93b5e1'
		},
		'@media(max-width: 500px)': {
			color: '#16817a'
		}
	});

	if (item) {
		restaurant = item;
	}

	return (
		<>
			{/* <AddModal
				item={item}
				setItem={setItem}
				toggleModal={toggleModal}
				showModal={showModal}
				// onChange={onChange}
				// addRating={addRating}
				// review={review}
			/> */}
			<div {...container}>
				<div>
					<h3 onClick={() => onShowDetails(restaurant)}>{restaurant?.restaurantName}</h3>
					<button
						onClick={() => {
							toggleModal();
							setItem(restaurant);
						}}>
						+
					</button>
				</div>
				<span>{restaurant?.globalRating}</span>
				<Ratings stars={restaurant.globalRating} />
				<p>{restaurant?.address}</p>
			</div>
		</>
	);
};

export default RestaurantItem;
