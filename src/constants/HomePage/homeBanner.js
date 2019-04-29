import React from 'react';
import bannerLogo from "../../images/retainful-coupon-03.png";

const HomeBanner = () =>(
    <div className="home hero-2">
        <div className="container-m text-center">
            <div className="hero-content wow fadeIn">
                <h1><span className="highlight">Recover your Lost sales</span> & Drive repeat purchases</h1>
                <p>Your Business needs to Grow Smart <br/>
                    Get to Nurture your Customers & Make real money with the most Innovative marketing Tool for eCommerce.</p>
                <h5><em>Retainful is FREE!</em></h5>
                {/*<p><a className="btn-action btn-edge btn-lg"*/}
                      {/*href="https://wordpress.org/plugins/retainful-next-order-coupon-for-woocommerce/"*/}
                      {/*target="_blank" rel="noopener noreferrer">Install Plugin</a></p>*/}
            </div>
            {/*<div className="hero-img wow fadeIn">*/}
                {/*<img className="img-fluid" src={bannerLogo} alt="retainful-coupon-banner"/>*/}
            {/*</div>*/}
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="hero-plugins">
                        <h4>WooCommerce Plugin</h4>
                        <p>Grow your WooCommerce store smart by reminding customers about abandoned carts and motivate customers to continuously shop at your store using unique next order coupon.</p>
                        <p><a className="btn-action btn-edge"
                              href="https://wordpress.org/plugins/retainful-next-order-coupon-for-woocommerce/"
                              target="_blank" rel="noopener noreferrer">Install Plugin</a></p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="hero-plugins">
                        <h4>Shopify App</h4>
                        <p>Grow your Shopify store smart by automating cart recovery email reminders and encourage your audience to shop repeatedly with unique next order coupon codes</p>
                        <p><a className="btn-action btn-edge"
                              href="https://wordpress.org/plugins/retainful-next-order-coupon-for-woocommerce/"
                              target="_blank" rel="noopener noreferrer">Install App</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="divider-shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"
                 className="shape-waves">
                <path className="shape-fill shape-fill-1"
                      d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
            </svg>
        </div>
    </div>
);

export default HomeBanner;