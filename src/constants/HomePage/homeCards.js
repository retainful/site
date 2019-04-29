import React from 'react';

const HomeCards = () =>(
    <div className="home-cards-container container text-center">
        <div className="row">
            <div className="col-md-4">
                <div className="card-body">
                    <h4>Abandoned cart recovery emails</h4>
                    <img className="img-fluid" src={`${process.env.GATSBY_RF_MEDIA_URL}/abandoned_cart_recovery_emails.png`} alt="abandoned_cart_recovery_emails"/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-body">
                    <h4>Next order discount coupons</h4>
                    <img className="img-fluid" src={`${process.env.GATSBY_RF_MEDIA_URL}/next_order_discouny_coupon.png`} alt="next_order_discouny_coupon"/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-body">
                    <h4>Track the realtime conversions</h4>
                    <img className="img-fluid" src={`${process.env.GATSBY_RF_MEDIA_URL}/track_realtime_conversions.png`} alt="track_realtime_conversions"/>
                </div>
            </div>
        </div>
    </div>
);

export default HomeCards;