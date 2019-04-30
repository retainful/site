import React from 'react';
import {Link} from 'gatsby'
import bannerLogo from "../../images/retainful-coupon-03.png";

const HomeFeatures = () =>(
    <div className="home-features-container" id="features">
        <div className="container">
            <div className="text-center">
                <h3>Features</h3>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Abandoned Cart Recovery Emails</h3>
                        {/*<p>Retainful gives you a unique set of tools to retain your customers and increase revenue per customer.</p>*/}
                        <p><img className="img-fluid" src={`${process.env.GATSBY_RF_MEDIA_URL}/abandoned_cart_recovery_emails.png`} alt="abandoned_cart_recovery_emails"/></p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Automated Cart recovery email</h4>
                        <p>Remind customers of their abandoned cart. Automatically schedule and send a sequence of email messages. No need to send emails manually. Unlimited emails can be sent.</p>
                    </div>
                    <div className="features-list">
                        <h4>Single-click cart recovery</h4>
                        <p>Customers can recover the abandoned carts with a single click. The recovery link instantly takes the customer to the cart page with their abandoned items.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Personalised Cart recovery emails</h4>
                        <p>Use shortcodes to personalize the emails. Add customer’s name, cart summary and product details. Personalised emails have a high conversion rates.</p>
                    </div>
                    <div className="features-list">
                        <h4>Reports and Insights</h4>
                        <p>Track your email engagement. Compare the abandoned cart value and recovered cart value to assess the performance of your email campaigns. View real-time carts.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Next Order Coupons</h3>
                        {/*<p>Retainful is the best tool to automate cart recovery emails and recover lost sales.</p>*/}
                        <p><img className="img-fluid" src={`${process.env.GATSBY_RF_MEDIA_URL}/next_order_discouny_coupon.png`} alt="next_order_discouny_coupon"/></p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Unique Coupon codes</h4>
                        <p>No more generic coupon codes. Retainful can automatically create and send unique coupon codes for the next purchases. You don’t need to juggle handling thousands of coupon codes.</p>
                    </div>
                    <div className="features-list">
                        <h4>Automatic Coupon Code Generation</h4>
                        <p>Next order coupons are generated automatically. The customers get the coupon for next order within his order confirmation email itself. The code is automatically included in the order notification email when customer places the order.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Percentage or Fixed</h4>
                        <p>Coupons can be either a percentage or flat amount. Use advanced coupon settings to limit the usage of coupons. For example, you can let it apply only for products from certain categories.</p>
                    </div>
                    <div className="features-list">
                        <h4>Analytics & Insights</h4>
                        <p>Constant update on the revenue you made using the next order coupons. Actionable customer insights showing people who opened the email with a coupon, people who used coupon & got converted, and people who haven’t used the coupon code.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Analytics & Insights</h3>
                        {/*<p>With Retainful, you get a featured dashboard to track analytics, conversions and customer insights.</p>*/}
                        <p><img className="img-fluid" src={`${process.env.GATSBY_RF_MEDIA_URL}/track_realtime_conversions.png`} alt="track_realtime_conversions"/></p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Evaluate Email Performance</h4>
                        <p>Track the performance of your cart recovery and coupon order emails. Email open rates and email click-through rates will help you know how many customers get engaged with your email campaign.</p>
                    </div>
                    <div className="features-list">
                        <h4>Track Sale Conversions</h4>
                        <p>Track the number of individual sale conversions achieved through next order coupons and cart recovery email campaigns.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Measure Revenue</h4>
                        <p>Get the detailed revenue report on the revenue made using cart recovery campaigns and Next order coupon campaigns.</p>
                    </div>
                    <div className="features-list">
                        <h4>Actionable Customer Insights</h4>
                        <p>Get actionable customer data. Create better email campaigns using the list of customers who got converted and the list of customers who still haven’t used the coupon.</p>
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