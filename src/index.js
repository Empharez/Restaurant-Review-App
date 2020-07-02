import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import JSON from './restaurants.json'
//components
import Header from './components/header'
import RestaurantList from './components/restaurant_list';


class App extends Component {
  state = {
    restaurants: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    //console.log(event.target.value);
    let keyword = event.target.value;
    let filtered = this.state.restaurants.filter((item) => {
      return item.restaurantName.indexOf(keyword) > -1;
    });
    this.setState({
      filtered
    })
    console.log(filtered);
  }
  render(){
    return(
      <div>
        <Header keywords={this.getKeyword}/>
      < RestaurantList restaurants={this.state.filtered.length === 0 ? this.state.restaurants : this.state.filtered}>
        <h3>Restaurant list are: </h3>
      </RestaurantList>
      </div>
      
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));