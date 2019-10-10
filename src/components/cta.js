import React from 'react';

const CtaButtton = {}

export default function Cta( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `btn-action btn-edge text-white`;
    return(
        <a href={props.url} target={props.target} rel={props.rel} className={classes}> { props.children } </a>
    )
}
