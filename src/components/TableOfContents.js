import React from 'react';
import {groupBy} from "lodash";

const TableOfContents = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    const slottedChildren = groupBy(childrenArray, 'props.children');
    const cardClass = `table-of-contents`;
    return (
        <div className={cardClass}>
            <h4>Table of Contents</h4>
            <ul>
                <li><a className="scroll-down" href="#section1">Next order WooCommerce discount</a></li>
            </ul>
        </div>
    );
}

export default TableOfContents;