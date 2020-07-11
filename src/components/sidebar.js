import React from 'react';
import Listing from './listings';


class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <div className="heading">
          <h1>{this.props.title}</h1>
          <Listing/>
        </div>
      </div>
    )
  }
}

export default Sidebar