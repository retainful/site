import React from 'react';
import PropTypes from 'prop-types';

class FeaturesContext extends React.Component{
    render() {
        const classes = "features-container " + this.props.className;
        const bgColor = {
            'backgroundColor': this.props.bgColor
        };
        let splitCol = null;
        if(this.props.splitcol){
            splitCol = this.props.splitcol.split(',');
        }
        if(this.props.imgposition === 'left'){
            return(
                <div className={classes} style={bgColor}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={(this.props.splitcol) ? "col-md-"+splitCol[0] : "col-md-6"}>
                                {this.props.imgurl &&
                                <img src={this.props.imgurl} alt="" className="img-responsive p-r-30"/>
                                }
                            </div>
                            <div className={(this.props.splitcol) ? "col-md-"+splitCol[1] : "col-md-6"}>
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
                            <div className={(this.props.splitcol) ? "col-md-"+splitCol[0] : "col-md-6"}>
                                {this.props.children}
                            </div>
                            <div className={(this.props.splitcol) ? "col-md-"+splitCol[1] : "col-md-6"}>
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
    splitcol: PropTypes.array
};

FeaturesContext.defaultProps = {
    imgposition: 'left',
    className: '',
    bgColor: '#fff',
}

export default FeaturesContext;