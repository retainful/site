import React from 'react';
import { Link } from 'gatsby';

import Banner from '../../images/abandoned-carts-recover.png';
import Bg from '../../images/bg.png';

const HomeBanner = () =>(
    <div className="home hero-2">
        <div className="container">
            <div className="text-container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="hero-content wow fadeIn">
                            <h1>Recover abandoned carts & drive 10x more repeat purchases easily</h1>
                            <p>Boost sales with automatic cart recovery campaigns.<br/>
                                Get more dollars per customer by sending next purchase coupons.
                            </p>
                            <p className="m-t-5">
                                <a className="btn-action btn-edge btn-lg m-r-20"
                                   href="https://app.retainful.com/?utm_source=above_the_fold&utm_medium=get_start_for_free&utm_campaign=home_page"
                                   target="_blank" rel="noopener noreferrer">Get started FREE</a> <small>*<strong>No credit card</strong> required</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero-img">
                            <img className="img-fluid"
                                 src={Banner}
                                 alt="home-banner-illustration"/>
                        </div>
                    </div>
                </div>
                <img src={Bg} className="banner-bg" alt=""/>
            </div>
            {/*<div className="divider-shape">*/}
                {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"*/}
                     {/*className="shape-waves">*/}
                    {/*<path className="shape-fill shape-fill-1"*/}
                          {/*d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>*/}
                {/*</svg>*/}
            {/*</div>*/}
        </div>
    </div>
);

export default HomeBanner;