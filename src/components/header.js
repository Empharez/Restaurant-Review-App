import React, { Component } from 'react';
class Header extends Component {
    state = {
        keywords: ''
    }
    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }
    render(){
        console.log(this.state.keywords)
        
        return ( 
            <header>
                <div className='logo'>Restaurants Review App</div>
                <input type='text' onChange={this.inputChangeHandler}/>
            </header>
            
        )
    }

}

export default Header;