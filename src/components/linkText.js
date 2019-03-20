import React from 'react';

export default function LinkText( props ) {
    if (!props.children) {
        return null;
    }
    return(
        <a href={props.url} target={props.target} rel={props.rel} className={props.className} > { props.children } </a>
    )
}

LinkText.defaultProps = {
    url: '#',
    rel:'nofollow',
    target: '_self',
    className: ''
};
