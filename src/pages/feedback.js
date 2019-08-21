import React from 'react'
import { navigate } from "gatsby";
import Layout from '../components/layout'
import SEO from '../components/seo'
import FeedbackForm from "../components/feedbackform"

const FeedbackPage = () =>{
    return(
        <Layout>
            <SEO title="Retainful Feedback - Let us Know your Feedbacks"
                description="Contact our Retainful technical support to resolve your query. We have a team of highly-skilled engineers and eCommerce specialists to help you out." 
                keywords={[`retainful support`, `ecommerce automation support`, `woocommerce marketing automation`, `shopify marketing automation`, `retainful contact form`]} />
            <div className="container">
                <div className="contact-intro text-center">
                    <h3>Feedback</h3>
                    <p>Please fill-in and submit the form with your Feedback for us.</p>
                </div>
                <div className="contact-form">
                    <FeedbackForm/>
                </div>
            </div>
        </Layout>
    )
}

export default FeedbackPage
