import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SignupForm from '../components/SignupForm'
import Loading from '../components/Loading';
import notify from '../helpers/notify';
import axios from 'axios';

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';

class SignUpPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            loading: false
        }
    }

    handleLoadingState = loading => {
        //Set loading flag
        this.setState({ loading: loading });
    }

    handleSendEmail = email => {
        this.handleLoadingState(true);

        const headers = {
            'content-type': 'application/json',
            Authorization: `auth ${process.env.GATSBY_MAILCHIMP_API_KEY} `,
        };

        // Construct req data
        const data = '{"email_address":"'+ email +'", "status":"subscribed", "tags":["lead-magnet-templates"],"merge_fields":{"FNAME":"'+email+'"}}';

        const postData = JSON.stringify(data);

        const options = {
            url: `${process.env.GATSBY_MAILCHIMP_API_URL}`,
            method: 'POST',
            headers: headers,
            body: postData,
            auth: {
                'user': 'anystring',
                'pass': `${process.env.GATSBY_MAILCHIMP_API_KEY}`
            }
        };

        // request(options);

        axios.post(`${process.env.GATSBY_MAILCHIMP_API_URL}`, options, {headers: headers})
            .then(res => {
           console.log(res);
            if(res.data.success) {
                //If the response from MailChimp is good...
                notify('success', 'Subscribed!', res.data.success);
                this.setState({ email: '' });
                this.handleLoadingState(false);
            } else {
                //Handle the bad MailChimp response...
                notify('error', 'Unable to subscribe!', res.data.error);
                this.handleLoadingState(false);
            }
        }).catch(error => {
            //This catch block returns an error if Node API returns an error
            notify('error', 'Error. Please try again later.', error.message);
            this.handleLoadingState(false);
        });
    }

    handleOnChangeEmail = email => {
        this.setState({
            email: email
        })
    }

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
                                    {this.state.loading
                                        ? <Loading message="Working on it..." />
                                        : <SignupForm  handleSendEmail={this.handleSendEmail} handleOnChangeEmail={this.handleOnChangeEmail} email={this.state.email} />
                                    }

                                    <h5 className="m-b-20">Implement your own abandoned-cart email sequence with this download including:</h5>
                                    <ul className="m-l-20">
                                        <li className="p-l-10 m-b-10">Three fully customizable email templates</li>
                                        <li className="p-l-10 m-b-10">Recommended delays for delivery</li>
                                        <li className="p-l-10 m-b-10">Subject line variations</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-md-4">
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
