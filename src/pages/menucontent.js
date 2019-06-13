import React from 'react'
import {Link} from 'gatsby'
import Menubar from '../constants/menubar';


class MenuCard extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // console.log(this.props);
    }
   

    static menuCallout() {
        return Menubar.map((card) => {
             //const cardClass = `card home-callout callout--${card.BADGE}`;
            return (
                <li className="nav-item">
                    <Link activeClassName="active" to={card.LINK} className={card.CLASS} target={card.TARGET}>{card.TITLE}</Link>
                </li>
            );
        });
    }

    render() {
        return (
         <ul className="navbar-nav">
            {MenuCard.menuCallout()}
        </ul>
        )
    }
}

export default MenuCard
