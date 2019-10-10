import React from "react"
import CustomNewsletterForm from "./customSignupForm"
import Newsletter from "../images/newsletter.jpg"

const GetTemplates = (props) =>{
    return(
        <div className="p-3 border border-primary">
            <div class="row">
                <div class="col-md-8">
                    <div>
                        {props.children}
                    </div>
                    <div>
                        <CustomNewsletterForm class="form-inline"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={Newsletter}/>
                </div>
            </div>
        </div>
    )
}
export default GetTemplates