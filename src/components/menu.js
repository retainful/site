import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
                <Link to="/features/woocommerce" activeClassName="active" className="nav-link">Features</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog" activeClassName="active" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/support" activeClassName="active" className="nav-link">Support</Link>
            </li>
            <li className="nav-item">
                <Link to="/docs" activeClassName="active" className="nav-link">Docs</Link>
            </li>
            <li className="nav-item">
                <a href="https://app.retainful.com" target="_blank" className="btn-cta nav-link">Sign Up</a>
            </li>
        </ul>
    </div>
)

export default Menu;