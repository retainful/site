import React from 'react';

const underlineStyle = {
    /* styles skipped for brevity */
}

export default function Underline( props ) {
    if (!props.children) {
        return null;
    }
    return(
        <span className="underline" style={underlineStyle}>
            { props.children }
        </span>
    )
}