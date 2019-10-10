import React from 'react'
import { navigate } from "gatsby";
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from "../components/contactform"

const ContactPage = () =>{
    return(
        <Layout>
            <SEO title="Retainful Contact - Sales Enquiry and Live Chat Hub"
                description="Contact our Retainful technical support to resolve your query. We have a team of highly-skilled engineers and eCommerce specialists to help you out." 
                keywords={[`retainful support`, `ecommerce automation support`, `woocommerce marketing automation`, `shopify marketing automation`, `retainful contact form`]} />
            <div className="container">
                <div className="contact-intro text-center">
                    <h3>Contact us</h3>
                    <p>Please fill-in and submit the form with your request. We will get in touch with you</p>
                </div>
                <div className="contact-form">
                    <ContactForm/>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage
