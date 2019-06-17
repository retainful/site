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
                <li className={"nav-item " + (card.DROPDOWN_LINKS ? 'dropdown' : '')}>
                    { !card.DROPDOWN_LINKS &&
                        <Link activeClassName="active" to={card.LINK} className={card.CLASS} target={card.TARGET}>{card.TITLE}</Link>
                    }
                    { card.DROPDOWN_LINKS &&
                        <div>
                            <a className={"nav-link " + (card.DROPDOWN_LINKS ? 'dropdown-toggle' : '')} href="#" id={card.DROPDOWN_TARGET} role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>

                            <div className={"dropdown-menu " + (card.DROPDOWN_LINKS ? 'dropdown-toggle' : '')} aria-labelledby={card.DROPDOWN_TARGET}>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    }
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
