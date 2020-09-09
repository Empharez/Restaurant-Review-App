import React, { useState } from 'react';
import Modal from './modal';

export default function AddRatingModal({ showModal, toggleModal, item, setItem }) {
	const [review, setReview] = useState({
		stars: null,
		comment: ''
	});

	const { stars, comment } = review;
	const onChange = e => {
		setReview({
			...review,
			[e.target.name]: e.target.value
		});
	};

	const addRating = (stars, comment) => {
		item.ratings.push({
			stars,
			comment
		});
		const rating =
			(item.globalRating * item.numberOfRating + parseInt(stars)) / (item.numberOfRating + 1);
		item.globalRating = rating.toFixed(1);

		// setItem({
		// 	...item,
		// 	ratings: [...item.ratings, { stars, comment }],
		// 	globalRating
		// });

		toggleModal();

		setReview({
			stars: null,
			comment: ''
		});

		item.numberOfRating++;
		setItem(null);
	};

	return (
		showModal && (
			<Modal title={'Submit your review'} toggleModal={toggleModal}>
				<div className="modal-body">
					<div>
						<textarea
							name="comment"
							rows="10"
							cols="60"
							onChange={onChange}
							value={comment}></textarea>
					</div>
					<div>
						<label for="stars">Rate:</label>
						<select className="select" onChange={onChange} name="stars">
							<option value="">Rate restaurant</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<input type="submit" value="Submit" onClick={() => addRating(stars, comment)} />
				</div>
			</Modal>
		)
	);
}
