import React from "react"

const Definition = (props) =>{
    return(
    <div className="definition rounded">
    <h3>{props.title}</h3>
    <div class="py-1 px-5" style={{backgroundColor:'#00FF7F',borderRadius:'1rem'}}>
        {props.children}
    </div>
    </div>
    )}

export default Definition