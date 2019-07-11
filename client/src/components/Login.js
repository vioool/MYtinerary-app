import React from 'react'
import user_icon from '../user_icon.png';
import menu_icon from '../menu_icon.png';
import home_icon from '../homeIcon.png';

const Login = () => {
    return (
        <div id="index">
            <div className="header">
                <img className="user_icon" src={user_icon} alt="user_icon" />
                <h5>Login</h5>
                <img className="menu_icon" src={menu_icon} alt="menu_icon" />
            </div>
            <footer>
                <img className="home_icon" src={home_icon} alt="home_icon" />
            </footer>
        </div>
    )
}

export default Login