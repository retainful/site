import React from 'react'
import {FaTimes, FaCheck, FaGift, FaDownload, FaFilter, FaDollarSign} from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/getstarted'
import merock from '../images/reviews/merock.jpeg'
import LukeCavanagh from '../images/reviews/Luke-Cavanagh.jpeg'


const IndexPage = () => (
    <Layout>
        <SEO title="Our Customers | Retainful"
             description="Companies big and small trust Retainful to recover abandoned carts and drive repeat purchases"
             keywords={[`abandoned cart recovery`, `WooCommerce Abandoned Cart recovery emails`, `ecommerce customer retention`, `woocommerce followup emails`, `next order coupons`, `shopify abandoned cart recovery`, `shopify abandoned cart analytics`]}/>

        <div className="review-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="text-center">
                            <img className="img-fluid"
                                 src={`${process.env.GATSBY_RF_MEDIA_URL}/home-banner-illustration.png`}
                                 alt="shopify-banner-illustration"/>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="feature-content">
                            <h3>Customer Reviews!</h3>
                            <p>Companies big and small trust Retainful to recover abandoned carts and drive repeat purchases.</p>
                            <p>Want to try it out? Start for free!</p>
                            <p><a className="btn-action btn-edge btn-lg"
                                  href={`${process.env.GATSBY_WOOCOMMERCE_PLUGIN_URL}`}
                                  target="_blank" rel="noopener noreferrer">Get started Free</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="customer-reviews-section">
            <div className="container">
                <div className="customer-reviews">
                    <div className="row justify-content-left">
                        <div className="col-md-7">
                            <div className="customer-review">
                                <h4>Great Next Order plugin option</h4>
                                <p>It works great, a well-done plugin with a fast support team.</p>
                                <div className="customer-meta">
                                    <img src={merock} alt="merock"/>
                                    <span>merock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-right">
                        <div className="col-md-7">
                            <div className="customer-review">
                                <h4>Easy to use plugin for abandoned cart</h4>
                                <p>Clean plugin settings and the app is very each to use.</p>
                                <div className="customer-meta">
                                    <img src={LukeCavanagh} alt="Luke Cavanagh"/>
                                    <span>Luke Cavanagh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-left">
                        <div className="col-md-7">
                            <div className="customer-review">
                                <h4>This plugin is working well</h4>
                                <p>This product has worked great for our business and has allowed us to convert customers that we most likely would not have. It’s very easy to set up and the plugin provides tremendous support if needed.</p>
                                <div className="customer-meta">
                                    <span> - bourji71</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <GetStarted/>

    </Layout>
);

export default IndexPage
