import React, { useState } from 'react';
import Modal from './modal';
import Restaurant from '../restaurant';

export default function NewRestaurantModal({ showModal, toggleModal, location, updateRestaurant }) {
	const [restaurantDetails, setRestaurantDetails] = useState({
		name: '',
		address: ''
	});

	const { name, address } = restaurantDetails;
	const onChange = e => {
		setRestaurantDetails({
			...restaurantDetails,
			[e.target.name]: e.target.value
		});
	};

	const generatePlaceId = length => {
		let result = '';
		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	const handleSave = (name, address) => {
		const placeId = generatePlaceId(20);
		console.log(placeId);

		const newRestaurant = new Restaurant(name, address, location.lat, location.lng, 0, 0, placeId);
		updateRestaurant(newRestaurant);
		setRestaurantDetails({
			name: '',
			address: ''
		});
		toggleModal();
	};

	return (
		showModal && (
			<Modal title={'Add new Restaurant'} toggleModal={toggleModal}>
				<div className="modal-body">
					<div>
						<label htmlFor="name"></label>
						<input name="name" type="text" onChange={onChange} value={name} />
					</div>
					<div>
						<label htmlFor="address"></label>
						<input name="address" type="text" onChange={onChange} value={address} />
					</div>

					<input type="submit" value="Submit" onClick={() => handleSave(name, address)} />
				</div>
			</Modal>
		)
	);
}
