import React from 'react';

const highlightStyle = {
    /* styles skipped for brevity */
}

export default function Highlight( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `highlight highlight-${props.type}`;
    return(
        <span className={classes} style={highlightStyle}>
            { props.children }
        </span>
    )
}

Highlight.defaultProps = {
    type: 'yellow',
};