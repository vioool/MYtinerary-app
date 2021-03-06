import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Cities from '../components/cities/Cities'
import Login from '../components/login/Login'
import Google from '../components/login/Google'
import Logout from '../components/login/Logout'
import CreateAccount from '../components/CreateAccount'
import MYtinerary from '../components/MYtinerary'
import { Route, BrowserRouter } from 'react-router-dom'
import CityCreator from '../components/cityCreator/CityCreator'
import CreateItinerary from '../components/itineraries/CreateItinerary'
import Itineraries from '../components/itineraries/Itineraries'
import SignUpPage from '../components/signUp/SignUpPage'
import User from '../components/user/User'

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Route exact path='/' component={Home} />
                <Route path='/cities' component={Cities} />
                <Route path='/itineraries' component={Itineraries} />
                <Route path='/user' component={User} />
                <Route path='/auth/login' component={Login} />
                <Route exact path='/auth/google/redirect' component={Google} />
                <Route path='/auth/logout' component={Logout} />
                <Route path='/createaccount' component={CreateAccount} />
                <Route path='/mytinerary' component={MYtinerary} />
                <Route exact path='/city-creator' component={CityCreator} />
                <Route exact path='/creator-itinerary' component={CreateItinerary} />
                <Route exact path='/signup' component={SignUpPage} />
            </BrowserRouter>
        );
    }
}

export default Routing;