import React from 'react';

export default function CtaBox( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `ctabox ctabox-${props.type}`;
    return(
        <div className={classes}>
            <p>{ props.children }</p>
        </div>
    )
}

CtaBox.defaultProps = {
    type: 'info',
};