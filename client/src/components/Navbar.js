import React from 'react' 
import {Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darker-3">
            <div className="container">
                {/* <a className="brand-logo">MYtinerary</a> */}
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/cities">Cities</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/createaccount">Create Account</NavLink></li>
                    <li><NavLink to="/mytinerary">MYtinerary</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar