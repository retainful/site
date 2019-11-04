import React from 'react'
import { Link } from 'gatsby'
import MenuCard from '../pages/menucontent'

const Menu = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <MenuCard />
        <ul className="navbar-nav ml-auto navbar-right d-log">
            <li className="nav-item">
                <a href="https://app.retainful.com/?utm_source=login&utm_medium=navigation_bar&utm_campaign=website" target="_blank" className="nav-link btn-link">Log in</a>
            </li>
            <li className="nav-item">
                <a href="https://app.retainful.com/?utm_source=signup&utm_medium=navigation_bar&utm_campaign=website" target="_blank" className="btn-cta nav-link">Sign Up</a>
            </li>
        </ul>
    </div>
)

export default Menu;