import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import user_icon from '../../Images/user_icon.png';
import menu_icon from '../../Images/menu_icon.png';
import home_icon from '../../Images/homeIcon.png';
class Google extends Component {
    render(){
    return (
        <div id="index">
            <div className="header">
                <img className="user_icon" src={user_icon} alt="user_icon" />
                <h5>Google+</h5>
                <img className="menu_icon" src={menu_icon} alt="menu_icon" />
            </div>
        <NavLink className="google-btn" to='/Login'>Google+</NavLink>
        
        <footer>
            <img className="home_icon" src={home_icon} alt="home_icon" />
        </footer>
        </div>
    )
    }
}

export default Google