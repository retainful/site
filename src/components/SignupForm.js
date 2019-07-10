import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

const NewsletterForm = ({ handleSendEmail, handleOnChangeEmail, email }) => {
    return (
        <form className="form-inline newsletter-form" method="POST">
            <input placeholder="Enter your email address" value={email}
                       onChange={({target}) => handleOnChangeEmail(target.value)} className="form-control" />
            <button onClick={() => handleSendEmail(email)} disabled={!validator.isEmail(email)}
                    type="submit" className="btn btn-success btn-lg">
                Get the templates
            </button>
        </form>
    )
}

NewsletterForm.propTypes = {
    email: PropTypes.string.isRequired,
    handleSendEmail: PropTypes.func.isRequired,
    handleOnChangeEmail: PropTypes.func.isRequired
}

export default NewsletterForm;