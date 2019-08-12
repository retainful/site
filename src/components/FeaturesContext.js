import React from 'react';
import PropTypes from 'prop-types';

class FeaturesContext extends React.Component{
    render() {
        const classes = "features-container " + this.props.className;
        const bgColor = {
            'backgroundColor': this.props.bgColor
        };
        if(this.props.imgposition === 'left'){
            return(
                <div className={classes} style={bgColor}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                {this.props.imgurl &&
                                <img src={this.props.imgurl} alt="" className="img-responsive p-r-30"/>
                                }
                            </div>
                            <div className="col-sm-7">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if(this.props.imgposition === 'right'){
            return(
                <div className={classes} style={bgColor}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-7">
                                {this.props.children}
                            </div>
                            <div className="col-sm-5">
                                {this.props.imgurl &&
                                <img src={this.props.imgurl} alt="" className="img-responsive p-l-30"/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else{
            return(
                <div className={classes} style={bgColor}>
                    <div className="container">
                        {this.props.children}
                        {this.props.imgurl &&
                            <img src={this.props.imgurl} alt="" className="img-responsive p-t-30"/>
                        }
                    </div>
                </div>
            )
        }
    }
}


FeaturesContext.propTypes = {
    imgurl: PropTypes.string,
    bgColor: PropTypes.string,
};

FeaturesContext.defaultProps = {
    imgposition: 'left',
    className: '',
    bgColor: '#fff'
}

export default FeaturesContext;