import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo';
import HomeScreenshots from '../../constants/featuresScreenshots';

const FeaturesPage = () => (
    <Layout>
        <SEO title="Send WooCommerce next order coupons & abandoned cart recovery email" description="Automate WooCommerce cart abandoned recovery emails and send next order coupons. Recover your WooCommerce lost sales and increase your revenue instantly." keywords={[`woocommerce next order coupon`, `woocommerce abandoned cart recovery emails`, `recover woocommerce abandoned cart`, `retainful woocommerce features`]}/>  
          <div className="features-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Grow your WooCommerce Revenue!</h3>
                        <p>Retainful increases WooCommerce sales by driving repeated purchases and also encourages customers to instantly buy the abandoned cart items.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <p><img src="https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png" alt="woocommerce"/></p>
                            <p><a className="btn-action btn-edge btn-lg"
                                  href="https://downloads.wordpress.org/plugin/retainful-next-order-coupon-for-woocommerce.1.1.5.zip"
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
                        <h3>Automate Cart Recovery emails
                        </h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Trigger timely cart recovery emails</h4>
                        <p>No more manual emailing. Schedule and automate cart recovery email reminders in a well-timed sequence. Stop sending email reminder automatically when the cart is recovered.</p>
                    </div>
                    <div className="features-list">
                        <h4>Unlimited Email templates</h4>
                        <p>Send unlimited number of personalized recovery emails. Share a single-click product recovery link so that your customers can easily recover the abandoned cart items.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Live Cart Notifications</h4>
                        <p>View your WooCommerce cart live and see list of customers using the cart. Receive a notification when customer recovers cart.</p>
                    </div>
                    <div className="features-list">
                        <h4>Compare Cart Values</h4>
                        <p>Compare abandoned cart value and recovered cart value to know how much you earned using the recovery email campaign.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Next order Coupon Generator</h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Unique Coupon Codes</h4>
                        <p>Generate unique Next order discount codes for every customer and sent it via order emails after their successful purchase.</p>
                    </div>
                    <div className="features-list">
                        <h4>Advanced WooCommerce coupons</h4>
                        <p>Create advanced coupon codes using the coupon settings. Offer both percentage and flat price coupons. Add user restriction and coupon restrictions per user.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Trigger FOMO</h4>
                        <p>Set validity for the coupon codes. Time-limited coupons drive customers to instantly shop at your WooCommerce store.</p>
                    </div>
                    <div className="features-list">
                        <h4>Auto apply coupon</h4>
                        <p>Customers don’t want to copy and paste coupon codes. Clicking on the coupon code automatically applies the coupon to the customer cart.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Actionable Analytics & Insights
                        </h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Extensive Dashboard</h4>
                        <p>Get useful analytics on your sales conversions, WooCommerce revenue, customer insights, cart recovery email performance.</p>
                    </div>
                    <div className="features-list">
                        <h4>Track Sale Conversions</h4>
                        <p>Track real-time WooCommerce sale conversions and compare the values of the recovered cart and abandoned carts.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Actionable Customer Insights</h4>
                        <p>Get the list of successful conversions using the next order coupon codes. Track customers who have opened and who haven’t opened the coupon/ cart recovery emails.</p>
                    </div>
                    <div className="features-list">
                        <h4>Clean Revenue report</h4>
                        <p>Get real-time data on how much revenue you made using Next order coupons and Abandoned cart recovery email campaigns.</p>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="how-it-works">*/}
            {/*<div className="container">*/}
                {/*<div className="flex-intro align-center">*/}
                    {/*<h2>How it Works ?</h2>*/}
                {/*</div>*/}
                {/*<div className="card">*/}
                    {/*<div className="card-body">*/}
                        {/*<h4><span>1</span> Install & Connect your store</h4>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="card">*/}
                    {/*<div className="card-body">*/}
                        {/*<h4><span>2</span> Automate Cart recovery email campaigns</h4>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="card">*/}
                    {/*<div className="card-body">*/}
                        {/*<h4><span>3</span> Generate Next order Coupon codes</h4>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="card">*/}
                    {/*<div className="card-body">*/}
                        {/*<h4><span>4</span> Profit!</h4>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                    {/*<div className="col-md-6">*/}
                        {/*<div className="card">*/}
                            {/*<div className="card-body">*/}
                                {/*<h4><span>1</span> Install & Connect your store</h4>*/}
                                {/*<p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6">*/}
                        {/*<div className="card">*/}
                            {/*<div className="card-body">*/}
                                {/*<h4><span>2</span> Automate Cart recovery email campaigns</h4>*/}
                                {/*<p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6">*/}
                        {/*<div className="card">*/}
                            {/*<div className="card-body">*/}
                                {/*<h4><span>3</span> Generate Next order Coupon codes</h4>*/}
                                {/*<p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6">*/}
                        {/*<div className="card">*/}
                            {/*<div className="card-body">*/}
                                {/*<h4><span>4</span> Profit!</h4>*/}
                                {/*<p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}


        {/*<HomeScreenshots/>*/}
        <div id="pricing" className="pricing-section text-center">
            <div className="container">
                <div className="pricing-intro wow fadeInDown">
                    <h3>Retain & Grow your WooCommerce Business Smart</h3>
                    <p>
                        <a className="btn-action btn-lg" href="https://downloads.wordpress.org/plugin/retainful-next-order-coupon-for-woocommerce.1.1.5.zip" target="_blank" rel="noopener noreferrer">Download Retainful</a>
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)

export default FeaturesPage
