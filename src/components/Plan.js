import React from 'react';
import { Link } from 'gatsby'
import {groupBy} from "lodash";


export default class Card extends React.Component {
    constructor(props) {
    super(props)
 
    this.childrenArray = React.Children.toArray(props.children);
    this.slottedChildren = groupBy(this.childrenArray, 'props.slot');
    this.cardClass = `col-md-${props.size} ${props.className}`;

        this.state={
            value:this.slottedChildren["plan-title"]
        }
    }

    // componentDidMount(){
    //     // document.getElementById("monthly").addEventListener('click',function(){
    //     //     alert('THis is one');
    //     // })
    // }
    // handleSubscription(){
    //     this.setState(props=>{
    //         return{
    //             value: props.slottedChildren["plan-title"]
    //         }
    //     })
    
    // }


render() {
    let {slottedChildren,cardClass } =this
    return (
        <div className={cardClass} id="plans">
            <div className="plan-bdr-hr">
                <div className="table-left table-left-rm wow fadeInDown">
                    <div className="pricing-details price-plan-list">
                        <h3 className="plan-title" >{slottedChildren["plan-title"]}</h3>
                        <div id="monthly">
                        <div className="original-price" >{slottedChildren["original-price-line"]}</div>
                            <span className="price-amount">
                                {slottedChildren["plan-price"]} 
                                <span className="price-period">
                                    {slottedChildren["plan-period"]}
                                </span>
                            </span>
                            </div>
                            <div id="anually" style={{display:'none'}}>
                        <div className="original-price" >{slottedChildren["original-price-line-anually"]}</div>
                            <span className="price-amount">
                                {slottedChildren["plan-price-anually"]} 
                                <span className="price-period">
                                    {slottedChildren["plan-period-anually"]}
                                </span>
                            </span>
                            </div>
                        <div className="text-center">
                            {slottedChildren["plan-button"]}
                        </div>
                            <span className="price-slogan pt-3">
                                {slottedChildren["pricing-slogan"]}
                            </span>
                        {slottedChildren["plan-features"]}
                    </div>
                </div>
            </div>
        </div>
    );
 }
}
Card.defaultProps = {
    size: '',
    className: '',
};
