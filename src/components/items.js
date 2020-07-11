import React, { Component } from 'react'

import Ratings from './ratings';

class Item extends Component {
  render() {
    const {place} = this.props;
    return (
      <div>
          <h1>{place.name}</h1>
          <span>{place.rating/5}</span>
          <Ratings/>
      </div>
    )
  }
}

export default Item