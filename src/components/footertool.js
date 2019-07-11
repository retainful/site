import React from "react"
import Link from "gatsby"
import Footer from "./footer"


const FooterTool = (props) =>{
    const bgColor = props.bgColor;
    const textcolor = props.color;
    return(
        <div>
        <div className="footer-container" style={{backgroundColor:bgColor,color:textcolor}}>
            {props.children}
        </div>
            <Footer/>
        </div>
    )
}

export default FooterTool