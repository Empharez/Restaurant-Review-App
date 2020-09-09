import React, { Component } from 'react';

const RatingIcon = () => <span>★</span>;

class Rating extends Component {
	render() {
		// ...
		const { stars } = this.props;
		const style = {
			width: `${(stars / 5) * 100}%`
		};
		let ratings = [];
<<<<<<< HEAD
		for (let i = 0; i < stars; i++) {
=======
		for (let i = 0; i < 5; i++) {
>>>>>>> e291527e799b35a38a51abff7233062a05136eeb
			ratings.push(<RatingIcon key={i}/>);
		}
		return (
			<div className="sprite">
				<div className="top" style={style}>
					{ratings}
				</div>
				{/* <div className="bottom">
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
				</div> */}
			</div>
		);
	}
}

export default Rating;
