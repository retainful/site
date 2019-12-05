import React from "react"
import CustomNewsletterForm from "./customSignupForm"
import Newsletter from "../images/newsletter.jpg"

const GetTemplates = (props) =>{
    return(
        <div className="row justify-content-center">
            <div className="p-3">
                <div>
                    {props.children}
                </div>
                <div>
                    <CustomNewsletterForm class="form-inline" btntext={props.btntext} btncolor={props.btncolor}/>
                </div>
            </div>
        </div>
    )
}
export default GetTemplates