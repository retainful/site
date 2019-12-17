import React from "react"

const CheckList = (props) =>{
    return(
        <>
            <input type="checkbox" style={props.style} value={props.children}/>{props.children}<br/>
        </>
    )
}

export default CheckList