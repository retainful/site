import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Container from  '../components/container'
import WooPricing from "../components/WooPricing";
import ShopifyPricing from "../components/ShopifyPricing";

class PricingTable extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
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
                                        <WooPricing/>
                                    </div>
                                </div>
                                <div id="shopify" className="tab-pane fade">
                                    <div id="pricing-shopify" className="pricing-section text-center">
                                        <ShopifyPricing/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="enterprise-pricing-plan text-center">
                            <h3>Questions? <Link to="/support">Contact Us</Link></h3>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default PricingTable;
