import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Cities from '../components/Cities'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import MYtinerary from '../components/MYtinerary'
import { Route, BrowserRouter } from 'react-router-dom'
import CityCreator from '../components/cityCreator/CityCreator';

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Route exact path='/' component={Home} />
                <Route path='/cities' component={Cities} />
                <Route path='/login' component={Login} />
                <Route path='/createaccount' component={CreateAccount} />
                <Route path='/mytinerary' component={MYtinerary} />
                <Route exact path='/city-creator' component={CityCreator} />
            </BrowserRouter>
        );
    }
}

export default Routing;