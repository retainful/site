import React from "react"
import Link from "gatsby"

const Footerfunnel = (props) =>{
    const bgColor = props.bgColor;
    const textcolor = props.color;
    return(
        <div className="p-5" style={{backgroundColor:bgColor,color:textcolor + '!important'}}>
            {props.children}
        </div>
    )
}

export default Footerfunnel