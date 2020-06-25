import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import JSON from './restaurants.json'
//components
import Header from './components/header'
import RestaurantList from './components/restaurant_list';


class App extends Component {
  state = {
    restaurants: JSON
  }
  render(){
    return(
      <div>
        <Header/>
      < RestaurantList restaurants={this.state.restaurants}/>
      </div>
      
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));