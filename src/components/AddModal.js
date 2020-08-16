import React, { useState } from 'react';
import Modal from './modal';

export default function AddModal({ showModal, toggleModal, item, setItem }) {
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
		console.log(item.globalRating * item.numberOfRating + parseInt(stars));

		item.globalRating = (
			Math.round(item.globalRating * item.numberOfRating + parseInt(stars)) /
			(item.numberOfRating + 1)
		).toFixed(2);

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
		console.log(item.numberOfRating);
		console.log(item.globalRating);
	};

	// const { stars, comment } = review;

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
						<select onChange={onChange} name="stars">
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
