import React from 'react';

const LinkTextStyle = {
    /* styles skipped for brevity */
}

export default function LinkText( props ) {
    if (!props.children) {
        return null;
    }
    return(
        <a href={props.url} target={props.target} rel={props.rel}> { props.children } </a>
    )
}

LinkText.defaultProps = {
    url: '#',
    rel:'nofollow',
    target: '_self'
};