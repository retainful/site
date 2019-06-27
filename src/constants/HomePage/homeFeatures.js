import React from 'react';
import {Link} from 'gatsby';
import {FaLongArrowAltRight} from 'react-icons/fa';
import bannerLogo from "../../images/retainful-coupon-03.png";
import Layout from "../../pages/features/woocommerce";

const HomeFeatures = () => (
    <div className="home-features-container" id="features">
        <div className="container">
            <div className="text-center">
                <h3>Features</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6">
                    <div className="hero-plugins">
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/abandoned_cart_recovery_emails.png`}
                                alt="abandoned_cart_recovery_emails"/></p>
                        <h4>Abandoned Cart Recovery Emails</h4>
                        <p>Trigger follow-up email reminders automatically to recover abandoned carts</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hero-plugins">
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/next_order_discouny_coupon.png`}
                                alt="next_order_discouny_coupon"/></p>
                        <h4>Next order Coupon Generator</h4>
                        <p>Generate Unique Next order coupon codes automatically on every purchase</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hero-plugins">
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/track_realtime_conversions.png`}
                                alt="track_realtime_conversions"/></p>
                        <h4>Actionable Analytics & Insights</h4>
                        <p>Track the performance of your cart recovery and coupon order emails</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hero-plugins">
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/track_realtime_conversions.png`}
                                alt="track_realtime_conversions"/></p>
                        <h4>Actionable Analytics & Insights</h4>
                        <p>Track the performance of your cart recovery and coupon order emails</p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="features-list">
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/abandoned_cart_recovery_emails.png`}
                                alt="abandoned_cart_recovery_emails"/></p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="features-list">
                        <h3>Abandoned Cart Recovery Emails</h3>
                        <p>Trigger follow-up email reminders automatically to recover abandoned carts</p>
                        <ul>
                            <li>
                                Trigger follow-up email reminders automatically to recover abandoned carts
                            </li>
                            <li>Send unlimited cart recovery email reminders</li>
                            <li>Easy to use short-codes to include customer details and order summary in your emails</li>
                            <li>Helps you capture all abandoned carts including the guest carts</li>
                        </ul>
                        <p>
                            <a href="#">Learn more  <span><FaLongArrowAltRight/></span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="features-list">
                        <h3>Next Order Coupons</h3>
                        <p>Generate Unique Next order coupon codes automatically on every purchase</p>
                        <ul>
                            <li>
                                Trigger follow-up email reminders automatically to recover abandoned carts
                            </li>
                            <li>Send unlimited cart recovery email reminders</li>
                            <li>Easy to use short-codes to include customer details and order summary in your emails</li>
                            <li>Helps you capture all abandoned carts including the guest carts</li>
                        </ul>
                        <p>
                            <a href="#">Learn more <span><FaLongArrowAltRight/></span></a>
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="features-list">
                        {/*<p>Retainful is the best tool to automate cart recovery emails and recover lost sales.</p>*/}
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/track_realtime_conversions.png`}
                                alt="track_realtime_conversions"/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeFeatures;