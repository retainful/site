---
title: "Shortcodes for reference"
path: "/docs/woocommerce/shortcodes-for-reference.md"
description: "Shortcodes can be used to personalize your email templates. Here is a list of shortcodes that are allowed and how to use them on your templates."
date: "2019-10-10"
author: "Sowbagya lakshmi"
tags: ["shortcodes for reference", "woocommerce", "abandoned cart email templates"]
category: woocommerce
---

### Personalize your recovery emails using shortcodes

Retainful lets you personalize your abandoned cart email templates with the help of shortcodes.

<call-out>As a part of personalization, make sure that your recovery emails contain atleast one or all of the following:
1. User's name.
2. Link to recover their cart.
3. Items on the user's cart.
</call-out>

Retainful offers you endless possibilites to use shortcodes whenever and wherever you wish on your email templates.

This article guides you through the list of allowed shortcodes and how to use them on your mail templates.

### Popular shortcodes

Following is a list of most commonly used shortcodes and what data they return on your emails.

**{{billing_address.first_name}}** - Returns the First name of the user that was entered in their billing address section.

**{{ abandoned_checkout_url }}** - Redirects the users to their cart with the items that they added before abandonment.

**{{retainful_coupon}}** - Displays the coupon code of the Woocommerce coupon. 

> Note: A coupon block should be added to the email template. Click <link-text url="https://www.retainful.com/docs/woocommerce/adding-a-coupon-block-on-your-email-template" target="_blank" rel="noopener">here</link-text> to know how to add a coupon block. 

**{{abandoned_checkout_url_with_coupon_code}}** - Redirects users to the shop page with the coupon auto-applied. 

> NOTE: A coupon block should be attached in the mail template already. This shortcode can be mentioned in a Shop now button below the coupon code.

**{{shop.address}}** - Displays the shop's address mentioned in your Woocommerce store settings.

**{{shop.email}}** - Shows the shop's email address specified in your Woocommerce store settings.


### Other allowed shortcodes

#### Customer data 

This section focusses on shortcodes that fetch customer data from the checkout. Following are the list of shortcodes that fetch user data.

**{{customer.email}}** - The email address used by user at the checkout.

**{{customer.first_name}}**- Returns the first name mentioned by user at the checkout.

**{{customer.last_name}}** - Displays the last name specified by user at the checkout.
 
**{{customer.phone}}** - The phone number entered by user at the checkout would be returned.
 
**{{customer.state}}** - The state chosen by the user at the checkout process.

#### Billing address

The billing address data that the user enters can be fetched using the following set of shortcodes.
	
**{{billing_address.lastname}}** - Last name of the user in billing address.

**{{billing_address.name}}**	 - User's name mentioned in the billing address.

**{{billing_address.city	}}** - The city chosen by user at the billing address.

**{{billing_address.country}}** - Country selected in billing address.

**{{billing_address_zip}}**- Zip code mentioned at the billing address.

**{{billing_address.address1}}** - The street address mentioned at the billing address is called address1. That information would be returned.

**{{billing_address.address2}}** - The extra information entered in the street address part is collected as address2.

**{{billing_address.province}}** - The state/province chosen at the billing address.

**{{billing_address.province_code}}** - The two letter code of the selected province.

**{{billing_address.country_code}}** - The two letter code of the selected country.
 
 
#### Shop data

Following are the shortcodes that return the data of the Woocommerce shop that is connected to the Retainful account.

**{{shop.domain}}**- The shop URL would be returned.

**{{shop.address1}}** - The address line 1 parameter of your Woocommerce store address would be returned.

**{{shop.address2}}** - The address line 2 parameter of your Woocommerce store address would be returned.

**{{shop.currency}}** - The default currency of the store.

**{{shop.city}}** - The city chosen at the shop's address.

**{{shop.zip}}** - The zip code mentioned in the shop address.

**{{shop.province_code}}** - The two letter code of the chosen province.

**{{shop.country_code}}** - The two letter code of the country chosen in the store address.

**{{shop.enabled_presentment_currencies}}** - In case of a store that uses multiple currencies, all the enabled currencies would be listed.

**{{shop.primary_locale}}** - The default language of the store would be listed.

#### Shipping address

Following shortcodes return the data mentioned by users on the shipping address section of the checkout.

**{{shipping_address.lastname}}** - Last name of the user in shipping address.

**{{shipping_address.name}}** - User's name mentioned in the shipping address.

**{{shipping_address.city	}}** - The city chosen by user at the shipping address.

**{{shipping_address.country}}** - Country selected in shipping address.

**{{shipping_address_zip}}**- Zip code mentioned at the shipping address.

**{{shipping_address.address1}}** - The street address mentioned at the shipping address is called address1. That information would be returned.

**{{shipping_address.address2}}** - The extra information entered in the street address part is collected as address2.

**{{shipping_address.province}}** - The state/province chosen at the shipping address.

**{{shipping_address.province_code}}** - The two letter code of the selected province.

**{{shipping_address.country_code}}** - The two letter code of the selected country.
 
 
### What's next?

Try using these shortcodes on your email templates. 

Navigate to Retainful Dashboard -> Emails -> Email Templates. Create an abandoned cart email template and set it live. 