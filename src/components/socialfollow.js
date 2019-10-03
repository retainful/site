import React from "react"
import {FaFacebookSquare,FaTwitterSquare} from "react-icons/fa"

const SocialFollow = (props) =>{
    return(
        <div class="container">
            <div className="text-center jumbotron">
                {props.children}
                <div className="d-flex justify-content-center">
                    <a href="https://www.facebook.com/retainful"><FaFacebookSquare  size="60" /></a>
                    <a href="https://www.twitter.com/retainful"><FaTwitterSquare size="60" /></a>
                </div>
            </div>
        </div>
    )
}
export default SocialFollow