import React from 'react';
import Modal from './modal';

export default function AddModal({ showModal, toggleModal }) {
	return (
		showModal && (
			<Modal title={'Add a Restaurant'} toggleModal={toggleModal}>
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
			</Modal>
		)
	);
}
