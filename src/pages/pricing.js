import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import Pricing from '../components/pricing'
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import $ from 'jquery'

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';
import PricingFaq from '../constants/FAQ';

class PricingPage extends React.Component {
    static renderFaqs() {
        return PricingFaq.map(faq => (
            <div className="col-sm-6" key={faq.QUESTION}>
                <div className="faq-wrapper">
                    <h4>{faq.QUESTION}</h4>
                    <p>{faq.ANSWER}</p>
                </div>
            </div>
        ));
    }
    render() {
        return (
            <Layout>
                <MetaTags
                    title="Pricing Plans | Retainful"
                    description="Start recovering abandoned carts in your Shopify and WooCommerce stores. Get started for FREE!"
                    keywords="retainful pricing plans, abandoned cart recovery, cart abandonment, shopify abandoned checkouts, woocommerce abandoned cart recovery"
                />
                <div className="pricing-banner-container">
                    <div className="intro-text-container">
                        <div className="container">
                            <h2>Start recovering abandoned carts in your store. Get started for Free!</h2>
                            <p>Choose your platform and get started in minutes</p>
                            <p>
                                <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer">Get started FREE</a>
                            </p>
                        </div>
                    </div>

                    <Pricing/>

                    <HomeTrutedCompanies/>

                    <FeaturedReviews/>

                    <div className="faq-block">
                        <div className="container">
                            <div className="included-faq-block">
                                <h3>FAQs: </h3>
                                <div className="row justify-content-center">
                                    {PricingPage.renderFaqs()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <GetStarted/>

                </div>
            </Layout>
        )
    }
}

export default PricingPage
