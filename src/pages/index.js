import React from 'react'
import {Link} from 'gatsby'
import { FaTimes, FaCheck, FaGift, FaDownload, FaFilter, FaDollarSign } from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'

import bannerLogo from '../images/retainful-coupon-03.png'
import customerBanner from '../images/retainful-customers.png'

//import home page components
import HomeBanner from '../constants/HomePage/homeBanner';
import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';
import HomeCards from '../constants/HomePage/homeCards';
import HomeFeatures from '../constants/HomePage/homeFeatures';
import HomeScreenshots from '../constants/HomePage/homeScreenshots';
import PricingTable from '../components/pricing'
import merock from "../images/reviews/merock.jpeg";
import LukeCavanagh from "../images/reviews/Luke-Cavanagh.jpeg";
import Logo from "../images/retainful-logo.png";

const IndexPage = () => (
    <Layout className="home-page">
        <SEO title="Abandoned Cart Recovery Emails for WooCommerce and Shopify | Retainful" description="Retainful helps you recover abandoned carts in your WooCommerce and Shopify stores. Automatically send a sequence of emails when customers abandon their carts. Drive repeat purchases by sending unique coupon codes for next orders"
             keywords={[`abandoned cart recovery`, `WooCommerce Abandoned Cart recovery emails`, `ecommerce customer retention`,`woocommerce followup emails`, `next order coupons`, `shopify abandoned cart recovery`, `shopify abandoned cart analytics`]}/>

        <HomeBanner/>

        <HomeTrutedCompanies />

        <HomeFeatures/>

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
                                    <span>Luke Cavanagh</span>
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

        <div className="home-download-section text-center">
            <div className="container">
                <h3>Get Started in Minutes</h3>
                <p>More Orders, More Revenue</p>
                <p>
                    <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer">SignUp Now</a>
                </p>
                <p><small>*<strong>No Credit Card</strong> is required</small></p>
            </div>
        </div>

    </Layout>
);

export default IndexPage
