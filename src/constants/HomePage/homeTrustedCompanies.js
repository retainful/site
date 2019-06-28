import React from 'react';
import {Link} from "gatsby";

const HomeBrands = () =>(
    <div className="brand-container">
        <div className="container">
            <div className="brand-text-container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 border-right-1">
                        <h4>We have integrations with:</h4>
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                                <div className="integration-img">
                                    <Link to="/product/features/woocommerce" className="m-r-10">
                                        <img src="https://raw.githubusercontent.com/campaignrabbit/site/master/src/images/integration-icons/woocommerce-color.png" alt="WooCommerce"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="integration-img">
                                    <Link to="/product/features/shopify">
                                        <img src="https://raw.githubusercontent.com/campaignrabbit/site/master/src/images/integration-icons/shopify-color.png" alt="Shopify"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h4>Trusted by 1,000+ companies big and small:</h4>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="brand-img">
                                    <img src="https://polymail.io/img/logos/twitch.png"
                                         alt="home-banner-illustration"/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="brand-img">
                                    <img src="https://polymail.io/img/logos/twitch.png"
                                         alt="home-banner-illustration"/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="brand-img">
                                    <img src="https://polymail.io/img/logos/twitch.png"
                                         alt="home-banner-illustration"/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="brand-img">
                                    <img src="https://polymail.io/img/logos/twitch.png"
                                         alt="home-banner-illustration"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeBrands;