import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/retainful-logo-white.png'
import Container from "../components/container"
import Row from "../components/row"
import Col from "../components/column"

import { FaFacebookF, FaTwitter} from 'react-icons/fa'
import GdprReadBadge from '../images/gdpr_ready_badge.png'

export default function Footer() {
    return(
        <div className="footer-container">
            <Container>
                <Link className="footer-logo" to="/"><img src={Logo} alt="Retainful" /></Link>
                <hr/>
                <Row>
                    <Col size="3">
                        <h4 className="footer-title">Resources</h4>
                        <ul>
                            <li><Link to="/abandoned-cart-email-templates">Abandoned Cart Email Templates</Link></li>
                            <li><Link to="/premium-addons">Premium Add-ons (WooCommerce)</Link></li>
                            <li><Link to="/follow-up-emails">Follow-up Emails</Link></li>
                            <li><Link to="/customer-retention">Customer Retention</Link></li>
                            <li><Link to="/shopify-abandoned-cart">Shopify Abandoned Carts</Link></li>
                            <li><Link to="/woocommerce-abandoned-carts">WooCommerce Abandoned Carts</Link></li>
                        </ul>
                    </Col>
                    <Col size="3">
                        <h4 className="footer-title">Platforms</h4>
                        <ul>
                            <li>
                                <Link to="/product/features/woocommerce">WooCommerce</Link>
                            </li>
                            <li>
                                <Link to="/product/features/shopify">Shopify</Link>
                            </li>
                            <li>
                                <Link to="/#">Shopify Plus (coming soon)</Link>
                            </li>
                            <li>
                                <Link to="/#">BigCommerce (coming soon)</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col size="4">
                        <h4 className="footer-title">Company</h4>
                        <ul>
                            <li>
                                <Link to="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/support">Support</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/partner-program">Partner Program</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col size="2">
                        <img src={GdprReadBadge} alt="" className="img-responsive"/>
                        <div className="footer-social-block">
                            <div className="footer-social-links clearfix">
                                <a target="_blank" href="https://www.facebook.com/retainful/" className="foot-social-link"><i className="fa fa-facebook"><FaFacebookF/></i></a>
                                <a target="_blank" href="https://twitter.com/retainful/" className="foot-social-link"><i className="fa fa-twitter"><FaTwitter/></i></a>
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
