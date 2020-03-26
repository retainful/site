import React from 'react';
import { Link,Img } from 'gatsby'
import {groupBy} from "lodash";


const FeatureContent = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    const slottedChildren = groupBy(childrenArray, 'props.slot');
    const featureBodySizeLeft = `col-md-${props.featurebodysizeleft} ${props.orderleft}`
    const featureBodySizeRight = `col-md-${props.featurebodysizerigth} ${props.orderright}`
    const cardClass = `features-list`;

    console.log(props);

    return (
   
        <div className={cardClass}>
            <div className="row align-items-center">  
            {/*Left Side Content Begins */}
            <div className ={featureBodySizeLeft}>
                    {slottedChildren["left"]}
            </div>
                {/*Left Side Content Ends */}

                {/*Right Side Content Begins */}
                <div className={featureBodySizeRight}>
                    {slottedChildren["right"]}
                </div>
                {/*Right Side Content Ends */}
            </div> {/*Row Close */}
{/*Feature  Close */} 
</div> 
        );
    }

FeatureContent.defaultProps = {
    size: '',
};

export default FeatureContent;