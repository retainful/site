import React from 'react';
import { Link } from 'gatsby'
import {groupBy} from "lodash";


const Card = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    const slottedChildren = groupBy(childrenArray, 'props.slot');
    const cardClass = `card card-blog col-md-${props.size} ${props.className}`;
    return (
        <div className={cardClass}>
            <div className="card_inner">
                <h3 className="card_title" >{slottedChildren["card-title"]}</h3>
                <div className="card_links">
                    {slottedChildren["card-links"]}
                </div>
                <div className="card-body">{slottedChildren["card-body"]}</div>
            </div>
            <div className="card_button">
                {slottedChildren["card-button"]}
            </div>
        </div>
    );
}

Card.defaultProps = {
    size: '',
    className: '',
};

export default Card;