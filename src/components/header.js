import React from 'react';
const Header = ({ onChange, keywords, getRatings }) => {
	return (
		<header>
			<h1>Restaurants Review App</h1>
			<div className="filter">
				<label>Search: </label>
				<input type="text" onChange={keywords} />
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
					<input type="submit" onSubmit={getRatings} value="Search" />
			</div>
		</header>
	);
};

export default Header;
