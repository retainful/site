import React from 'react';

const TableOfContent = ()=>{
    return(
        `
            <div className="table-of-contents">
                <h4>Table of contents</h4>
                <ul>
                    <li><a className="scroll-down" href="#section1">Next order WooCommerce discount</a></li>
                    <li><a className="scroll-down" href="#section2">How to add next order WooCommerce discount</a>
                        <ul>
                            <li><a className="scroll-down" href="#section3">User role based next order discount</a></li>
                            <li><a className="scroll-down" href="#section4">FREE Shipping discount on next order discount</a></li>
                            <li><a className="scroll-down" href="#section5">Next order BOGO discount</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        `
    )
}

export default TableOfContent;