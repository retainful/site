import React from 'react';
import {Link} from 'gatsby';
import {FaLongArrowAltRight} from 'react-icons/fa';
import bannerLogo from "../../images/retainful-coupon-03.png";

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
                        <h4>Recover Abandoned Carts</h4>
                        <p>Automatically send a series of cart recovery emails. Recover as many abandoned checkouts as possible. A single click cart recovery tool.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hero-plugins">
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/DriveRepeatPurchase.png`}
                                alt="next_order_discouny_coupon"/></p>
                        <h4>Drive Repeat Purchases</h4>
                        <p>Auto generate and send unique coupons for the next purchase within the order notification itself and bring customers back</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hero-plugins">
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/Actionable-Analytics-%26-Insights-big.png`}
                                alt="track_realtime_conversions"/></p>
                        <h4>Actionable Analytics & Insights</h4>
                        <p>Check your abandoned carts and their value. Track the performance of your cart recovery emails and next order coupons</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hero-plugins">
                        <p><img className="img-fluid"
                                src={`${process.env.GATSBY_RF_MEDIA_URL}/Drag-and-Drop-big.png`}
                                alt="track_realtime_conversions"/></p>
                        <h4>Drag-and-Drop Visual Email Editor</h4>
                        <p>Create beautiful emails with our drag-and-drop visual email builder. Use the pre-built, responsive email templates and get started quickly</p>
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
                        <h3>Abandoned Cart Recovery</h3>
                        <p>60 to 70% of the shoppers abandoned their checkouts. Using a well-timed series of emails, it is possible to recover at least 45% of these carts.</p>
                        <ul>

                            <li>
                                Trigger email reminders automatically when customers abandon their carts
                            </li>
                            <li>Send unlimited cart recovery emails</li>
                            <li>Schedule emails to be sent at perfect intervals</li>
                            <li>Capture all abandoned carts, including the guest carts</li>
                            <li>Personalize the emails with the customer's name</li>

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
                        <h3>Drive Repeat Purchases</h3>
                        <p>Your transactional emails have the highest open rates. Unlock their revenue potential by sending a coupon for next purchase and product recommendations.</p>
                        <ul>
                            <li>
                                Auto generate unique coupons for the next purchase and embed it in the order notification emails.
                            </li>
                            <li>Auto apply the coupon when customers clicks the CTA / link </li>
                            <li>Coupon can be a percentage or a flat discount</li>
                            <li>Track the performance of the coupons in the Retainful Dashboard</li>
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