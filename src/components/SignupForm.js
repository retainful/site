import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import axios from "axios";
import notify from "../helpers/notify";

const formAPI = '/.netlify/functions/signup'

export default class NewsletterForm extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    state = {
        loading: false,
        success: false,
        error: false
    }

    handleSubmit = (event, data) => {
        event.preventDefault()
        const email = this.email.value

        if (!email) {
            alert('Please email your email')
        }

        this.setState({
            loading: true
        })

        formHandler(email).then(() => {
            this.setState({
                success: true,
                loading: false
            })
        }).catch((e) => {
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderForm() {
        const { success, loading } = this.state;
        const buttonText = (loading) ? '...' : 'Notify Me';
        const handler = (loading) ? noOp : this.handleSubmit;

        /* if they submitted the form, show thanks */
        if (success) {
            notify('success', 'Subscribed!', success);
            return (
                <div>
                    <div className="alert alert-success">
                        <strong>Success!</strong> Thanks for signing up!
                    </div>
                </div>
            )
        }

        return (
            <form onSubmit={handler} className="form-inline newsletter-form">
                <input
                    type="email"
                    name="email"
                    className="form-control sign-up"
                    ref={input => this.email = input}
                    placeholder="Enter your email address..."
                    required
                />
                <button  className="btn btn-success btn-lg sign-up-button" type="submit">
                    {buttonText}
                </button>
            </form>
        )
    }

    // handleLoadingState = loading => {
    //     //Set loading flag
    //     this.setState({ loading: loading });
    // }

    // handleSendEmail = email => {
    //     this.handleLoadingState(true);
    //
    //     const headers = {
    //         'content-type': 'application/json',
    //         Authorization: `auth ${process.env.MAILCHIMP_API_KEY} `,
    //     };
    //
    //     // Construct req data
    //     const data = '{"email_address":"'+ email +'", "status":"subscribed", "tags":["lead-magnet-templates"],"merge_fields":{"FNAME":"'+email+'"}}';
    //
    //     const postData = JSON.stringify(data);
    //
    //     const options = {
    //         url: `${process.env.MAILCHIMP_API_URL}`,
    //         method: 'POST',
    //         headers: headers,
    //         body: postData,
    //         auth: {
    //             'user': 'anystring',
    //             'pass': `${process.env.MAILCHIMP_API_KEY}`
    //         }
    //     };
    //
    //     // request(options);
    //
    //     axios.post(`${process.env.MAILCHIMP_API_URL}`, options, {headers: headers})
    //         .then(res => {
    //             console.log(res);
    //             if(res.data.success) {
    //                 //If the response from MailChimp is good...
    //                 notify('success', 'Subscribed!', res.data.success);
    //                 this.setState({ email: '' });
    //                 this.handleLoadingState(false);
    //             } else {
    //                 //Handle the bad MailChimp response...
    //                 notify('error', 'Unable to subscribe!', res.data.error);
    //                 this.handleLoadingState(false);
    //             }
    //         }).catch(error => {
    //         //This catch block returns an error if Node API returns an error
    //         notify('error', 'Error. Please try again later.', error.message);
    //         this.handleLoadingState(false);
    //     });
    // }

    // handleOnChangeEmail = email => {
    //     this.setState({
    //         email: email
    //     })
    // }

    render() {
        return (
            <>
                {this.renderForm()}
            </>
        )
    }
}

function formHandler(email) {
    const data = {
        email: email
    }
    return axios({
        method: 'post',
        url: formAPI,
        data: data,
    })
}

function noOp() {
    console.log('submission in progress')
}