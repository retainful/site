import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import Pricing from '../components/pricing'
import $ from 'jquery'

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';
import PricingFaq from '../constants/FAQ';

import merock from "../images/reviews/merock.jpeg";
import LukeCavanagh from "../images/reviews/Luke-Cavanagh.jpeg";

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
                    title="Retainful Pricing - Automate your ecommerce email campaigns for an affordable price."
                    description="Start sending data-driven emails to your eCommerce customers for as low as $14 per month. Try Retainful for free for 30 days without providing your credit card."
                    keywords="ecommerce email marketing, email marketing pricing, email marketing cost, email marketing cost, email service platforms, best shopify email marketing, woocommerce email, retainful pricing"
                />
                <div className="pricing-banner-container">
                    <div className="intro-text-container">
                        <div className="container">
                            <h2>All the tools you need <br/>
                                in one workspace.</h2>
                            <p>Choose a plan for your platform.</p>
                        </div>
                    </div>

                    <Pricing/>

                    <HomeTrutedCompanies/>

                    <div className="customer-reviews-section">
                        <div className="container">
                            <div className="reviews-intro">
                                <h3>See why 1000+ customers love using Retainful</h3>
                            </div>
                            <div className="customer-reviews">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="customer-review">
                                            <h4>Great Next Order plugin option</h4>
                                            <p>It works great, a well-done plugin with a fast support team.</p>
                                            <div className="customer-meta">
                                                <img src={merock} alt="merock"/>
                                                <span>merock</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="customer-review">
                                            <h4>Easy to use plugin for abandoned cart</h4>
                                            <p>Clean plugin settings and the app is very each to use.</p>
                                            <div className="customer-meta">
                                                <img src={LukeCavanagh} alt="Luke Cavanagh"/>
                                                <span>Luke Cavanagh (LiquidWeb)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="m-t-15">
                                    <Link className="btn-link" to="/reviews">
                                        See more reviews
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

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
                </div>
            </Layout>
        )
    }
}

export default PricingPage
