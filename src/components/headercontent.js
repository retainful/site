import React from 'react';
import { Link } from 'gatsby'
import {groupBy} from "lodash";
import LandingPageMenu from "./landingpagemenu"


const HeaderContent = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    const slottedChildren = groupBy(childrenArray, 'props.slot');
    const cardClass = `hero-content wow fadeIn col-md-${props.size} ${props.className}`;
    // const cardSize = `col-md-${props.size}`
    

    return (
        <>
        <LandingPageMenu/>
        <div className={cardClass}>
        <div className="row align-items-center">
            <div className="col-md-6">
                {slottedChildren["left"]}
            </div>
            
            <div className="col-md-6">
                {slottedChildren["right"]}
            </div>
        </div>
        </div>
        </>
        );
    }

HeaderContent.defaultProps = {
    size: '12',
};

export default HeaderContent;