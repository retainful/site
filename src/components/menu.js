import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
                <Link to="/#how-it-works" className="nav-link js-scroll-trigger">How it Works</Link>
            </li>
            <li className="nav-item">
                <Link to="/#features" className="nav-link js-scroll-trigger">Features</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog" className="nav-link js-scroll-trigger">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/docs" className="nav-link js-scroll-trigger">Docs</Link>
            </li>
            <li className="nav-item">
                <Link to="/#pricing" className="btn-cta nav-link js-scroll-trigger">Sign Up</Link>
            </li>
        </ul>
    </div>
)

export default Menu;