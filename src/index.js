import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './restaurants.json'
import RestaurantList from './components/restaurant_list';


class App extends Component {
  state = {
    restaurants: JSON
  }
  render(){
    return(
      <RestaurantList/>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));