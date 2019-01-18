import React from 'react';

export default function Container( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `container container-${props.type}`;
    return(
        <div className={classes}>
            { props.children }
        </div>
    )
}

Container.defaultProps = {
    type: 'l',
};