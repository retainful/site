import React from 'react'
import {Link} from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo';
import FeatureIcon from '../../images/features-icon-sample.png';

const FeaturesPage = () => (
    <Layout>
        <SEO title="Shopify Abandoned Cart Recovery Email Plugin Features"
             description="Let your customers recover abandoned carts in a single click in your Shopify store. Automatically send a series of email follow-ups to recover lost sales. Also send unique, single-use coupons for next purchases automatically."
             keywords={[`shopify abandoned cart plugin`, `shopify abandoned cart recovery emails`, `shopify email follow-ups`, `shopify next order coupon`, `recover shopify abandoned carts`, `retainful shopify features`]}/>
        <div className="features-banner shopify">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="feature-content">
                            <h3>Grow your Shopify Revenue!</h3>
                            <p>Retainful increases Shopify sales by driving repeated purchases and also encourages
                                customers to instantly buy the abandoned cart items.</p>
                            <p><a className="btn-action btn-edge btn-lg"
                                  href={`${process.env.GATSBY_WOOCOMMERCE_PLUGIN_URL}`}
                                  target="_blank" rel="noopener noreferrer">Get started</a></p>
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
                        <h4>Trigger timely cart recovery emails</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Live Cart Notifications</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Advanced Shopify coupons</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Auto apply coupon</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Unique Coupon Codes</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Trigger FOMO</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Auto apply coupon</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Unique Coupon Codes</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <img className="features-img" src={FeatureIcon} alt="features-img"/>
                        <h4>Trigger FOMO</h4>
                        <p>View your Shopify cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-download-section text-center">
            <div className="container features-download-intro wow fadeInDown">
                <h3>Retain & Grow your Shopify<br/> Business Smart</h3>
                <p>
                    <a className="btn-action btn-lg" href={`${process.env.GATSBY_WOOCOMMERCE_PLUGIN_URL}`}
                       target="_blank" rel="noopener noreferrer">Download Retainful</a>
                </p>
            </div>
        </div>
    </Layout>
)

export default FeaturesPage
