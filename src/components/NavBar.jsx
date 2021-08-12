import React, { PureComponent } from 'react'
import { Switch, Route, Link } from 'react-router-dom';

const NavBar =  (props) => {
    
        return (
            <div>
                <nav class="navbar navbar-dark bg-primary mb-3">
                        <Link to='/'>WikiCountries</Link>
                </nav>
            </div>
        )
    
}

export default NavBar
