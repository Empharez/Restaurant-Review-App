import React from 'react';

export default function RestaurantModal({ showModal, toggleModal }) {
	return (
		showModal && (
			<div className="modal">
				<div className="modal-main">
					<div className="modal-header">
						<h3>Add a Restaurant</h3>
						<button onClick={toggleModal}>&times;</button>
					</div>
					<div className="modal-body">
						<div>
							<label for="name">Restaurant Name:</label>
							<input type="text" />
						</div>
						<div>
							<label for="name">Address:</label>
							<input type="text" />
						</div>
					</div>
				</div>
			</div>
		)
	);
}
