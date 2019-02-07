import React from 'react';
import { Link } from 'gatsby'
import {groupBy} from "lodash";


const Card = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    const slottedChildren = groupBy(childrenArray, 'props.slot');
    const cardClass = `card card-blog text-center col-md-${props.size}`;
    return (
        <div className={cardClass}>
            <div className="card_inner">
                <h3 className="card_title" >{slottedChildren["card-title"]}</h3>
                <div className="card_links">
                    {slottedChildren["card-links"]}
                </div>
                <p className="is-p">{slottedChildren["card-body"]}</p>
            </div>
            <div className="card_button">
                {slottedChildren["card-button"]}
            </div>
        </div>
    );
}

Card.defaultProps = {
    size: '',
};

export default Card;