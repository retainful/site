import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/retainful-logo-white.png'
import Container from "../components/container"
import Row from "../components/row"
import Col from "../components/column"

import { FaFacebookF, FaTwitter} from 'react-icons/fa'

export default function Footer() {
    return(
        <div className="footer-container">
            <Container>
                <Link className="footer-logo" to="/"><img src={Logo} alt="Retainful" /></Link>
                <hr/>
                <Row>
                    <Col size="3">
                        <h4 className="footer-title">Product</h4>
                        <ul>
                            <li><a href="https://www.flycart.org/" target="_blank" rel="noopener noreferrer">Abandoned Cart Recovery</a></li>
                            <li><a href="https://www.j2store.org/" target="_blank" rel="noopener noreferrer">Next Order Coupons</a></li>
                            <li><a href="https://campaignrabbit.com/" target="_blank" rel="noopener noreferrer">Follow-up Emails</a></li>
                            <li><a href="https://billingrabbit.com/" target="_blank" rel="noopener noreferrer">Customer Retention</a></li>
                        </ul>
                    </Col>
                    <Col size="3">
                        <h4 className="footer-title">Platforms</h4>
                        <ul>
                            <li><a href="https://www.flycart.org/" target="_blank" rel="noopener noreferrer">Shopify</a></li>
                            <li><a href="https://www.j2store.org/" target="_blank" rel="noopener noreferrer">WooCommerce</a></li>
                            <li><a href="https://campaignrabbit.com/" target="_blank" rel="noopener noreferrer">Shopify Plus (coming soon)</a></li>
                            <li><a href="https://billingrabbit.com/" target="_blank" rel="noopener noreferrer">BigCommerce (coming soon)</a></li>
                        </ul>
                    </Col>
                    <Col size="4">
                        <h4 className="footer-title">Company</h4>
                        <ul>
                            <li><a href="https://www.flycart.org/" target="_blank" rel="noopener noreferrer">About Us</a></li>
                            <li><a href="https://www.j2store.org/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                            <li><a href="https://campaignrabbit.com/" target="_blank" rel="noopener noreferrer">Support</a></li>
                            <li><a href="https://billingrabbit.com/" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                        </ul>
                        <h5>Also from us:</h5>
                        <ul className="d-inline-flex">
                            <li className="m-r-10"><a href="https://www.flycart.org/" target="_blank" rel="noopener noreferrer">Flycart</a></li>
                            <li className="m-r-10"><a href="https://www.j2store.org/" target="_blank" rel="noopener noreferrer">J2Store</a></li>
                            <li className="m-r-10"><a href="https://campaignrabbit.com/" target="_blank" rel="noopener noreferrer">Campaignrabbit</a></li>
                            <li className="m-r-10"><a href="https://billingrabbit.com/" target="_blank" rel="noopener noreferrer">Billingrabbit</a></li>
                        </ul>
                    </Col>
                    <Col size="2">
                        <div className="footer-social-block">
                            <div className="footer-social-links clearfix">
                                <a target="_blank" href="https://www.facebook.com/campaignrabbit/" className="foot-social-link"><i className="fa fa-facebook"><FaFacebookF/></i></a>
                                <a target="_blank" href="https://twitter.com/campaignrabbit/" className="foot-social-link"><i className="fa fa-twitter"><FaTwitter/></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="footer-sm">
                    <Row>
                        <Col size="6">
                            <p>&copy; <Link to="/">Retainful</Link> <script>document.write(new Date().getFullYear());</script> Rights Reserved</p>
                        </Col>
                        <Col size="6" class="text-right">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">Privacy policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">Terms of Service</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
