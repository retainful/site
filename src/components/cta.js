import React from 'react';

const CtaButtton = {}

export default function Cta( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `cta cta-${props.type}`;
    return(
        <button className={classes} style={CtaButtton}>
            { props.children }
        </button>
    )
}

Cta.defaultProps = {
    type: 'info',
};