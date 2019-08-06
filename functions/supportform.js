require('dotenv').config({
  path: `.env.${process.env}`,
})

// Connect to our Mailgun API wrapper and instantiate it 
const mailgun = require('mailgun-js')
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
})

// Response stuff
const successCode = 200
const errorCode = 400
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// Our cloud function
exports.handler = function(event, context, callback) {
  let data = JSON.parse(event.body)
  let { name, email, subject, message } = data
  let mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.MY_EMAIL_ADDRESS,
    replyTo: email,
    subject: `${subject}`,
    text: `${message}`,
  }
  
  // It's really as simple as this, 
  // directly from the Mailgun dashboard
  
  mg.messages().send(mailOptions, (error, body) => {
    if (error) {
      console.log(error)
      callback(null, {
        errorCode,
        headers,
        body: JSON.stringify(error),
      })
    } else {
      console.log(body)
      callback(null, {
        successCode,
        headers,
        body: JSON.stringify(body),
      })
    }
  })
}