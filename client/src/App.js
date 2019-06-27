import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Cities from './components/Cities'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import MYtinerary from './components/MYtinerary'

import Ninjas from './Ninjas';
import Beasts from './Beasts';
import AddBeast from './AddBeast'; // ./means de document is in the same directory
// const logo = require('./MYtineraryLogo.png');
import logo from './MYtineraryLogo.png';
import browser_icon from './circled-right-2.png';
import home_icon from './homeIcon.png';
import user_icon from './user_icon.png';
import menu_icon from './menu_icon.png';

class App extends Component {
  state = { //data:
    ninjas: [
      { name: 'Viola', age: 92, belt: 'Black', id: 1 },
      { name: 'Tiger', age: 40, belt: 'Yellow', id: 2 },
      { name: 'Sjadian', age: 40, belt: 'Green', id: 3 }
    ],
    beasts: [
      { name: 'Craig', age: 90, belt: 'Black', id: 1 },
      { name: 'Matt', age: 27, belt: 'Yellow', id: 2 },
      { name: 'Charlotte', age: 27, belt: 'Green', id: 3 }
    ]
  }
  render() { //Virtual DOM
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/cities' component={Cities} />
          <Route path='/login' component={Login} />
          <Route path='/createaccount' component={CreateAccount} />
          <Route path='/mytinerary' component={MYtinerary} />
          <div id="index">
            <div className="header">
            <img className="user_icon" src={user_icon} alt="user_icon" />
            <img className="menu_icon" src={menu_icon} alt="menu_icon" />
          </div>
            <div className="banner">
              <img className="logo" src={logo} alt="logo" />
              <h4>Find your perfect trip, designed by insiders who know and love their city</h4>
            </div>
            <div className="browser">
              <h2>Start browsing</h2>
              <img className="browser_icon" src={browser_icon} alt="browser_icon" />
            </div>
            <div className="prompt">
              <h4>Want to build your own MYtinerary?</h4>
              <div className="prompt_buttons">
                <button className="prompt1">Login</button>
                <button className="prompt2">Create Account</button>
              </div>
              <footer>
                <img className="home_icon" src={home_icon} alt="home_icon" />
              </footer>
            </div>
            <Ninjas ninjas={this.state.ninjas} />
            {/* door hierboven de global array in het child-component te plaatsen als een props, 
        is de data/props uit die array ineens bereikbaar in het desbetreffende child-component 
        en dat is heel waardevol want nu kan daar functies toekennen*/}
            {/* verwijzing Child, naam array in state={ninjas in array in global data/state} */}
            <Beasts beasts={this.state.beasts} />
            <AddBeast />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
