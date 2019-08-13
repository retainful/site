import React from 'react'
import {Link} from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo';
import FeatureIcon from '../../../images/features-icon-sample.png';

const FeaturesPage = () => (
    <Layout>
        <SEO title="Recovery Abandoned Carts and Drive Repeat Purchases in your Shopify Store"
             description="Let your customers recover abandoned carts in a single click in your Shopify store. Automatically send a series of email follow-ups to recover lost sales. Also send unique, single-use coupons for next purchases automatically."
             keywords={[`shopify abandoned cart plugin`, `shopify abandoned cart recovery emails`, `shopify email follow-ups`, `shopify next order coupon`, `recover shopify abandoned carts`, `retainful shopify features`]}/>
        <div className="features-banner shopify">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="feature-content">
                            <h3>Grow your Shopify Revenue!</h3>
                            <p>Recover Abandoned Carts and Drive Repeat Sales.</p>
                            <p>Customize all your store notification emails, and match your branding</p>
                            <p><a className="btn-action btn-edge btn-lg"
                                  href={`${process.env.GATSBY_WOOCOMMERCE_PLUGIN_URL}`}
                                  target="_blank" rel="noopener noreferrer">Get started Free</a></p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="text-center">
                            <img className="img-fluid"
                                 src={`${process.env.GATSBY_RF_MEDIA_URL}/home-banner-illustration.png`}
                                 alt="shopify-banner-illustration"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-container container shopify">
            <div className="text-center">
                <h5>Features</h5>
                <h3>Simple and Powerful</h3>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Recover Abandoned Carts</h4>
                        <p>Trigger a series of well-timed cart recovery emails automatically. Say goodbye to manual emails. Recover every abandoned checkout and boost your revenue.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Send unlimited recovery emails</h4>
                        <p>Send as many recovery email reminders as you wanted. Set up an automatic drip campaign that sends cart recovery emails at pre-defined intervals automatically.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Ready-made Email Templates</h4>
                        <p>Get started in minutes. Retainful comes with pre-built, high converting email templates for abandoned cart recovery. So get started fast.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Drag and Drop Visual Email Builder</h4>
                        <p>Create beautiful, responsive emails using our visual email builder. Just drag and drop to create perfect emails, which work even in outlook.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Personalization</h4>
                        <p>Personalize the abandoned cart recovery emails and increase the conversions. Let the customer know that they are special.</p>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Analytics and Reporting</h4>
                        <p>Track and measure the conversions. Know your revenue through conversions, check your cart abandonment rate and get more actionable insights for your store.</p>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Drive repeat sales</h4>
                        <p>Send unique coupon codes for the next purchase within the order notification email itself. Let the customers come back and purchase more.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Customize Store Emails</h4>
                        <p>Upgrade your Shopify email templates. Customize the notifications to reflect your branding. Send beautiful, responsive email notifications</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Priority support</h4>
                        <p>We have got you covered. Receive a world-class priority support from our customer success team.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-download-section text-center">
            <div className="container features-download-intro wow fadeInDown">
                <h3>Recover Abandoned Carts & Drive Repeat Sales. <br/> Grow your Shopify Sales</h3>
                <p>Start sending targeted email reminders and recover every single cart</p>
                <p>
                    <a className="btn-action btn-lg" href="https://app.retainful.com"
                       target="_blank" rel="noopener noreferrer">Get Started Free</a>
                </p>
                <small>*No credit card required.</small>
            </div>
        </div>
    </Layout>
)

export default FeaturesPage