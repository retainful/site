---
title: "Next Order Coupon"
description: Overview on setting up Abandoned Cart Recovery emails and dashboard for reports on recovered carts
date: "2019-04-30"
author: "Kiruthiga"
tags: ["installation", "woocommerce"]
category: woocommerce
---

Engage your customers by providing offer codes to their next purchase.

Give them with dynamically generated coupon codes while a customer places an order along with the order notification email.

Retainful - Next order coupons will let you to send offers included with the coupon codes within minutes of configuration.

Let us see, how that works.

Go into the plugin after installation:

![AbondanedCarts](https://raw.githubusercontent.com/retainful/site-images/master/docs/NextorderCoupon/pluginInstallation.png)

**Activate the license / the App ID:**

![Activation](https://raw.githubusercontent.com/retainful/site-images/master/docs/NextorderCoupon/LicenceActivation.png)


Once the App Id is validated, you are now ready to create a Usage restricted dynamically generating Next Order coupons.

Jump on to the Next Order Coupon Tab:

![NextOrderCoupon](https://raw.githubusercontent.com/retainful/site-images/master/docs/NextorderCoupon/NextOrderCoupons.png)


Set up the coupon value in the basic settings here.

**Coupon Type and Value:**  

You can provide a Percentage off on their Next purchase or a Flat price discount in the cart with a coupon value as per your requirement 

Example:  20% discount on the cart.

**Apply coupon to:**

This setting is to validate the coupon code to be applied only when a customer logged or to be validated in the checkout or do not validate.

- Allow anyone to apply coupon - Do not validate the coupon if used my a customer.
- Allow the customer to apply but validate at checkout - Coupon will be applied but the user will be validated at the checkout as user might not login until checkout
- Allow customer to apply coupon only after login

**Display coupon message after:**

You can choose where the coupon has to be displayed in the email.

- After Customer Details
- After Order details
- After Order meta

Choose it as per your requirement to display the coupon code.

Let us now create the custom coupon message to be displayed.

**Custom Coupon Message:**

![CustomCouponMessage](https://raw.githubusercontent.com/retainful/site-images/master/docs/NextorderCoupon/couponCode.png)

Use the below short code to customize the coupon message with dynamic data:

{{coupon_code}} - Coupon code
{{coupon_amount}} - Coupon amount
{{coupon_url}} - Url to apply coupon automatically
{{coupon_expiry_date}} - Coupon expiry date(If coupon does not have any expiry days,then this will not attach to the message).

**Usage Restriction:**

Restrict the usage of the coupon in various ways.

![UsageRestriction](https://raw.githubusercontent.com/retainful/site-images/master/docs/NextorderCoupon/usageRestriction.png)

**Minimum Spend:**  Set the minimum spend(subtotal) allowed to use the coupon.

**Maximum Spend:** Set the maximum spend(subtotal) allowed to use the coupon.

**Coupon expires in :** After the entered number of days coupon will automatically expired.
Note: Please leave empty or put 0 to never expire.

**Coupon expire date format:** Select a date format from the dropdown.

**Individual use only:**  You can check this if you want this coupon to be used separately alone.

**Exclude sale items :**  Check this box if you want this coupon not to be applied on sale items.

![ExcludeSaleItem](https://raw.githubusercontent.com/retainful/site-images/master/docs/NextorderCoupon/UsageProducts.png)

You can also restrict the coupon in much more options like only for applying to certain products or only to categories.

You can also Exclude some products or categories from the discount coupon to be applied.

We have completed the setting now.

Let us see, how it looks in the emails as per the settings provided.

![Coupon Preview](https://raw.githubusercontent.com/retainful/site-images/master/docs/NextorderCoupon/couponPreview.png)


Cool, isn’t it !!