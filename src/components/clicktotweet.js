import React from 'react'
import {FaTwitter} from "react-icons/fa"

const ClicktoTweet = (props) =>{
    const twitter = `https://twitter.com/intent/tweet?url=${props.url}&text=${props.title}&via=retainful`
    return(
    <div className="row">
    <div className="px-5 p-1 tweet">
        <div>
            {props.children}
        </div>
            <div className="p-3 float-left">
                <a className="font-weight-bold rounded text-primary" target="_blank"  rel="noopener nofollow" href={twitter}>{props.handle}</a>
            </div>
            <div className="p-3 float-right">
                <a className="bg-primary p-1 text-white rounded" target="_blank"  rel="noopener nofollow" href={twitter}>Click here to Tweet<FaTwitter/></a>
            </div>
    </div>
    </div>
    )
}

export default ClicktoTweet