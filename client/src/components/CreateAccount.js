import React from 'react'
import user_icon from '../Images/user_icon.png';
import menu_icon from '../Images/menu_icon.png';
import home_icon from '../Images/homeIcon.png';

const CreateAccount = () => {
    return (
        <div id="index">
            <div className="header">
                <img className="user_icon" src={user_icon} alt="user_icon" />
                <h5>Create Account</h5>
                <img className="menu_icon" src={menu_icon} alt="menu_icon" />
            </div>
            <footer>
                <img className="home_icon" src={home_icon} alt="home_icon" />
            </footer>
        </div>
    )
}

export default CreateAccount