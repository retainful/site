import React from 'react'
import { Link } from 'gatsby'
import MenuCard from '../pages/menucontent'

const Menu = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto navbar-right">
            <MenuCard />
            <li className="nav-item">
                            <a href="https://app.retainful.com" target="_blank" className="nav-link btn-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://app.retainful.com" target="_blank" className="btn-cta nav-link">Sign Up</a>
            </li>
        </ul>
    </div>
)

export default Menu;