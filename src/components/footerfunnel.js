import React from "react"
import Link from "gatsby"

const Footerfunnel = (props) =>{
    const bgColor = props.bgColor;
    const textcolor = props.color;
    return(
        <div className="footer-container text-center" style={{backgroundColor:bgColor,color:textcolor + '!important'}}>
            {props.children}
        </div>
    )
}

export default Footerfunnel