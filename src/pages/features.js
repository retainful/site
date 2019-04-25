import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FeaturesPage = () => (
    <Layout>
        <SEO title="Features" />
        <div className="container">
            <div className="text-center">
                <h3>WooCommerce</h3>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3>Increase your WooCommerce Orders</h3>
                    <p>Generate and send unique coupon codes that can be used by the customer for the next purchase in your WooCommmerce Store.</p>
                </div>
                <div className="col-md-6">
                    <p><img src="https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png" alt="woocommerce"/></p>
                    <p><a className="btn-action btn-edge"
                          href="https://wordpress.org/plugins/retainful-next-order-coupon-for-woocommerce/"
                          target="_blank" rel="noopener noreferrer">Download Free Plugin</a></p>
                </div>
            </div>
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
                        <h3>Abandoned cart recovery emails</h3>
                    </div>
                </div>
            </div>
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
                        <h3>Abandoned cart recovery emails</h3>
                    </div>
                </div>
            </div>
        </div>
        <div id="how-it-works" className="intro flex-split wow fadeIn">
            <div className="container">
                <div className="flex-intro align-center">
                    <h2>How it Works ?</h2>
                    <ol>
                        <li>Install and Connect your store</li>
                        <li>Set up the discount.</li>
                        <li>Customers get a unique coupon code for next
                        purchase (within his order email itself)
                        </li>
                        <li><span className="highlight">Profit!</span></li>
                    </ol>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4><span>1</span> Install & Activate the Plugin</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                    <div className="col-md-6">
                        <h4><span>2</span> Connect your store</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                    <div className="col-md-12">
                        <h4><span>3</span> Setup Abandoned cart recovery email campaigns and next order coupons</h4>
                        <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default FeaturesPage
