import React from 'react';
import { css } from 'glamor';
import Ratings from './ratings';

const RestaurantItem = ({ restaurant }) => {
	let container = css({
		height: '100%',
		paddingBottom: '60px',
		margin: '0'
	});
	let restaurant_item = css({
		padding: '20px',
		boxSizing: 'border-box',
		borderBottom: '1px solid #024249',
		':hover': {
			color: '#024249'
		},
		'@media(max-width: 500px)': {
			color: '#16817a'
		}
	});
	let item_color = css({
		background: '#f79071'
	});

	return (
		<div {...restaurant_item} {...item_color} {...container}>
			<h1>{restaurant?.restaurantName}</h1>
			<span>{restaurant?.getRating()}</span>
			<Ratings stars={restaurant.getRating()} />
			<p>{restaurant?.address}</p>
		</div>
	);
};

export default RestaurantItem;
