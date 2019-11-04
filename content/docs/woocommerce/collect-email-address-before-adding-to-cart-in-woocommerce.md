---
title: "Collecting Email Address Before Adding an Item to Cart in WooCommerce"
description: "Learn how to collect the email address of the customer before adding to cart so that you can recover it even if customer abandons the cart"
date: "2019-06-01"
author: "Ramesh"
tags: ["woocommerce", "abandoned-cart-recovery-emails", "email-collection-popup"]
category: woocommerce
---

 An important requirement to recover abandoned cart is the email address of the prospective customer.

As you have noticed, someone might add an item to cart. But if they leave  your site without purchasing the item, then you left with no way of reaching him or her.

> Collecting email address at the time of adding a product to cart is a best solution. This would help you reach out to the customer even if he abandons the cart and then recover it.

This guide walks you through the steps to Collect Email Address using the Retainful Abandoned Cart recovery plugin for WooCommerce.

### Requirements
Before we begin, the guide assumes the following:

- You have installed and activated the [Retainful plugin for WooCommerce](https://www.retainful.com/features/woocommerce)
- [Connected to your Retainful Account](https://www.retainful.com/docs/woocommerce/connecting-the-store-with-retainful-account) 

The **Add to cart popup** premium add-on offers 2 awesome features

- An Email Collection popup (triggered at the time of adding an item to cart)
- Coupon code to incentivize the customer to give their email address

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/7a064bb6865942fb943a991709162e2e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## The Add-to-Cart Email Collection Popup

### 1. Setting up Email Collection

Please go to your WordPress Dashboard -> WooCommerce -> Retainful -> Premium -> Add to cart popup.

![Email Collection Add to Cart popup](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/add-to-cart-popup.png)

**Enable Add to Cart Popup modal:** Set this field to YES to activate the popup for Email Collection

**Email Address Mandatory:** You can set this to YES to force customers to enter their email address before adding to cart. You can also have this set to NO if you do not want to force

**No Thanks action:** By default, Retainful will show a No Thanks link to close the popup and proceed to cart. This to ensure that the customer get a choice. Recommended setting is _Allow adding to cart_

### 2. Customizing the Email Collection Popup

Retainful allows you to customize the popup design. You can change the default text, button text, no thanks action link text and more.

![Popup Design](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/email-collection-form.png)

It also lets you provide a GDPR compliance message since you were collecting the email address. 

### 3. Save and Go Live!
Save and start recovering more abandoned carts effectively!

### 4. How does it look in the storefront?

Here is a screenshot of how it gets triggered while adding a product to cart.

![Add to Cart Popup for WooCommerce](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/add-to-cart-popup-storefront.png)

> The following steps are optional. 

## Motivating customers with an offer in Email Collection popup

Let's face the fact. Very few people would want to give their email address at the time of adding to cart. Especially, when you plainly ask "Enter your email to add this item to cart"! Would you provide yours? No.

So how do we collect the customer's email at the time of adding a product to cart?

> Incentivize. Who would resist if a popup says "You got a 5% discount! Email me the coupon" 

Now, anyone would be willing to give their email address to you. So how are we going to achieve that with Retainful? 

### Step 1: Create a coupon code

We need a coupon code to send it to the customer. So navigate to WooCommerce -> Coupons.
Click "Add Coupon" button to create a coupon.
![Create a coupon in WooCommerce](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/coupon-add-new.png)

You can create a simple percentage based coupon. That should be sufficient or you can also go for a fixed amount discount as well. Choice is yours :-)

In the Usage limits tab, make sure you set the "Usage limit per user" to 1 (as you do not want the same customer to use the coupon multiple times)

![Coupon Usage Limit](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/coupon-usage-limit.png)


### Step 2: Enable Coupon for Email Collection

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

### Pro Tip!
If you plainly say "Enter your email", most customers would hesitate to provide it.
So word the popup header differently!. Here are some creative headings for you!

- Get special offers emailed to you!
- Become our VIP customer. Get personalized offers delivered to your email!
- Get notified early for the next sale!

### What's Next?

- [Create your first abandoned cart recovery email](https://www.retainful.com/docs/woocommerce/creating-an-abandoned-cart-email-sequence)


