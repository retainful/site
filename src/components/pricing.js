import React from 'react'
import Container from  '../components/container'

class PricingTable extends React.Component {
    render() {
        return (
            <div id="price-slider">
                <div className="calcuate-pricing-plan container">
                    <Container>
                        <div className="tab">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#woocommerce" className="active">WooCommerce</a></li>
                                <li><a data-toggle="tab" href="#shopify">Shopify</a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="woocommerce" className="tab-pane fade show in active">
                                    <div id="pricing" className="pricing-section text-center">
                                        <h3>WooCommerce</h3>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Free</h3>
                                                        <span className="price-amount">$ 0.00</span>
                                                        <span className="price-period"> </span>
                                                        <ul>
                                                            <li>100 contacts</li>
                                                            <li>Unlimited emails</li>
                                                            <li>Unlimited automations</li>
                                                            <li>Pop-ups</li>
                                                            <li>Signup-forms</li>
                                                            <li>Customer segmentation</li>
                                                        </ul>
                                                        <p className="text-center">
                                                            <a className="btn-outline btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Pro</h3>
                                                        <span className="price-amount">$ 69</span>
                                                        <span className="price-period">per year</span>
                                                        <ul>
                                                            <li><strong>Everything in Free +</strong></li>
                                                            <li>upto 2000 contacts</li>
                                                            <li>Exit-Intent popups</li>
                                                            <li>Advanced Segmentation</li>
                                                            <li>Email and Chat priority support</li>
                                                        </ul>
                                                        <p className="text-center">
                                                            <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Business</h3>
                                                        <span className="price-amount">$ 99</span>
                                                        <span className="price-period">per year</span>
                                                        <ul>
                                                            <li><strong>Everything in Essential +</strong></li>
                                                            <li>upto 5000 contacts</li>
                                                            <li>Dedicated Account Manager</li>
                                                            <li>Priority Support</li>
                                                            <li>Migration from other platforms</li>
                                                        </ul>
                                                        <p className="text-center">
                                                            <a className="btn-outline btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="shopify" className="tab-pane fade">
                                    <div id="pricing-shopify" className="pricing-section text-center">
                                        <h3>Shopify</h3>
                                        <div className="row">
                                            <div className="offset-md-2 col-md-4">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Free</h3>
                                                        <span className="price-amount">$ 0.00</span>
                                                        <span className="price-period"> </span>
                                                        <ul>
                                                            <li>100 contacts</li>
                                                            <li>Unlimited emails</li>
                                                            <li>Unlimited automations</li>
                                                            <li>Pop-ups</li>
                                                            <li>Signup-forms</li>
                                                            <li>Customer segmentation</li>
                                                        </ul>
                                                        <p className="text-center">
                                                            <a className="btn-outline btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="table-left wow fadeInDown">
                                                    <div className="pricing-details">
                                                        <h3>Pro</h3>
                                                        <span className="price-amount">$ 9.99</span>
                                                        <span className="price-period">per month</span>
                                                        <ul>
                                                            <li><strong>Everything in Free +</strong></li>
                                                            <li>upto 2000 contacts</li>
                                                            <li>Exit-Intent popups</li>
                                                            <li>Advanced Segmentation</li>
                                                            <li>Email and Chat priority support</li>
                                                        </ul>
                                                        <p className="text-center">
                                                            <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default PricingTable;
