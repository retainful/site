import React from "react"

const Videoembed = (props) =>{
    const url= props.src
    return(
        <div className="video-embed">
            <iframe  src={"https://www.youtube.com/embed/"+url+"?rel=0"} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
            </iframe>
        </div>
    )
}

export default Videoembed