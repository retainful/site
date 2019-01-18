import React from 'react';

const calloutStyle = {
    /* styles skipped for brevity */
}

export default function Callout( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `callout callout-${props.type}`;
    return(
        <div className={classes} style={calloutStyle}>
            { props.children }
        </div>
    )
}

Callout.defaultProps = {
    type: 'info',
};