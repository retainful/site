const request = require("request");

const mailChimpAPI = process.env.MAILCHIMP_API_KEY;
const mailChimpListID = process.env.MAILCHIMP_LIST_ID;
const mailChimpAutomationID = process.env.MAILCHIMP_AUTOMATION_ID;
const mailChimpMailQueueID = process.env.MAILCHIMP_QUEUE_ID;
const mcRegion = process.env.MAILCHIMP_REGION;

module.exports.handler = (event, context, callback) => {

    const formData = JSON.parse(event.body);
    const email = formData.email;
    let errorMessage = null;

    if (!formData) {
        errorMessage = "No form data supplied";
        console.log(errorMessage);
        callback(errorMessage);
    }

    if (!email) {
        errorMessage = "No EMAIL supplied";
        console.log(errorMessage);
        callback(errorMessage);
    }

    if (!mailChimpListID) {
        errorMessage = "No LIST_ID supplied";
        console.log(errorMessage);
        callback(errorMessage);
    }

    const data = {
        email_address: email,
        status: "subscribed",
        tags: ["lead-magnet-templates"],
        merge_fields: {"FNAME": email}
    };

    const subscriber = JSON.stringify(data);
    console.log("Sending data to mailchimp", subscriber);

    request({
        method: "POST",
        url: `https://${mcRegion}.api.mailchimp.com/3.0/lists/${mailChimpListID}/members`,
        body: subscriber,
        headers: {
            "Authorization": `apikey ${mailChimpAPI}`,
            "Content-Type": "application/json"
        }
    }, (error, response, body) => {
        if (error) {
            callback(error, null)
        }
        const bodyObj = JSON.parse(body);

        console.log("Mailchimp body: " + JSON.stringify(bodyObj));
        console.log("Status Code: " + response.statusCode);

        if (response.statusCode < 300 || (bodyObj.status === 400 && bodyObj.title === "Member Exists")) {
            console.log("Added to list in Mailchimp subscriber list");
            callback(null, {
                statusCode: 201,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true"
                },
                body: JSON.stringify({
                    status: "saved email"
                })
            })
        } else {
            console.log("Error from mailchimp", bodyObj.detail);
            callback(bodyObj.detail, null);
        }

        const dataSec = {
            email_address: email,
        };

        const subscriberSec = JSON.stringify(dataSec);

        request({
            method: "POST",
            url: `https://${mcRegion}.api.mailchimp.com/3.0/automations/${mailChimpAutomationID}/emails/${mailChimpMailQueueID}/queue`,
            body: subscriberSec,
            headers: {
                "Authorization": `apikey ${mailChimpAPI}`,
                "Content-Type": "application/json"
            }
        }, (error1, response1, body1) => {
            if (error1) {
                callback(error1, null)
            }
            const bodyObj1 = JSON.parse(body1);

            console.log("Mailchimp body: " + JSON.stringify(bodyObj1));
            console.log("Status Code: " + response1.statusCode);

            if (response1.statusCode < 300 || (bodyObj1.status === 400 && bodyObj1.title === "Member Exists")) {
                console.log("Added to list in Mailchimp automation email queue");
                callback(null, {
                    statusCode: 201,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": "true"
                    },
                    body: JSON.stringify({
                        status: "saved email"
                    })
                })
            } else {
                console.log("Error from mailchimp", bodyObj1.detail);
                callback(bodyObj1.detail, null);
            }

        });

    });

};