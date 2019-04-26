import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SupportPage = () => (
    <Layout>
        <SEO title="Support" />
        <div className="container">
            <div className="contact-intro text-center">
                <h3>Support</h3>
                <p>Please fill-in and submit the form with your request. One of our support staff will be get in touch with you</p>
            </div>
            <div className="contact-form">
                <form name="contact" method="POST" data-netlify="true"  netlify-honeypot="bot-field">
                    <p>
                        <label>Name: </label>
                        <input type="text" name="name" placeholder="Enter your name" />
                    </p>
                    <p>
                        <label>Email: </label>
                        <input type="email" name="email" placeholder="name@name.com"  />
                    </p>
                    <p>
                        <label>Subject: </label>
                        <input type="text" name="name" placeholder="Subject" />
                    </p>
                    <p>
                        <label>Message: </label>
                        <textarea name="message" placeholder="Message" ></textarea>
                    </p>
                    <p className="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
                    </p>
                    <p>
                        <button type="submit" className="btn btn-action btn-lg">Send</button>
                    </p>
                </form>
            </div>
        </div>
    </Layout>
)

export default SupportPage
