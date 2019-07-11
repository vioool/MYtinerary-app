import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red accent-3">
            <div className="container">
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/city-creator'>City Creator</Link></li>
                    <li><NavLink to="/cities">Cities</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/createaccount">Accnt</NavLink></li>
                    <li><NavLink to="/mytinerary">MYtin</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar