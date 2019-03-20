import React from 'react'
import Container from  '../components/container'

const PricingTable = () =>(
    <div id="pricing" className="pricing-section text-center">
        <Container>
            <div className="pricing-intro wow fadeInDown">
                <h1>Get started in Minutes. It’s Free</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 offset-lg-4 col-md-12">
                    <div className="table-left wow fadeInDown">
                        <div className="pricing-details">
                            <h2>Free</h2>

                            <span>$0.00</span>
                            <ul>
                                <li>Unique Coupons</li>
                                <li>Automatic Code Generation</li>
                                <li>Percentage or Fixed</li>
                                <li>Analytics & Insights</li>
                            </ul>
                            <p>
                                <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
)
export default PricingTable;