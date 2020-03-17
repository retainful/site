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
             const cardClass = `nav-link `;
            return (
                <li className={"nav-item " + (card.DROPDOWN_LINKS ? 'dropdown' : '')}>
                    { !card.DROPDOWN_LINKS &&
                        <Link activeClassName="active" to={card.LINK} className={cardClass}>{card.TITLE}</Link>
                    }
                    { card.DROPDOWN_LINKS &&
                        <>
                            <a className={"nav-link " + (card.DROPDOWN_LINKS ? 'dropdown-toggle' : '')} href="#" id={card.DROPDOWN_TARGET} role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {card.TITLE}
                            </a>
                            <div className={"dropdown-menu"} aria-labelledby={card.DROPDOWN_TARGET}>
                                { !card.ISMEGAMENU &&
                                    card.DROPDOWN_LINKS.map((link) => {
                                        return (
                                            <a className="dropdown-item" href={link.LINK}>{link.TITLE}</a>
                                        )
                                    })
                                }

                                { card.ISMEGAMENU &&
                                    <ul className="productsGroupPrimary">
                                        {
                                    card.DROPDOWN_LINKS.map((link) => {
                                                if(!link.SUB_DROPDOWN_MENU){
                                                return (
                                                    <li>
                                                        <a className="linkContainer item-payments" href={link.LINK}
                                                            data-analytics-action="payments" data-analytics-source="nav_dropdown" tabIndex="-1">
                                                            <img src={link.ICON} alt=""/>
                                                        <div className="productLinkContent">
                                                                <h3 className="linkTitle">{link.TITLE}</h3>
                                                            <p className="linkSub">{link.DESC}</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <li className="submenu">
                                                            <a className="linkContainer item-payments" href={link.LINK}
                                                                data-analytics-action="payments" data-analytics-source="nav_dropdown" tabIndex="-1">
                                                                <img src={link.ICON} alt=""/>
                                                            <div className="productLinkContent">
                                                                    <h3 className="linkTitle">{link.TITLE}</h3>
                                                                <p className="linkSub">{link.DESC}</p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                }
                                            })
                                        }
                                    </ul>
                                }

                            </div>
                        </>
                    }
                </li>
            );
        });
    }

    render() {
        return (
         <ul className="navbar-nav ml-auto navbar-center">
            {MenuCard.menuCallout()}
        </ul>
        )
    }
}

export default MenuCard
