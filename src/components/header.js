import React from 'react';
const Header = ({ onChange, keywords, getRatings, toggleModal }) => {
	return (
		<header>
			<div className="logo">Restaurants Review App</div>
			<div className="small-wrapper">
				<div className="filter">
					<input type="text" onChange={keywords} />
					<div className="logo">
						<label>
							Min ratings:
							<select name="min" onChange={e => onChange(e)}>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</label>

						<label>
							Max ratings:
							<select name="max" onChange={e => onChange(e)}>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</label>
						<input onClick={getRatings} type="submit" value="Submit" />
					</div>
				</div>
				<div>
					<button onClick={toggleModal}>Add a restaurant</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
