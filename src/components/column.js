import React from 'react'
export default function Column( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `col-xs-12 col-md-${props.size} ${props.class}`;
    return(
        <div className={classes}>
            { props.children }
        </div>
    )
}

Column.defaultProps = {
    size: '4',
    class: ''
};