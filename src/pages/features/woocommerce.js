import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo';
import HomeScreenshots from '../../constants/featuresScreenshots';

const FeaturesPage = () => (
    <Layout>
        <SEO title="Features" />
        <div className="features-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Grow your WooCommerce Revenue!</h3>
                        <p>Retainful increases your WooCommerce sales order by driving repeated purchases and also encourages customers to instantly buy the abandoned cart items.</p>
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
                        <h3>Automate Abandoned Cart Recovery
                            email reminders
                        </h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Timely triggered recovery emails</h4>
                        <p>Schedule and automate cart recovery emails in a well-timed sequence. And stops sending email reminder automatically when the cart is recovered.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Unlimited Email templates</h4>
                        <p>Draft an unlimited number of personalized recovery emails. Also, add a unique product link to recover the abandoned cart item.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Unique coupon codes</h4>
                        <p>Generate unique Next order discount codes for every customer and sent it via order emails after their successful purchase.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Trigger FOMO</h4>
                        <p>Creating a time-limited coupon discount triggers FOMO and drives customers to quickly shop at your online WooCommerce store.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Next order Coupon code Generator</h3>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Track your Conversions & Revenue in Real-time
                        </h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Data-rich Dashboard</h4>
                        <p>Track useful customer insights like order/recovery email open, list of customers who got converted using Next order coupons and cart recovery emails.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Measure Revenue</h4>
                        <p>Get real-time data on how much revenue you made using Next order coupons and Abandoned cart recovery email campaigns.</p>
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
                                <h4><span>1</span> Install & Connect your store</h4>
                                <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4><span>2</span> Automate Cart recovery email campaigns</h4>
                                <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4><span>3</span> Generate Next order Coupon codes</h4>
                                <p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4><span>4</span> Profit!</h4>
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
