import React, { PureComponent } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const  CountriesList = (props) =>  {
    
    
    
        return (
            <ul>
                {props.countries.map((country) => {
                    return (
                        <li>
                            <Link to={country.cca3}>{country.name.official}</Link>
                        </li>
                    )
                })}
            </ul>
        )
    
}

export default CountriesList
