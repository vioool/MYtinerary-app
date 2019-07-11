import React from 'react';
import { NavLink } from 'react-router-dom';
import user_icon from '../user_icon.png';
import menu_icon from '../menu_icon.png';
import home_icon from '../homeIcon.png';
import logo from '../MYtineraryLogo.png';
import browser_icon from '../circled-right-2.png';


const Home = () => {
    return (
        <div id="index">
            <div className="header">
                <NavLink to='/Login'>
                    <img
                        className="user_icon"
                        src={user_icon}
                        alt="user_icon"
                    />
                </NavLink>
                <h5>Home</h5>
                <img
                    className="menu_icon"
                    src={menu_icon}
                    alt="menu_icon"
                />
            </div>
            <div className="banner">
                <img
                    className="logo"
                    src={logo}
                    alt="logo"
                />
                <h4>Find your perfect trip, designed by insiders who know and love their city</h4>
            </div>
            <div className="browser">
                <h2>Start browsing</h2>
                <NavLink to='/Cities'>
                    <img
                        className="browser_icon"
                        src={browser_icon}
                        alt="browser_icon"
                    />
                </NavLink>
            </div>
            <div className="prompt">
                <h4>Want to build your own MYtinerary?</h4>
                <div className="prompt_buttons">
                    <NavLink to='/Login'>
                        <button className="prompt1">Login</button>
                    </NavLink>
                    <NavLink to='/CreateAccount'>
                        <button className="prompt2">Create Account</button>
                    </NavLink>
                </div>
            </div>
            <footer>
                <NavLink to='/Home'>
                    <img
                        className="home_icon"
                        src={home_icon}
                        alt="home_icon"
                    />
                </NavLink>
            </footer>
        </div >
    )
}

export default Home