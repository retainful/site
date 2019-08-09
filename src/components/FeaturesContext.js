import React from 'react';
import PropTypes from 'prop-types';

class FeaturesContext extends React.Component{
    render() {
        const classes = "features-container container " + this.props.className;
        if(this.props.imgposition === 'left'){
            return(
                <div className={classes}>
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            {this.props.imgurl &&
                            <img src={this.props.imgurl} alt="" className="img-responsive p-r-30"/>
                            }
                        </div>
                        <div className="col-sm-7">
                            {this.props.heading &&
                            <h3>{this.props.heading}</h3>
                            }
                            {this.props.children}
                        </div>
                    </div>
                </div>
            )
        } else if(this.props.imgposition === 'right'){
            return(
                <div className={classes}>
                    <div className="row align-items-center">
                        <div className="col-sm-7">
                            {this.props.heading &&
                            <h3>{this.props.heading}</h3>
                            }
                            {this.props.children}
                        </div>
                        <div className="col-sm-5">
                            {this.props.imgurl &&
                            <img src={this.props.imgurl} alt="" className="img-responsive p-l-30"/>
                            }
                        </div>
                    </div>
                </div>
            )
        } else{
            return(
                <div className={classes}>
                    {this.props.heading &&
                        <h3>{this.props.heading}</h3>
                    }
                    {this.props.children}
                    {this.props.imgurl &&
                        <img src={this.props.imgurl} alt="" className="img-responsive p-t-30"/>
                    }
                </div>
            )
        }
    }
}


FeaturesContext.propTypes = {
    imgurl: PropTypes.string,
    heading: PropTypes.string.isRequired,
};

FeaturesContext.defaultProps = {
    imgposition: 'left',
    className: ''
}

export default FeaturesContext;