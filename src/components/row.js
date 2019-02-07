import React from 'react'

const Row = (props) => {
    const rowClass = `row ${props.className}`;
    return (
        <div className={rowClass}>
            {props.children}
        </div>
    );
}

Row.defaultProps = {
    className: '',
};

export default Row;