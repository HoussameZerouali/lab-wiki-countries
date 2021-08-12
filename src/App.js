import logo from './logo.svg';
import Countries from './countries.json'
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route, NavLink } from 'react-router-dom';
import React, {Component} from 'react';

import './App.css';

class App extends Component {

  state = {
    countries: [],
      
  }
  componentDidMount(){
    this.setState({
      countries: Countries,
    })
  }

  render(){
    return (
      <div className="App">
        <header>
          <NavBar />
          <div></div>
        </header>
        <div>
          <Route path='/:cca3' component={CountryDetails}/>
          <CountriesList countries={Countries} />
        </div>
        
        
        


      </div>
    );
  }
  
}

export default App;
