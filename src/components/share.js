import React from 'react'
import twitterIcon from '../images/twitter.png'
import fbIcon from '../images/facebook.png'
// import './share.css'
import { FaFacebookF, FaTwitter} from 'react-icons/fa'
import $ from "jquery";

class Share extends React.Component{
    componentDidMount () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                $('.blog-post-share-block').addClass('affix');
            } else {
                $('.blog-post-share-block').removeClass('affix');
            }
        })
    }
    render() {
        const twitter = `https://twitter.com/intent/tweet?url=${this.props.url +
        this.props.pathname}&text=${this.props.title}`;

        const fb = `https://www.facebook.com/sharer/sharer.php?u=${this.props.url +
        this.props.pathname}`;
        return(
            <div className="blog-post-share-block">
                <ul className="social">
                    <li>
                        <a href={twitter} target="blank">
                            <FaTwitter size="25" />
                        </a>
                    </li>
                    <li>
                        <a href={fb} target="blank">
                            <FaFacebookF size="25" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Share;