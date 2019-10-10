import React from 'react';
import PropTypes from 'prop-types';

class FeaturesContextWithColumns extends React.Component{
    render() {
        const classes = "col-sm-" + this.props.size + " features-list-container " + this.props.className;
        const bgColor = {
            'backgroundColor': this.props.bgColor
        };
        return(
            <div className={classes} style={bgColor}>
                {this.props.heading &&
                <h4 style={{fontWeight:'600', fontSize: '23px', marginBottom: '10px'}}>{this.props.heading}</h4>
                }
                <p style={{fontWeight:'400', fontSize: '17px'}}>{this.props.children}</p>
            </div>
        )
    }
}


FeaturesContextWithColumns.propTypes = {
    heading: PropTypes.string,
    bgColor: PropTypes.string,
};

FeaturesContextWithColumns.defaultProps = {
    className: '',
    size: '6',
}

export default FeaturesContextWithColumns;