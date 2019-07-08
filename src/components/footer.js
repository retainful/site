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
                        <h4 className="footer-title">Product</h4>
                        <ul>
                            <li><Link to="/#">Abandoned Cart Recovery</Link></li>
                            <li><Link to="/#">Next Order Coupons</Link></li>
                            <li><Link to="/#">Follow-up Emails</Link></li>
                            <li><Link to="/#">Customer Retention</Link></li>
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
                                <Link to="/#">About Us</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/support">Support</Link>
                            </li>
                            <li>
                                <Link to="/support">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/partner-program">Partner Program</Link>
                            </li>
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
                        <img src={GdprReadBadge} alt="" className="img-responsive"/>
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
