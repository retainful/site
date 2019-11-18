import React from "react"
import CustomNewsletterForm from "./customSignupForm"

const ClaimTrail = (props) =>{
        {console.log(props)}
    return(
        <div class="text-center">
            <div>
                {props.children}
            </div>    
            <div className="contact-form">
                <form name="claim-form">
                    <CustomNewsletterForm btntext={props.btntext} placeholdertext ={props.placeholdertext} btntext ={props.btntext} btnclass ={props.btnclass} btncolor ={props.btncolor} width ={props.width} />            
                </form>
            </div>
        </div>
    )
}

export default ClaimTrail