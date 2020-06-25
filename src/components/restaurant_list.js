import React from 'react';

const RestaurantList = (props) => {
    const restaurants = props.restaurants.map((restaurant) => {
        return(
            <div>
                <h3>{restaurant.restaurantName}</h3>
                <div>{restaurant.address}</div>
            </div>
        )
    });
    return(
        <div>{restaurants}</div>
    )
}

export default RestaurantList;