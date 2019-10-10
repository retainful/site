import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

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

    renderForm(placeholder, btnTxt, btnCls, btnColor, width) {
        const { success, loading } = this.state;
        const buttonText = (loading) ? '...' : btnTxt;
        const buttonColor = {
            background: btnColor,
            borderColor: btnColor,
        };
        const formWidth = {
            width: width
        };
        const handler = (loading) ? noOp : this.handleSubmit;

        /* if they submitted the form, show thanks */
        if (success) {
            return (
                <div>
                    <div className="alert alert-success">
                        <strong>Success!</strong> Thanks for signing up!
                    </div>
                </div>
            )
        }
        return (
            <form onSubmit={handler} className="form-inline newsletter-form" style={formWidth}>
                <input type="email" name="email" className="form-control sign-up" ref={input => this.email = input} placeholder={placeholder} required/>
                <button className={"btn btn-success btn-lg sign-up-button " + btnCls} style={buttonColor} type="submit">
                    {buttonText}
                </button>
            </form>
        )
    }

    render() {
        return (
            <>
                {this.renderForm(this.props.placeholdertext,this.props.btntext, this.props.btnclass, this.props.btncolor, this.props.width)}
            </>
        )
    }
}

NewsletterForm.defaultProps = {
    placeholdertext: 'Enter your email',
    btntext: 'Sign Up for free',
    btnclass: '',
    btncolor: '#32C733',
    width: ''
};

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