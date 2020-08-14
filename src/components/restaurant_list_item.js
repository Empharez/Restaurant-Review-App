import React from 'react';
import { css } from 'glamor';
import Ratings from './ratings';

const RestaurantItem = ({ restaurant, toggleModal }) => {
	let container = css({
		background: '#073b4c',
		height: '100%',
		paddingBottom: '60px',
		margin: '0',
		padding: '20px',
		boxSizing: 'border-box',
		borderBottom: '1px solid #024249',
		transition: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
		':hover': {
			color: '#fff'
		},
		'@media(max-width: 500px)': {
			color: '#16817a'
		}
	});

	return (
		<div {...container}>
			<div>
				<h3>{restaurant?.restaurantName}</h3>
				<button onClick={toggleModal}>+</button>
			</div>
			<span>{restaurant?.globalRating}</span>
			<Ratings stars={restaurant.globalRating} />
			<p>{restaurant?.address}</p>
		</div>
	);
};

export default RestaurantItem;
