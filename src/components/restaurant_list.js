import React from 'react';
import RestaurantItem from './restaurant_list_item'
//import classes from '../css/styles.css'

const RestaurantList = (props) => {
    const restaurants = props.restaurants.map((restaurant, i) => {
        return(
            <div className='sidebar'>
            <RestaurantItem restaurant={restaurant} onClick={props.onClick} key={i}/>
            </div>
        )
    });
    return(
        <div>
            {props.children}
            {restaurants}
        </div>
    )
}

export default RestaurantList;