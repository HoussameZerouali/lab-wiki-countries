import React, { PureComponent } from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

const CountryDetails = (props) =>  {
    
        console.log(props.match.params.cca3)
        
        const myCountry = countries.find(elem => elem.cca3 === props.match.params.cca3)
        console.log(myCountry)
        return (
            <div>
                <h1>{myCountry.name.official}</h1>
                <div>Capital : {myCountry.capital}</div>
                <div>Area : {myCountry.area} m2 </div>
                <ul>
                    {myCountry.borders.map((result) => {
                        const border = countries.find(elem => elem.cca3 === result)
                        return (
                            <li><Link to={border.cca3}>{border.name.official}</Link></li>
                        )
                    })}
                </ul>
            </div>
        )
    
}

export default CountryDetails
