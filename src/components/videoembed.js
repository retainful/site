import React from "react"

const Videoembed = (props) =>{
    const url= props.src
    return(
        <iframe width="800" height="450" src={"https://www.youtube.com/embed/"+url+"?rel=0"} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
        </iframe>
    )
}

export default Videoembed