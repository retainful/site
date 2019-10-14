import React from 'react'
import { Link } from  'gatsby'
import Container from  '../components/container'
import merock from "../images/reviews/merock.jpeg";
import LukeCavanagh from "../images/reviews/Luke-Cavanagh.jpeg";

class FeaturedReviews extends React.Component {
    render() {
        return (
            <div className="customer-reviews-section">
                <div className="container">
                    <div className="reviews-intro">
                        <h3>See why 1000+ customers love using Retainful</h3>
                    </div>
                    <div className="customer-reviews">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="customer-review">
                                    <h4>Easy to use plugin for abandoned cart</h4>
                                    <p>Clean plugin settings and the app is very easy to use.</p>
                                    <div className="customer-meta">
                                        <img src={LukeCavanagh} alt="Luke Cavanagh"/>
                                        <span>Luke Cavanagh <br /> <small>LiquidWeb</small></span>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="customer-review">
                                    <h4>Great Next Order plugin option</h4>
                                    <p>It works great, a well-done plugin with a fast support team.</p>
                                    <div className="customer-meta">
                                        <img src={merock} alt="merock"/>
                                        <span>Remko Lopez<br /> <small>Brainding Agency</small></span>
                                    </div>
                                    <br/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="m-t-15">
                            <Link className="btn-link" to="/reviews">
                                See more reviews
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedReviews;
