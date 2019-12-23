import React from 'react'
import {Link} from 'gatsby'
import { FaTimes, FaCheck, FaGift, FaDownload, FaFilter, FaDollarSign } from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'
import CookieConsent from "../components/cookieconsent";

import bannerLogo from '../images/retainful-coupon-03.png'
import customerBanner from '../images/retainful-customers.png'

//import home page components
import HomeBanner from '../constants/HomePage/homeBanner';
import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';
import HomeCards from '../constants/HomePage/homeCards';
import HomeFeatures from '../constants/HomePage/homeFeatures';
import HomeScreenshots from '../constants/HomePage/homeScreenshots';
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import Logo from "../images/retainful-logo.png";

const IndexPage = () => (
    <Layout className="home-page">
        <SEO title="Abandoned Cart Recovery Emails for WooCommerce and Shopify | Retainful" description="Recover abandoned carts and drive 10x more repeat purchases in your WooCommerce and Shopify stores. Automatically send a sequence of emails when customers abandon their carts. Drive repeat purchases by sending unique coupon codes for next orders"
            keywords={[`abandoned cart recovery`, `WooCommerce Abandoned Cart recovery emails`, `ecommerce customer retention`,`woocommerce followup emails`, `next order coupons`, `shopify abandoned cart recovery`, `shopify abandoned cart analytics`]}/>

        <HomeBanner/>

        <HomeTrutedCompanies />

        <HomeFeatures/>

        <FeaturedReviews/>
        <GetStarted/>

        <div class="row d-flex justify-content-center">
                <CookieConsent className="container" style={{borderRadius:'5px' }}  
                buttonStyle={{color:"Black", fontWeight: "bolder",borderRadius:'5px'}}>
                    <p>We use cookies to improve your experience on our website.</p>
                </CookieConsent>
        </div>
    </Layout>
);

export default IndexPage
