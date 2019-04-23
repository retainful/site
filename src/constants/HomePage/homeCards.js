import React from 'react';
import bannerLogo from "../../images/retainful-coupon-03.png";

const HomeCards = () =>(
    <div className="home-cards-container container text-center">
        <div className="row">
            <div className="col-md-4">
                <div className="card-body">
                    <h4>Abandoned cart recovery emails</h4>
                    <img className="img-fluid" src={bannerLogo} alt="retainful-coupon-banner"/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-body">
                    <h4>Next order discount coupons</h4>
                    <img className="img-fluid" src={bannerLogo} alt="retainful-coupon-banner"/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-body">
                    <h4>Track the realtime conversions</h4>
                    <img className="img-fluid" src={bannerLogo} alt="retainful-coupon-banner"/>
                </div>
            </div>
        </div>
    </div>
);

export default HomeCards;