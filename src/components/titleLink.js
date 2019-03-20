import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const titlelinkStyle = {
    /* styles skipped for brevity */
}

export default function TitleLink( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `titlelink ${props.type}`;
    return(
        <div className={classes} style={titlelinkStyle}>
            { props.children } <a href={props.link}> <FaExternalLinkAlt/> </a>
        </div>
    )
}

TitleLink.defaultProps = {
    type: 'h2',
    link: '',
};