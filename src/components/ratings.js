import React, { Component } from 'react'


const RatingIcon = (props) => (<span>★</span>);

class Rating extends Component {
  render() {
    // ...
    const {stars} = this.props;
    const style = {
      width: `${stars / 5 * 100}%`
    }
    return (
        <div className='sprite'>
          <div className='top' style={style}>
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
          </div>
          <div className='bottom'>
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
          </div>
        </div>
      )
  }
}

export default Rating;