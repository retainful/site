---
title: "How to display an offer in the Email Collection Popup"
description: "Learn how to motivate the customers by showing an offer in the Email Collection Popup at the time of adding an item to cart"
date: "2019-06-01"
author: "Ramesh"
tags: ["woocommerce", "abandoned-cart-recovery-emails", "email-collection-popup", "coupon-popup"]
category: woocommerce
---

# Motivate customers with an offer in Email Collection popup

Let's face the fact. Very few people would want to give their email address at the time of adding to cart. Especially, when you plainly ask "Enter your email to add this item to cart"! Would you provide yours? No.

So how do we collect the customer's email at the time of adding a product to cart?

> Incentivize. Who would resist if a popup says "You got a 5% discount! Email me the coupon" 

Now, anyone would be willing to give their email address to you. So how are we going to achieve that with Retainful? 

Retainful offers a Premium Add-on for **Showing an offer at the Email Collection Popup and sending a coupon code to the email**

This guide walks you through the steps.

### Step 1:  Download the Retainful Premium

- Login to [https://app.retainful.com](https://app.retainful.com/?utm_source=coupon_for_email_popup&utm_medium=app_retainful&utm_campaign=docs)
- Click on the **Upgrade to Premium** link or directly go to [Billing section](https://app.retainful.com/billing/?utm_source=coupon_for_email_popup&utm_medium=app_retainful_billing&utm_campaign=docs)
- Choose a plan and pay. (It's worth an investment as you can recoop with just a few recovered carts!)
- Download the Retainful Premium plugin.

### Step 2: Install and Activate the Retainful Premium

Go to your WordPress Dashboard -> Plugins and install the Retainful Premium plugin and activate it.

### Step 3: Enable the Add to Cart Popup feature

An import ingredient to recover abandoned cart is the email address of the prospective customer.
In WooCommerce, the email of the customer or the visitor is made available only at the Checkout. If the customer abandons the cart before going to checkout, then the sale is lost forever. 

> So, it is important to **collect the email address** at the time of adding to cart, so that it can be recovered.

- Navigate to WooCommerce -> Retainful -> Premium tab. 
- Enable the Add to Cart popup add-on.
- And configure the popup settings to be something like the image below:

![Coupon for Email Collection](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/coupon-popup-design.png)

Customers would now be happy to enter their email address to get the coupon code emailed to them.

[Read more at this step-by-step guide](https://www.retainful.com/docs/woocommerce/collect-email-address-before-adding-to-cart-in-woocommerce)


### Step 4: Create a coupon code

We need a coupon code to send it to the customer. So navigate to WooCommerce -> Coupons.
Click "Add Coupon" button to create a coupon.
![Create a coupon in WooCommerce](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/coupon-add-new.png)

You can create a simple percentage based coupon. That should be sufficient or you can also go for a fixed amount discount as well. Choice is yours :-)

In the Usage limits tab, make sure you set the "Usage limit per user" to 1 (as you do not want the same customer to use the coupon multiple times)

![Coupon Usage Limit](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/coupon-usage-limit.png)


### Step 5: Enable Coupon for Email Collection

Navigate to WooCommerce -> Retainful -> Premium -> Add to cart popup configuration
Scroll down to find the **Coupon settings - Incentivize the customer for entering his email**

![Incentivize settings](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/coupon-email-collection.png)

As shown in the above screenshot,
- Set the **Enable coupon** to Yes
- Choose the coupon code you created in the previous section
- Configure the Email template (this will be used for sending the coupon code to the customer). 

The email template has two short codes:
**{{coupon_code}}** : The code you have selected
**{{coupon_url}}** : A url that will take the customer to the cart and automatically apply the code as well.

### Step 6: Save your configuration

Now you have successfully set up Retainful to incentivize your customers to provide their email.

Here is a screenshot of how the popup would look at the store front:

![Incentivize popup](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/coupon-popup-store-front.png)

That's a great motivation for the customer to complete his purchase. Even if he abandons the cart after getting the coupon, you can still have the chance to [recover it by following up with email reminders](https://www.retainful.com/docs/woocommerce/retainful-abandoned-cart-recovery)

### What's Next?

- Get Retainful Premium now by logging into [https://app.retainful.com/billing](https://app.retainful.com/billing/?utm_source=coupon_for_email_popup&utm_medium=app_retainful_billing&utm_campaign=docs) 
- Learn how to set up a sequence of [Abandoned Cart recover email reminders](https://www.retainful.com/docs/woocommerce/retainful-abandoned-cart-recovery)
