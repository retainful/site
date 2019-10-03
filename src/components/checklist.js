import React from "react"

const CheckList = (props) =>{
    return(
        <>
            <input type="checkbox" name="vehicle1" value={props.children}/>{props.children}<br/>
        </>
    )
}

export default CheckList