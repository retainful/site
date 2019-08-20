import React from 'react'
import { navigate } from "gatsby";
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from "../components/contactform"

const SupportPage = () =>{
    return(
        <Layout>
            <SEO title="Retainful Support - Sales Enquiry and Live Chat Hub"
                description="Contact our Retainful technical support to resolve your query. We have a team of highly-skilled engineers and eCommerce specialists to help you out." 
                keywords={[`retainful support`, `ecommerce automation support`, `woocommerce marketing automation`, `shopify marketing automation`, `retainful contact form`]} />
            <div className="container">
                <div className="contact-intro text-center">
                    <h3>Support</h3>
                    <p>Please fill-in and submit the form with your request. One of our support staff will be get in touch with you</p>
                </div>
                <div className="contact-form">
                    <ContactForm/>
                </div>
            </div>
        </Layout>
    )
}

export default SupportPage
