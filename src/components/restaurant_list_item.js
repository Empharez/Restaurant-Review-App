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
		transition: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
		':hover': {
			color: '#fff'
		},
		'@media(max-width: 500px)': {
			color: '#16817a'
		}
	});
	let item_color = css({
		background: '#073b4c'
	});

	return (
		<div {...restaurant_item} {...item_color} {...container}>
			<h3>{restaurant?.restaurantName}</h3>
			<span>{restaurant?.globalRating}</span>
			<Ratings stars={restaurant.globalRating} />
			<p>{restaurant?.address}</p>
		</div>
	);
};

export default RestaurantItem;
