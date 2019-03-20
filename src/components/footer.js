import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/retainful-logo.png'
import Container from "../components/container"
import Row from "../components/row"
import Col from "../components/column"

export default function Footer() {
    return(
        <div className="footer-container">
            <Container>
                <Row>
                    <Col>
                        <Link className="footer-logo" to="/"><img src={Logo} alt="Retainful" /></Link>
                        <p>Insert Next-Order coupons automatically and motivate customers to purchase repeatedly. And get insights on email opens and conversions. Its free.</p>
                    </Col>
                    <Col>
                        <h4 className="footer-title">Also from us:</h4>
                        <ul>
                            <li><a href="https://www.flycart.org/" target="_blank" rel="noopener noreferrer">Flycart</a></li>
                            <li><a href="https://www.j2store.org/" target="_blank" rel="noopener noreferrer">J2Store</a></li>
                            <li><a href="https://campaignrabbit.com/" target="_blank" rel="noopener noreferrer">Campaignrabbit</a></li>
                            <li><a href="https://billingrabbit.com/" target="_blank" rel="noopener noreferrer">Billingrabbit</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <div>
                            <h4 className="footer-title">Reach us</h4>
                            <h5>CartRabbit International Pte Ltd</h5>
                            <p>#07-04, High Street Centre, 1 North Bridge Road,  Singapore, 179094</p>
                            <h5>CartRabbit Technologies Private Limited</h5>
                            <p>SS Towers, Kalapatti Main Road, Coimbatore, Tamil Nadu <br />India - 641014</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="footer-sm">
                    <Row>
                        <Col size="6">
                            <h6>&copy; <Link to="/">Retainful</Link> <script>document.write(new Date().getFullYear());</script> Rights Reserved</h6>
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
            <div id="back-top" className="bk-top">
                <div className="bk-top-txt">
                    <a className="back-to-top js-scroll-trigger" href="#main">top</a>
                </div>
            </div>
        </div>
    )
}
