import React from 'react'
import { FaTimes, FaCheck, FaGift, FaDownload, FaFilter, FaDollarSign } from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'

import bannerLogo from '../images/retainful-coupon-03.png'
import customerBanner from '../images/retainful-customers.png'

//import home page components
import HomeBanner from '../constants/HomePage/homeBanner';
import HomeCards from '../constants/HomePage/homeCards';
import HomeFeatures from '../constants/HomePage/homeFeatures';
import HomeScreenshots from '../constants/HomePage/homeScreenshots';
import PricingTable from '../components/pricing'

const IndexPage = () => (
    <Layout>
        <SEO title="Retainful-  The FREE conversion tool for your WooCommerce & Shopify stores." description="RetainFul increases your eCommerce revenue by recovering the lost sales in your abandoned carts & drive repeated sales by generating unique Next order coupon codes."
             keywords={[`Send Unique Coupon Codes`]}/>

        <HomeBanner/>
        {/*<HomeCards/>*/}
        {/*<div id="intro" className="intro flex-split wow fadeIn">*/}
            {/*<div className="container-s">*/}
                {/*<div className="flex-intro align-center">*/}
                    {/*<h2>What is Retainful ?</h2>*/}
                    {/*<p>*/}
                        {/*Retainful is a Magic Boomerang to <span className="highlight">retain your customers & drives repeated sales</span> for your eCommerce business. It is a simple, easiest way to create Next order coupon codes for your online store.*/}
                    {/*</p>*/}
                    {/*<p>Just install the plugin and connect your store in a single step. You are ready to Retain!</p>*/}
                    {/*<p><a href="#features" className="scroll-down">How to Retain Customers…</a></p>*/}
                    {/*<p>Retainful is a Magic email tool to recover lost sales from abandoned carts. It is the most simple and efficient way to remind and help customers to instantly recover abandoned cart items.</p>*/}
                    {/*<p>Just install the email automation tool and sync your online store in a single click. You are ready to Recover the lost revenue!</p>*/}
                    {/*<p><a href="#features" className="scroll-down">How to Recover Lost Sales…</a></p>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}
        {/*<div className="yd-ft wow fadeIn">*/}
            {/*<div className="yd-ft-inner">*/}
                {/*<div className="yd-ft-left">*/}
                    {/*<h2>Why Retainful?</h2>*/}
                    {/*<p>Retainful can grow your eCommerce business smart coz’ Retainful is a conversion tool designed primarily to prove the following statistics right.*/}
                    {/*</p>*/}
                    {/*<ul>*/}
                        {/*<li>Save More with Customer Retention - Save 5x times the money you spent on generating new buyers</li>*/}
                        {/*<li>Sell More with Next order Coupons- 7/10 of your existing customers will purchase instantly using personalized coupons</li>*/}
                        {/*<li>Earn More with Automated email remarketing - Recover 30% of Lost sales from abandoned cart recovery emails</li>*/}
                    {/*</ul>*/}
                    {/*<a href="https://app.retainful.com/" className="btn-action btn-edge" target="_blank"*/}
                       {/*rel="noopener noreferrer">Grow Smart</a>*/}
                {/*</div>*/}
                {/*<div className="yd-ft-right">*/}
                    {/*<img src={customerBanner} alt="retainful-customers"/>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}
        <HomeFeatures/>

        {/*<HomeScreenshots/>*/}

        {/*<div id="pricing" className="pricing-section text-center">*/}
            {/*<div className="container">*/}
                {/*<div className="pricing-intro wow fadeInDown">*/}
                    {/*<h3>Get Started in Minutes</h3>*/}
                    {/*<p>More Orders, More Revenue</p>*/}
                    {/*<p>*/}
                        {/*<a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer">SignUp Now</a>*/}
                    {/*</p>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}


        {/*<div id="how-it-works" className="intro flex-split wow fadeIn">*/}
            {/*<div className="container-s">*/}
                {/*<div className="flex-intro align-center">*/}
                    {/*<h2>How it Works ?</h2>*/}
                    {/*<ol>*/}
                        {/*<li><span className="icon"><FaDownload/></span> Install and Connect your store</li>*/}
                        {/*<li><span className="icon"><FaFilter/></span> Set up the discount.</li>*/}
                        {/*<li><span className="icon"><FaGift/></span> Customers get a unique coupon code for next*/}
                            {/*purchase (within his order email itself)*/}
                        {/*</li>*/}
                        {/*<li><span className="icon"><FaDollarSign/></span> <span className="highlight">Profit!</span></li>*/}
                    {/*</ol>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}
        {/*<div id="features" className="features wow fadeInDown">*/}
            {/*<div className="container-m">*/}
                {/*<div className="row text-center">*/}
                    {/*<div className="col-md-12">*/}
                        {/*<div className="features-intro">*/}
                            {/*<h2>*/}
                                {/*Retainful gives you a unique set of tools <br className="hidden-xs"/> to retain your*/}
                                {/*customers and <br className="hidden-xs"/>*/}
                                {/*<span className="highlight">increase revenue per customer.</span>*/}
                            {/*</h2>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6 col-sm-12">*/}
                        {/*<div className="feature-list">*/}
                            {/*<div className="card-text">*/}
                                {/*<h3>Unique Coupons</h3>*/}
                                {/*<p>Include a unique coupon code towards <span className="highlight">the next purchase in the order notification email itself</span>.*/}
                                    {/*Order emails have a better open rate than the promotional emails.</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6 col-sm-12">*/}
                        {/*<div className="feature-list">*/}
                            {/*<div className="card-text">*/}
                                {/*<h3>Percentage or Fixed</h3>*/}
                                {/*<p>The coupon can be a <span className="highlight">percentage or a fixed value</span>.*/}
                                    {/*You can decide it in the plugin settings.</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6 col-sm-12">*/}
                        {/*<div className="feature-list">*/}
                            {/*<div className="card-text">*/}
                                {/*<h3>Automatic Code Generation</h3>*/}
                                {/*<p>Retainful <span className="highlight">generates the code instantly and sends it to the customers</span>.*/}
                                    {/*You don’t have to use the same code for everyone. Also, you don't have to juggle*/}
                                    {/*between thousands of coupon codes. Retainful takes care of all these for you</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6 col-sm-12">*/}
                        {/*<div className="feature-list">*/}
                            {/*<div className="card-text">*/}
                                {/*<h3>Analytics & Insights</h3>*/}
                                {/*<p>Get a real-time insight into the performance of your emails. See <span*/}
                                    {/*className="highlight">how much revenue you got from repeat purchases</span> with*/}
                                    {/*Retainful. Also get a list of customers who got converted. Even you can see who have*/}
                                    {/*opened the emails that have a next purchase coupon code.</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}

        {/*<div className="yd-reviews">*/}
            {/*<div className="container-m">*/}
                {/*<div className="row">*/}
                    {/*<div className="col-md-6">*/}
                        {/*<h2>Major Problems with other plugins</h2>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon times">*/}
                                {/*<FaTimes/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>Complicated setup</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon times">*/}
                                {/*<FaTimes/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>No unique codes are used. Mostly static codes</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon times">*/}
                                {/*<FaTimes/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>No analytics or insights</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon times">*/}
                                {/*<FaTimes/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>Does not integrate with defaul emails. (Seperate promo emails are sent which result*/}
                                    {/*in low open rate)</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6">*/}
                        {/*<h2>Retainful is simple, easiest solution</h2>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon check">*/}
                                {/*<FaCheck/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>Simple setup. Just connect, set up discount percentage or value</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon check">*/}
                                {/*<FaCheck/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>Automatic generation of unique codes (each customer gets a unique code for next*/}
                                    {/*purchase)</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon check">*/}
                                {/*<FaCheck/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>Real-time Analytics and Insights. See how much revenue generated</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon check">*/}
                                {/*<FaCheck/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>Automatically applies the code when customer clicks and visit the shop from the*/}
                                    {/*email. Less friction</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="rf-list">*/}
                            {/*<div className="ar-icon check">*/}
                                {/*<FaCheck/>*/}
                            {/*</div>*/}
                            {/*<div className="ar-text">*/}
                                {/*<h3>Flexibility in applying the code and validating</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}

    </Layout>
);

export default IndexPage
