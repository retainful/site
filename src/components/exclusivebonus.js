import React from 'react'
import GiftImage from "../images/gift.jpg"
import CustomNewsletterForm from "./customSignupForm"

const ExclusiveBonus =  (props) =>{
    return(
        <div className="bonus text-center px-5 p-1">
            <div>
                <img style={{maxWidth:'150px',maxHeight:'250px'}} src={GiftImage}/>
                {props.children}
            </div>
            <div>
                <CustomNewsletterForm btntext={props.btntext} placeholdertext ={props.placeholdertext} btnclass ={props.btnclass} btncolor={props.btncolor} width ={props.width} />            
                { props.buttontext?<a href={props.url} target={props.target} rel={props.rel} className="btn-action btn-edge text-white btn-block"> { props.buttontext } </a> : null}
            </div>
        </div>
    )
}

export default ExclusiveBonus
