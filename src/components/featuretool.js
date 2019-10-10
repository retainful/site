import React from 'react';
import { Link,Img } from 'gatsby'
import {groupBy} from "lodash";


const FeatureContent = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    const slottedChildren = groupBy(childrenArray, 'props.slot');
    const featureBodySizeLeft = `col-md-${props.featurebodysizeleft}`
    const featureBodySizeRight = `col-md-${props.featurebodysizerigth}`
    const cardClass = `features-list`;

    return (
   
        <div className={cardClass}>
            <div className="row align-items-center">  
            {/*Left Side Content Begins */}
            <div className ={featureBodySizeLeft}>
                    <div className="feature-left-content">{slottedChildren["left"]}</div>
                </div>
                {/*Left Side Content Ends */}

                {/*Right Side Content Begins */}
                <div className={featureBodySizeRight}>
                    <div className="header-right-content">{slottedChildren["right"]}</div>

                </div>
                {/*Right Side Content Ends */}
            </div> {/*Row Close */}
{/*Feature  Close */} </div> 
        );
    }

FeatureContent.defaultProps = {
    size: '',
};

export default FeatureContent;