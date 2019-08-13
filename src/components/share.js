import React from 'react'
import twitterIcon from '../images/twitter.png'
import fbIcon from '../images/facebook.png'
import './share.css'
import { FaFacebookF, FaTwitter,FaLinkedin} from 'react-icons/fa'

const Share = props => {

    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
    props.pathname}&text=${props.title}`;

    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
    props.pathname}`;

    return (
        <div className="blog-post-share-block">
            <h4 className="center">Share</h4>
            <ul className="social">
                <li>
                    <a href={fb} target="blank">
                        <FaFacebookF size="30" />
                    </a>
                </li>
                <li>
                    <a href={twitter} target="blank">
                        <FaTwitter size="30" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Share;