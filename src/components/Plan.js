import React from 'react';
import { Link } from 'gatsby'
import {groupBy} from "lodash";


const Card = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    const slottedChildren = groupBy(childrenArray, 'props.slot');
    const cardClass = `col-md-${props.size} ${props.className}`;
    return (
        <div className={cardClass}>
            <div className="table-left wow fadeInDown">
                <div className="pricing-details">
                    <h3 className="plan-title" >{slottedChildren["plan-title"]}</h3>
                    <span className="price-amount">{slottedChildren["plan-price"]}</span>
                    <span className="price-period">{slottedChildren["plan-period"]}</span>
                    <div className="text-center">
                        {slottedChildren["plan-button"]}
                    </div>
                    {slottedChildren["plan-features"]}

                </div>
            </div>
        </div>
    );
}

Card.defaultProps = {
    size: '',
    className: '',
};

export default Card;