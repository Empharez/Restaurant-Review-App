import React from 'react';
const Header = (props) => {
        return ( 
            <header>
                <div className='logo'>Restaurants Review App</div>
                <input type='text' onChange={props.keywords}/>
            </header>
            
        )

}

export default Header;