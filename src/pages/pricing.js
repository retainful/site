import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import Pricing from '../components/pricing'
import $ from 'jquery'

class PricingPage extends React.Component {
    render() {
        return (
            <Layout>
                <MetaTags
                    title="Retainful Pricing - Automate your ecommerce email campaigns for an affordable price."
                    description="Start sending data-driven emails to your eCommerce customers for as low as $14 per month. Try Retainful for free for 30 days without providing your credit card."
                    keywords="ecommerce email marketing, email marketing pricing, email marketing cost, email marketing cost, email service platforms, best shopify email marketing, woocommerce email, retainful pricing"
                />
                <div className="pricing-banner-container">
                    <div className="intro-text-container">
                        <div className="container">
                            <h2>All the tools you need <br/>
                                in one workspace.</h2>
                            <p>Estimate your monthly cost based on your customers.</p>
                        </div>
                    </div>

                    <Pricing/>

                    <div className="faq-block">
                        <div className="container">
                            <div className="included-faq-block">
                                <h3>FAQ</h3>
                                <div className="row">
                                    <div className="col-sm-7">
                                        <div className="faq-wrapper">
                                            <h4>How do estimate the number of customers?</h4>
                                            <p>Our pricing calculator takes into account the billing range at beginning of your billing cycle. If you cross a billing range, it will be accounted only in your next billing cycle.</p>
                                        </div>
                                        <div className="faq-wrapper">
                                            <h4>Do you have annual pricing plan?</h4>
                                            <p>At the moment, we do not have an annual billing plan. But if you have a large customer base and wanted to have a customized quote, feel free to <a href="mailto:support@Retainful.com"> reach out to us!</a></p>
                                        </div>

                                        <div className="faq-wrapper">
                                            <h4>Do I have to pay separately for sending emails?</h4>
                                            <p>No. You will only for the number of customers you have. You can send unlimited emails.</p>
                                        </div>


                                    </div>
                                    <div className="col-sm-7">
                                        <div className="faq-wrapper">
                                            <h4>Do you have a free plan?</h4>
                                            <p>Yes! We do. Emails, popups are free for your first 100 customers. If your customer base did not cross 100, you can use it for free! But, we wanted you to grow with us!.</p>
                                        </div>
                                        <div className="faq-wrapper">
                                            <h4>What if I’m not happy?</h4>
                                            <p>We want you to love using Retainful, but if you don’t, you can cancel at any time — there’s no annual contract or commitment. Contact us and we’ll be happy to help.</p>
                                        </div>

                                        <div className="faq-wrapper">
                                            <h4>What payment methods do you accept?</h4>
                                            <p>If you are using WooCommerce or J2Store, we accept all credit cards. We use Stripe for processing the payment securely. If you are on Shopify, your Retainful charge will be added to your monthly Shopify invoice. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default PricingPage
