import React, { Component } from 'react'
import {getDetails} from 'utils/googleApiHelpers'

class Detail extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loading: true,
      place: {},
      location: {}
    }
  }

  getDetails(map) {
    const {google, params} = this.props;
    const {placeId} = params;

    // Set the loading state
    this.setState({loading: true}, () => {
        getDetails(google, map, placeId)
        .then(place => {
          const {location} = place.geometry;
          const loc = {
            lat: location.lat(),
            lng: location.lng()
          }

          this.setState({
            restaurant, location: loc, loading: false
          });
  }
  // ...
  render() {
    return (
      <div className='details'></div>
    )
  }
}

export default Detail