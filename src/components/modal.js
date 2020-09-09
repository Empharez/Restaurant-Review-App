import React from 'react';

export default function Modal({ children, title, toggleModal }) {
	return (
		<div className="modal">
			<div className="modal-main">
				<div className="modal-header">
					<h3>{title}</h3>
					<button onClick={toggleModal}>&times;</button>
				</div>
				{children}
			</div>
		</div>
	);
}
