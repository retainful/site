import React from 'react'
import { Link } from  'gatsby'
import Container from  '../components/container'

class GetStarted extends React.Component {
    render() {
        return (
            <div className="home-download-section text-center">
                <div className="container">
                    <h3>Start recovering abandoned carts. Drive repeat sales</h3>
                    <p>More Orders, More Revenue</p>
                    <p>
                        <a className="btn-action btn-lg" href="https://app.retainful.com/?utm_source=funnel&utm_medium=bottom_cta&utm_campaign=website" target="_blank" rel="noopener noreferrer">Get started FREE</a>
                    </p>
                    <p><small>*<strong>No Credit Card</strong> is required</small></p>
                </div>
            </div>
        )
    }
}

export default GetStarted;
