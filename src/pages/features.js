import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo';
import HomeScreenshots from '../constants/featuresScreenshots';

const FeaturesPage = () => (
    <Layout>
        <SEO title="Features" />
        <div className="features-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Increase your WooCommerce Orders</h3>
                        <p>Generate and send unique coupon codes that can be used by the customer for the next purchase in your WooCommmerce Store.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <p><img src="https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png" alt="woocommerce"/></p>
                            <p><a className="btn-action btn-edge btn-lg"
                                  href="https://wordpress.org/plugins/retainful-next-order-coupon-for-woocommerce/"
                                  target="_blank" rel="noopener noreferrer">Download Free Plugin</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-container container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Abandoned cart recovery emails</h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Heading 1</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Heading 2</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Heading 1</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Heading 2</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Generate Next order discount coupons</h3>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Track your conversions</h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Heading 1</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Heading 2</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="how-it-works">
            <div className="container">
                <div className="flex-intro align-center">
                    <h2>How it Works ?</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4><span>1</span> Install & Activate the Plugin</h4>
                                <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4><span>2</span> Connect your store</h4>
                                <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4><span>3</span> Setup Abandoned cart recovery email campaigns and next order coupons</h4>
                                <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <HomeScreenshots/>
        <div id="pricing" className="pricing-section text-center">
            <div className="container">
                <div className="pricing-intro wow fadeInDown">
                    <h3>Retain your WooCommerce Business & Grow</h3>
                    <p>
                        <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer">Download Retainful</a>
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)

export default FeaturesPage
