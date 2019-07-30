import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SignupForm from '../components/SignupForm'
import Loading from '../components/Loading';
import notify from '../helpers/notify';
import axios from 'axios';
// import addToMailchimp from 'gatsby-plugin-mailchimp';

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';

class SignUpPage extends React.Component{

    render() {
        return (
            <Layout>
                <SEO title="Our Customers | Retainful"
                     description="Companies big and small trust Retainful to recover abandoned carts and drive repeat purchases"
                     keywords={[`abandoned cart recovery`, `WooCommerce Abandoned Cart recovery emails`, `ecommerce customer retention`, `woocommerce followup emails`, `next order coupons`, `shopify abandoned cart recovery`, `shopify abandoned cart analytics`]}/>
                <div className="newsletter-app">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="newsletter-header p-t-40 m-b-20">
                                    <h2>Get Our Plug-and-Play Abandoned-Cart Email Templates</h2>
                                </div>
                                <section className="newsletter-content p-b-40">

                                    <SignupForm  />

                                    <h5 className="m-b-20">Implement your own abandoned-cart email sequence with this download including:</h5>
                                    <ul className="m-l-20">
                                        <li className="p-l-10 m-b-10">Three fully customizable email templates</li>
                                        <li className="p-l-10 m-b-10">Recommended delays for delivery</li>
                                        <li className="p-l-10 m-b-10">Subject line variations</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-md-4 text-center">
                                <img className="img-fluid m-t-20"
                                     src={`${process.env.GATSBY_RF_MEDIA_URL}/home-banner-illustration.png`}
                                     alt="home-banner-illustration"/>
                            </div>
                        </div>
                    </div>
                </div>

                <HomeTrutedCompanies />
            </Layout>
        )
    }
}

export default SignUpPage;
