import React from 'react'
import { navigate } from "gatsby";

import Layout from '../components/layout'
import SEO from '../components/seo'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


class SupportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": form.getAttribute("name"), ...this.state })
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message, subject } = this.state;
        return(
            <Layout>
                <SEO title="Support" />
                <div className="container">
                    <div className="contact-intro text-center">
                        <h3>Support</h3>
                        <p>Please fill-in and submit the form with your request. One of our support staff will be get in touch with you</p>
                    </div>
                    <div className="contact-form">
                        <form name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden>
                                <label>
                                    Don’t fill this out:{" "}
                                    <input name="bot-field" onChange={this.handleChange} />
                                </label>
                            </p>
                            <p>
                                <label>Name: </label>
                                <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Enter your name" />
                            </p>
                            <p>
                                <label>Email: </label>
                                <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="name@name.com"  />
                            </p>
                            <p>
                                <label>Subject: </label>
                                <input type="text" name="subject" value={subject} onChange={this.handleChange} placeholder="Subject" />
                            </p>
                            <p>
                                <label>Message: </label>
                                <textarea name="message" value={message} onChange={this.handleChange} placeholder="Message" ></textarea>
                            </p>
                            <p>
                                <button type="submit" className="btn-action btn-lg">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default SupportPage
