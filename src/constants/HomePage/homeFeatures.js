import React from 'react';
import {Link} from 'gatsby'
import bannerLogo from "../../images/retainful-coupon-03.png";

const HomeFeatures = () =>(
    <div className="home-features-container">
        <div className="container">
            <div className="text-center">
                <h3>How Retainful makes your Business Smart for <span className="highlight">FREE?</span></h3>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Abandoned Cart Recovery Emails</h3>
                        <p>Retainful gives you a unique set of tools to retain your customers and increase revenue per customer.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Unique Coupons</h4>
                        <p>Include a unique coupon code for the next purchase in the order notification email itself. Order emails have a better open rate than promotional emails.</p>
                    </div>
                    <div className="features-list">
                        <h4>Analytics & Insights</h4>
                        <p>Get real-time insight into the performance of your emails. See how much revenue you got from repeat purchases with Retainful. Also, get a list of customers who got converted. Even you can see who have opened the emails that have a next purchase coupon code.</p>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Percentage or Fixed</h4>
                        <p>The Next order coupon can be a percentage coupon or a fixed value coupon. Create advanced coupon discounts by setting user and coupon conditions.</p>
                    </div>
                    <div className="features-list">
                        <h4>Automatic Coupon Code Generation</h4>
                        <p>Retainful generates the coupon codes instantly and emails it to the customers. You don’t have to use the same code for everyone & you don't have to juggle between thousands of coupon codes.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Next Order Discount Coupons</h3>
                        <p>Retainful is the best tool to automate cart recovery emails and recover lost sales.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Automated Cart recovery email</h4>
                        <p>Send cart recovery email reminders whenever a customer abandons the online cart. You can both schedule and automate series of timed cart recovery email reminders. No need to send emails manually. Also, email reminders are automatically stopped when the cart is recovered.</p>
                    </div>
                    <div className="features-list">
                        <h4>Create Personalised Cart recovery emails</h4>
                        <p>Use shortcodes to add customer details, cart summary and personalize all your cart recovery emails.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Unique Link to recover abandoned cart item</h4>
                        <p>Add a unique recovery link along with cart recovery email. The customers can easily buy the items in the abandoned cart by just clicking on the recovery link.</p>
                    </div>
                    <div className="features-list">
                        <h4>Reports and Insights</h4>
                        <p>Get the extensive reports on the abandoned cart value, recovered cart value and also see the real-time cart of customers who are purchasing at your online store in the very moment.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Track Real-Time Analytics & Insights</h3>
                        <p>With Retainful, you get a featured dashboard to track analytics, conversions and customer insights.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Email Performance</h4>
                        <p>Analyze how your next order & cart recovery email campaigns perform. Email metric like open rate and email click-through rate will help create better email campaigns.</p>
                    </div>
                    <div className="features-list">
                        <h4>Measure Revenue</h4>
                        <p>Measure how much you earn. Get the detailed numbers on how much revenue is made from Cart recovery email campaign and Next order coupon code campaign.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Track Sale Conversions</h4>
                        <p>Track your WooCommerce sale conversions with useful analytics recovered carts and sales made with the next order coupons.</p>
                    </div>
                    <div className="features-list">
                        <h4>Use Customer Insights</h4>
                        <p>Get to know the list of customers who opened emails & got converted. Also the list of customers who haven’t opened emails and haven’t used the coupon codes.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p><Link to="/features/woocommerce" className="btn btn-action">See More</Link></p>
            </div>
        </div>
    </div>
);

export default HomeFeatures;