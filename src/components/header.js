import React from 'react';
const Header = (props) => {
        return ( 
            <header>
                <div className='logo'>Restaurants Review App</div>
                <input type='text' onChange={props.keywords}/>
                <div className='logo'>
                
                    <label>
                    Min ratings:
                    <select onChange={props.keywords}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>

                    <label>
                    Max ratings:
                    <select>
                    <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />

                </div>
                <div>
               
            </div>
            </header>
            
        )

}

export default Header;