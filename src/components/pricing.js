import React from 'react'
import { Link } from  'gatsby'
import Container from  '../components/container'

class PricingTable extends React.Component {
    render() {
        return (
            <div id="price-slider">
                <div className="calcuate-pricing-plan container">
                    <Container>
                        <div className="tab">
                            <ul className="nav nav-tabs">
                                <li><a data-toggle="tab" href="#woocommerce" className="active">
                                    {/*<img src="https://raw.githubusercontent.com/campaignrabbit/site/master/src/images/integration-icons/woocommerce-color.png" alt="WooCommerce"/>*/}
                                    WooCommerce
                                </a></li>
                                <li><a data-toggle="tab" href="#shopify">
                                    {/*<img src="https://raw.githubusercontent.com/campaignrabbit/site/master/src/images/integration-icons/shopify-color.png" alt="Shopify"/>*/}
                                    Shopify
                                </a></li>
                            </ul>
                            <div className="tab-content tabs">
                                <div id="woocommerce" className="tab-pane fade show in active">
                                    <div id="pricing" className="pricing-section text-center">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Free Forever</h3>
                                                        <span className="price-amount">$ 0</span>
                                                        <span className="price-period"> </span>
                                                        <p className="text-center">
                                                            <a className="btn-outline btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Free</a>
                                                        </p>
                                                        <ul>
                                                            <li>Capture Abandoned Carts</li>
                                                            <li>Unlimited Cart recovery emails</li>
                                                            <li>Drip / Sequential Email Reminders</li>
                                                            <li>3 pre-built email templates</li>
                                                            <li>Next Order Coupons</li>
                                                            <li>Analytics and Reports</li>
                                                            <li>Standard Support</li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 featured">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Pro</h3>
                                                        <span className="price-amount">$ 69</span>
                                                        <span className="price-period">per year</span>
                                                        <p className="text-center">
                                                            <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Free</a>
                                                        </p>
                                                        <ul>
                                                            <li><strong>Everything in Free +</strong></li>
                                                            <li>3 Premium Add-ons</li>
                                                            <li> + Email Collection Popup</li>
                                                            <li> + Coupon for Email Collection</li>
                                                            <li> + Countdown Timer with auto coupon</li>
                                                            <li>Premium Email Templates</li>
                                                            <li>Usage Restrictions for Next Order Coupons</li>
                                                            <li>Priority Support</li>
                                                            <li>Use up to 1 website</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Business</h3>
                                                        <span className="price-amount">$ 99</span>
                                                        <span className="price-period">per year</span>
                                                        <p className="text-center">
                                                            <a className="btn-outline btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Free</a>
                                                        </p>
                                                        <ul>
                                                            <li><strong>Everything in Pro +</strong></li>
                                                            <li>Access to all future Premium add-ons</li>
                                                            <li>Priority Support</li>
                                                            <li>Use up to 5 websites</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="shopify" className="tab-pane fade">
                                    <div id="pricing-shopify" className="pricing-section text-center">
                                        <div className="row">
                                            <div className="offset-md-2 col-md-4">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Free Forever</h3>
                                                        <span className="price-amount">$ 0</span>
                                                        <span className="price-period"> </span>
                                                        <p className="text-center">
                                                            <a className="btn-outline btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Free</a>
                                                        </p>
                                                        <ul>
                                                            <li>1000 Cart recovery emails per month</li>
                                                            <li>Drip / Sequential Emails</li>
                                                            <li>Single Click Cart Recovery</li>
                                                            <li>Incentivize with coupons</li>
                                                            <li>Ready to deploy, conversion focused email templates</li>
                                                            <li>Simple, Drag and Drop Visual Email builder</li>
                                                            <li>Live Cart feed</li>
                                                            <li>Actionable Analytics and Insights</li>
                                                            <li>All Store Notification Emails</li>
                                                            <li>Coupons for Next Purchase</li>
                                                            <li>Beautiful, responsive email templates</li>
                                                            <li>Up to 100 monthly orders (next purchase coupons)</li>
                                                            <li>Standard support</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 featured">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Pro</h3>
                                                        <span className="price-amount">$ 9.99</span>
                                                        <span className="price-period">per month</span>
                                                        <p className="text-center">
                                                            <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Free</a>
                                                        </p>
                                                        <ul>
                                                            <li><strong>Everything in Free +</strong></li>
                                                            <li>Unlimited Cart Recovery Emails</li>
                                                            <li>Unlimited Next Purchase Coupons</li>
                                                            <li>Priority support</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="enterprise-pricing-plan text-center">
                            <p>
                                We also have special plans for nonprofit and education organizations.
                            </p>
                            <h3>Questions? <Link to="/support">Contact sales</Link></h3>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default PricingTable;
