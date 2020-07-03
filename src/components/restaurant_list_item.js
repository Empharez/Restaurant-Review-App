import React from 'react';
import {css} from 'glamor';

const RestaurantItem = ({restaurant}) => {

    let restaurant_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid #024249',
        ':hover':{
            color:'#024249'
        },
        '@media(max-width: 500px)' : {
            color: '#16817a'
        }
    });
    let item_color = css({
        background: '#f79071'
    })


    return(
        <div {...restaurant_item} {...item_color}>
            <h3>{restaurant.restaurantName}
            <i className="fa fa-star"></i></h3>
            <div>{restaurant.address}</div>
            
        </div>
    )

}

export default RestaurantItem


            
        