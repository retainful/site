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
                    title="CampaignRabbit Pricing - Automate your ecommerce email campaigns for an affordable price."
                    description="Start sending data-driven emails to your eCommerce customers for as low as $14 per month. Try CampaignRabbit for free for 30 days without providing your credit card."
                    keywords="ecommerce email marketing, email marketing pricing, email marketing cost, email marketing cost, email service platforms, best shopify email marketing, woocommerce email, campaignrabbit pricing"
                />
                <div className="pricing-banner-container">
                    <div className="intro-text-container text-center">
                        <div className="container-m">
                            <h3>Simple, transparent pricing.</h3>
                            <h2>Pay as you Grow</h2>
                            <p>Estimate your monthly cost based on your customers.</p>
                        </div>
                    </div>
                    <Pricing/>
                    <div className="container-m">
                        <div className="free-trail-block">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h3>Try Campaignrabbit for FREE for 30 days.</h3>
                                    <p>No credit card required – no risk</p>
                                </div>
                                <div className="col-sm-4"><a className="btn btn-primary" href="https://app.campaignrabbit.com/register" target="_blank" rel="noopener">Get Started FREE</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-block">
                        <div className="container-m">
                            <div className="included-faq-block">
                                <h3>Frequently Asked Questions</h3>
                                <div className="row">
                                    <div className="col-sm-6">

                                        <div className="faq-wrapper">
                                            <h4>How do estimate the number of customers?</h4>
                                            <p>Our pricing calculator takes into account the billing range at beginning of your billing cycle. If you cross a billing range, it will be accounted only in your next billing cycle.</p>
                                        </div>
                                        <div className="faq-wrapper">
                                            <h4>Do you have annual pricing plan?</h4>
                                            <p>At the moment, we do not have an annual billing plan. But if you have a large customer base and wanted to have a customized quote, feel free to <a href="mailto:support@campaignrabbit.com"> reach out to us!</a></p>
                                        </div>

                                        <div className="faq-wrapper">
                                            <h4>Do I have to pay separately for sending emails?</h4>
                                            <p>No. You will only for the number of customers you have. You can send unlimited emails.</p>
                                        </div>


                                    </div>
                                    <div className="col-sm-6">
                                        <div className="faq-wrapper">
                                            <h4>Do you have a free plan?</h4>
                                            <p>Yes! We do. Emails, popups are free for your first 100 customers. If your customer base did not cross 100, you can use it for free! But, we wanted you to grow with us!.</p>
                                        </div>
                                        <div className="faq-wrapper">
                                            <h4>What if I’m not happy?</h4>
                                            <p>We want you to love using Campaignrabbit, but if you don’t, you can cancel at any time — there’s no annual contract or commitment. Contact us and we’ll be happy to help.</p>
                                        </div>

                                        <div className="faq-wrapper">
                                            <h4>What payment methods do you accept?</h4>
                                            <p>If you are using WooCommerce or J2Store, we accept all credit cards. We use Stripe for processing the payment securely. If you are on Shopify, your Campaignrabbit charge will be added to your monthly Shopify invoice. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block bottom">
                        <div className="container-m">
                            <div className="included-feature-block">
                                <h3>Included features</h3>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/users.png`} /></p>
                                            <h4>Unlimited Contacts</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/emails.png`} /></p>
                                            <h4>Unlimited Emails</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/marketing-automation.png`} /></p>
                                            <h4>Marketing Automation</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/shopping-cart.png`} /></p>
                                            <h4>Abandoned Cart Recovery Emails</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/call-to-action.png`} /></p>
                                            <h4>Call to action</h4>
                                            <p>Opt-ins, Popups, Sliders, Actions bars</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/product-recommend.png`} /></p>
                                            <h4>Product Recommendations</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/newsletter.png`} /></p>
                                            <h4>Welcome Emails</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/segmentation.png`} /></p>
                                            <h4>Customer Segmentation</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/mail-builder.png`} /></p>
                                            <h4>Visual Email Builder</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/data-driven.png`} /></p>
                                            <h4>Data driven Automation</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/analytics.png`} /></p>
                                            <h4>Analytics and Reporting</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="feature-wrapper">
                                            <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/integrations.png`} /></p>
                                            <h4>Integrations</h4>
                                            <p>WooCommerce, J2Store, Shopify</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-m">
                        <div className="free-trail-block">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h3>Start your free 30-day trial now!</h3>
                                    <p>No credit card required – no risk</p>
                                </div>
                                <div className="col-sm-4"><a className="btn btn-primary" href="https://app.campaignrabbit.com/register" target="_blank" rel="noopener">Start free trial</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default PricingPage
