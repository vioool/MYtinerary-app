import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red accent-3">
            <div className="container">
                <ul className="nav">
                    <li>
                        <Link to="/">
                            <i className="fas fa-home"></i>
                        </Link>
                    </li>
                    <li><Link to='/city-creator'>Create City</Link></li>
                    {/* <li><NavLink to="/cities">C</NavLink></li> */}
                    <li><NavLink to="/creator-itinerary">Itinerary</NavLink></li>
                    {/* <li><NavLink to="/signup">SU</NavLink></li> */}
                    <li>
                        <Link to="/user">
                            <i className="fas fa-user"></i>
                        </Link>
                    </li>
                    {/* <li><NavLink to="/mytinerary">MYtin</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/login">Logout</NavLink></li>
                    <li><NavLink to="/createaccount">Accnt</NavLink></li>
                     */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar