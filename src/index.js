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

  getKeyword = (event) => {
    console.log(event.target.value)
  }
  render(){
    return(
      <div>
        <Header keywords={this.getKeyword}/>
      < RestaurantList restaurants={this.state.restaurants}>
        <h3>Restaurant list are: </h3>
      </RestaurantList>
      </div>
      
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));