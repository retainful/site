import React from 'react';
import {Link} from 'gatsby';
import {FaCheck} from 'react-icons/fa';
import bannerLogo from "../../images/retainful-coupon-03.png";
import Layout from "../../pages/features/woocommerce";

const HomeFeatures = () => (
    <div className="home-features-container" id="features">
        <div className="container">
            <div className="text-center">
                <h3>Features</h3>
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#woocommerce" className="active">WooCommerce</a></li>
                    <li><a data-toggle="tab" href="#shopify">Shopify</a></li>
                </ul>
            </div>
            <div className="tab-content">
                <div id="woocommerce" className="tab-pane fade show in active">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="features-list">
                                <h3>Abandoned Cart Recovery Emails</h3>
                                {/*<p>Retainful gives you a unique set of tools to retain your customers and increase revenue per customer.</p>*/}
                                <p><img className="img-fluid"
                                        src={`${process.env.GATSBY_RF_MEDIA_URL}/abandoned_cart_recovery_emails.png`}
                                        alt="abandoned_cart_recovery_emails"/></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-list">
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Trigger follow-up email reminders automatically to recover abandoned carts</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Send unlimited cart recovery email reminders</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Easy to use short-codes to include customer details and order summary in your emails</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Helps you capture all abandoned carts including the guest carts</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-list">
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Stop sending email reminders automatically when the cart is recovered</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Get notified when your customers recover the abandoned carts</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Track revenue - Compare Abandoned order value & the recovered cart value</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Notifies eCommerce store administrators when a cart is recovered</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="features-list">
                                <h3>Next Order Coupons</h3>
                                {/*<p>Retainful is the best tool to automate cart recovery emails and recover lost sales.</p>*/}
                                <p><img className="img-fluid"
                                        src={`${process.env.GATSBY_RF_MEDIA_URL}/next_order_discouny_coupon.png`}
                                        alt="next_order_discouny_coupon"/></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-list">
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Generate Unique Next order coupon codes automatically on every purchase</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Send coupon codes along with the order transactional emails</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Trigger FOMO by setting expiry/validity to the next order coupons</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Set advanced coupon conditions - Create product & category based coupons</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-list">
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Exclude any specific category/product from getting a discount via coupons</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Auto-apply coupon discount at the cart when customer clicks the email link</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Track the list of customers who have used the coupon vouchers</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Measure recovered revenue earned through next order coupons</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="features-list">
                                <h3>Analytics & Insights</h3>
                                {/*<p>With Retainful, you get a featured dashboard to track analytics, conversions and customer insights.</p>*/}
                                <p><img className="img-fluid"
                                        src={`${process.env.GATSBY_RF_MEDIA_URL}/track_realtime_conversions.png`}
                                        alt="track_realtime_conversions"/></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-list">
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Track the performance of your cart recovery and coupon order emails</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Clean & detailed report on sale conversions and customer revenue insights</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Measure customer engagement with open & email click-through stats</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Track the number of individual sale conversions achieved</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-list">
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Check whether the abandoned customer type is a registered user or guest</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>View cart section helps you check the cart abandoned by the individuals</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Filter the date range and analyze your abandoned cart recovery campaigns</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Logs every abandoned cart customer's email and guest IP in the dashboard</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p><Link to="/features/woocommerce" className="btn-action">See More</Link></p>
                    </div>
                </div>
                <div id="shopify" className="tab-pane fade">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="features-list">
                                <h3>Abandoned Cart Recovery Emails</h3>
                                {/*<p>Retainful gives you a unique set of tools to retain your customers and increase revenue per customer.</p>*/}
                                <p><img className="img-fluid"
                                        src={`${process.env.GATSBY_RF_MEDIA_URL}/abandoned_cart_recovery_emails.png`}
                                        alt="abandoned_cart_recovery_emails"/></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-list">
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Trigger follow-up email reminders automatically to recover abandoned carts</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Send unlimited cart recovery email reminders</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Easy to use short-codes to include customer details and order summary in your emails</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Helps you capture all abandoned carts including the guest carts</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-list">
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Stop sending email reminders automatically when the cart is recovered</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Get notified when your customers recover the abandoned carts</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/>  <h4>Track revenue - Compare Abandoned order value & the recovered cart value</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <FaCheck/> <h4>Notifies eCommerce store administrators when a cart is recovered</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p><Link to="/features/shopify" className="btn-action">See More</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeFeatures;