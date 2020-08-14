import React from 'react';
import Modal from './modal';

export default function AddModal({ showModal, toggleModal }) {
	return (
		showModal && (
			<Modal title={'Submit your review'} toggleModal={toggleModal}>
				<div className="modal-body">
					<div>
						<textarea name="review" rows="10" cols="60"></textarea>
					</div>
					<div>
						<label for="rating">Rate:</label>
						<select name="rating">
							<option value="">Rate restaurant</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<input type="submit" value="Submit" />
				</div>
			</Modal>
		)
	);
}
