---
title: "Exit Intent Popup"
description: "Detect when the customer tries to leave your website without purchasing and reduce cart abandonment"
date: "2019-09-24"
author: "Ramesh"
tags: ["woocommerce", "abandoned-cart-recovery-emails", "exit-intent-popup", "exit-popup"]
category: woocommerce
---

## What is Exit Intent ?

Exit Intent is a technology that detects visitors who are trying to leave your website without purchasing or providing their information. Over 60 percent of the shoppers leave your website after adding items to their cart. At least 33% of these otherwise lost orders can be recovered through a proper follow-up. 

If the shoppers leave your website without providing any information, it is impossible to reach out to them and convert. That is where the exit - intent popup can help you reduce cart abandonment and convert more visitors into customers.

Retainful now offers Exit Intent Popup to reduce cart abandonment and capture more leads in your WooCommerce store.

In this guide, let us walk you through the steps to add an Exit Intent Popup for your WooCommerce store.

### Requirements
Before we begin, the guide assumes the following:

- You have installed and activated the [Retainful - Abandoned Cart recovery email plugin for WooCommerce](https://www.retainful.com/features/woocommerce)
- Installed and activated Retainful Premium (Exit Intent Popup is a part of the Premium features of Retainful). [Upgrade to premium](https://app.retainful.com/?utm_source=exit_intent_popup&utm_medium=upgrade_to_premium&utm_campaign=docs) if you have not done it yet.
- IMPORTANT NOTE: It is not yet WMPL ready. We are working hard to bring multi-lingual support for the Exit Intent Popup

The **Exit Intent Popup** premium add-on offers 2 awesome features

- A fully customizable popup with email collection form. It triggers when customer tries to leave your shop without purchasing.
- A Coupon code to incentivize the customer to purchase or at least leave their email address.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/bfdd1cbd6e8641c79dab43fcc926a586" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### 1. Setting up Exit Intent Popup

Please go to your WordPress Dashboard -> WooCommerce -> Retainful -> Premium -> Exit Intent Popup

![Exit Intent Popup](https://raw.githubusercontent.com/retainful/site-images/master/docs/exit-popup/exit-popup-basic-settings-min.png)

**Enable Exit Intent Popup :** Set this field to YES to activate the popup

**Choose a coupon code:** You can get higher conversions if you provide a coupon code when customer tries to exit. The coupon will motivate the customer to complete the checkout. It's optional.


**Show Exit Popup:** Controls when to show the exit popup 

- **Only once per page :** Shows only one time per page. Example: if the customer is on the cart page and has seen the Exit Popup, he wont see it again when he tries to exit again at the cart page.
- **Everytime Customer tries to exit:** Shows everytime customer tries to exit
- **X number of times per page on exit:** You can set how many times the exit popup should show per page. Example: 2 times. 
- **Only once per session:** The popup will show just only once per customer session. It won't be shown again for the rest of the customer's session.

**Distance:** The minimum distance in pixels from the top of the page to consider triggering for. Default 100 pixels

**Cookie expiry days** The add-on uses the browser's local storage for storing infos like how many times it got triggered. But in older browsers, localStorage feature may not be available. In those cases, it uses the cookie. If cookie is used, you can set how many days the cookie should expire.

**Button redirects to** Where to take the customer when he clicks the button (Call to Action) in the Exit Popup. Default: Checkout page

### 2. Customizing the Popup

By default, the add-on comes with two templates for the exit-popup. It is fully customizable. You can even edit and change the html of the popup. It also has a preview

NOTE: You will need a bit of HTML skills.

![Exit Intent Popup Customisation](https://raw.githubusercontent.com/retainful/site-images/master/docs/exit-popup/exit-popup-template-min.png)

You can also use Custom CSS styles if you would like.

The template supports the following short codes:

- **{{coupon_code}}** - To show the coupon code selected in the settings
- **{{cart_url}}** - Url to redirect to cart page
- **{{checkout_url}}** - Url to redirect user to checkout page
- **{{email_collection_form}}** - To display an email collection form


### 3. Email Collection Form Styles

It is completely optional to show an Email Collection form in the Exit Popup. But it is recommended to include an email collection form. Because quite a number of customers may not be ready to complete the purchase immediately. So getting their email address would help you to follow them up.

The email collection form can be included in the popup template using the following short code: {{email_collection_form}}

You can customize the look and feel of the email collection form like the colour, background, button text and more.

![Email Collection form Customisation](https://raw.githubusercontent.com/retainful/site-images/master/docs/exit-popup/exit-popup-email-form-settings-min.png)

### 4. Save and Go Live!

Save and start reducing cart abandonments in your store.

### 5. How does it look in the storefront?

Here is a screenshot of how it gets triggered while a customer tries to leave the website.

![Exit Intent Popup preview](https://raw.githubusercontent.com/retainful/site-images/master/docs/exit-popup/exit-intent-popup-min.png)


### Pro Tip!
If you plainly say "Enter your email", most customers would hesitate to provide it.
So word the popup header differently!. Here are some creative headings for you!

- Get special offers emailed to you!
- Become our VIP customer. Get personalized offers delivered to your email!
- Get notified early for the next sale!

