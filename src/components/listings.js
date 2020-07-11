import React, { Component } from 'react';

import Item from './items';


class Listing extends Component {
  render() {
    return (
      <div className='container'>
      {this.props.places.map(place => {
        return (
          <Item place={place}
                onClick={this.props.onClick}
                key={place.id} />
        )
      })}
      </div>
    )
  }
}

export default Listing