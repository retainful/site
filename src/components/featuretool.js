import React from 'react';
import { Link,Img } from 'gatsby'
import {groupBy} from "lodash";


const FeatureContent = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    const slottedChildren = groupBy(childrenArray, 'props.slot');
    const featureBodySizeLeft = `col-md-${props.featurebodysizeleft}`
    const featureBodySizeRight = `col-md-${props.featurebodysizerigth}`
    const cardClass = `features-list text-center`;
    const featureCardLeftSize = `card feature-card text-center col-md-${props.leftcardsize}`
    const featureCardRightSize = `card feature-card text-center col-md-${props.rightcardsize}`

    return (
   
        <div className={cardClass}>
            <div className="row align-items-center">  
            {/*Left Side Content Begins */}
            <div className ={featureBodySizeLeft}>
                    <div className="feature-left-content">{slottedChildren["left"]}</div>
        
                    {/*Left Card begins */}

                    <div className={featureCardLeftSize}>
                    <div className="card_image">{slottedChildren["card-image-left"]}</div>
                        <h3 className="card_title" >{slottedChildren["card-title-left"]}</h3>
                        <div className="card_links">
                            {slottedChildren["card-links-left"]}
                        </div>
                        <p className="is-p">{slottedChildren["card-body-left"]}</p>
                    </div>

                    {/*Left Card Ends */}

                </div>
                {/*Left Side Content Ends */}

                {/*Right Side Content Begins */}
                <div className={featureBodySizeRight}>
                    <div className="header-right-content">{slottedChildren["right"]}</div>

                       {/*Right Card begins */}

                       <div className={featureCardRightSize}>
                           <h3 className="card_title" >{slottedChildren["card-title-right"]}</h3>
                        <div className="card_image">{slottedChildren["card-image-right"]}</div>
                            <div className="card_links">
                                {slottedChildren["card-links-right"]}
                            </div>
                           <p className="is-p">{slottedChildren["card-body-right"]}</p>
                        </div>
                   {/*Right Card Ends  */}

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