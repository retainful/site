import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from 'gatsby';
import {FaAngleRight} from 'react-icons/fa';

class SideNav extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    static renderCallouts(callouts, current_url = '') {
        return callouts.map((card, index) => {
            current_url = current_url.replace(/\/$/, "");
            const find = function(input, target){
                let found = false;
                for (let prop in input) {
                    if(input[prop] == target){
                        found = true;
                    }
                };

                return found;
            };
            let linksC = '';
            if(card.LINKS){
                linksC = (card.LINKS).map(a => a.URL);
            }
            // console.log(linksC);
            return(
                <div className={"dropdown " + ((card.BUTTON_LINK === current_url || find(linksC, current_url)) ? 'active' : '')}>
                    {card.LINKS ? (
                            <div>
                                <a className="dropdown-btn" href="#">{card.TITLE}
                                    <FaAngleRight className="fa-caret-down" size="2em" />
                                </a>
                            <div className="dropdown-container" style={{ display: ((card.BUTTON_LINK === current_url || find(linksC, current_url)) ? 'block' : 'none') }}>
                                    {card.LINKS.map(link => <a href={link.URL} key={link.TEXTNODE} className={((link.URL === current_url) ? 'active' : '')}>{link.TEXTNODE}</a>)}
                                </div>
                            </div>
                        ) :
                        (
                            <a href={card.BUTTON_LINK}>{card.TITLE}</a>
                        )
                    }
                </div>
            );
        });
    }
    render() {
        return (
            <div className="sidenav">
                { SideNav.renderCallouts(this.props.navLinks, this.props.currentUrl) }
            </div>
        );
    }
}

SideNav.propTypes = {

};

export default SideNav;
