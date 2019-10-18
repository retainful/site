// Gatsby uses weird config stuff
require('dotenv').config()
const jwt = require('jsonwebtoken')
const privateKey = process.env.PRIVATE_KEY_FOR_JWT;


// Connect to our Mailgun API wrapper and instantiate it 
const mailgun = require('mailgun-js')
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
})

const successCode = 200
const errorCode = 400
const customErrorCode = 500
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// Our cloud function
exports.handler = function(event, context, callback) {
  let data = JSON.parse(event.body)

  let {name, subject, message, error, token } = data
  
  console.log(data.token)

try{
  var decoded = jwt.verify(data.token,privateKey);
  
  let errorMessage = null;

  if (!data) {
      errorMessage = "No form data supplied";
      console.log(errorMessage);
      callback(errorMessage);
  }

  if(!decoded){
    errorMessage = "Token Mismatch"
    console.log(errorMessage);
    callback(errorMessage);
  }

  if(!data.token){
    errorMessage = "Something Failed because of no token found";
    console.log(errorMessage);
    callback(errorMessage);
  }

  if (!data.name) {
      errorMessage = "No NAME supplied";
      console.log(errorMessage);
      callback(errorMessage);
  }


  if (!data.subject) {
      errorMessage = "No SUBJECT supplied";
      console.log(errorMessage);
      callback(errorMessage);
  }

  if (!data.message) {
      errorMessage = "No MESSAGE supplied";
      console.log(errorMessage);
      callback(errorMessage);
  }

if (errorMessage){
    console.log("No Message Sent as " + errorMessage);
    callback(null, {
      customErrorCode,
      headers,
      body: JSON.stringify(error),
    })
}

else{
  let mailOptions = {
    from: `${name} <${process.env.FROM_EMAIL_ADDRESS}>`,
    to: process.env.TO_EMAIL_ADDRESS,
    replyTo: process.env.FROM_EMAIL_ADDRESS,
    subject: `${subject}`,
    text: `${message}`,
  }


  console.log(mailOptions);
  
  // It's really as simple as this, 
  // directly from the Mailgun dashboard
  
  mg.messages().send(mailOptions, (error, body) => {
    if (error) {
      console.log(error)
      callback(null, {
        errorCode,
        headers,
        body: JSON.stringify("Message Not Hit Api" + error),
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
}

catch(error){
  errorMessage = "Something Failed";
  console.log(error);
  callback(errorMessage);
}
}