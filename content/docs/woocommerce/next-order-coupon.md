---
title: "Next Order Coupon"
description: Overview on setting up Abandoned Cart Recovery emails and dashboard for reports on recovered carts
date: "2019-11-05"
author: "Sowbagya lakshmi"
tags: ["next order coupon", "woocommerce"]
category: woocommerce
---

Encourage your customers to buy more by providing offer codes to their next purchase.

Give them with dynamically generated coupon codes while a customer places an order along with the order notification email.

Retainful - Next order coupons will let you to send offers included with the coupon codes within minutes of configuration.

Let us see, how that works.

### Setting up next order coupons

Navigate to **Woocommerce->Retainful- Abandoned carts->Next order coupon**.

![Next order coupon](../../images/docs/NextorderCoupon/settings-next-order-coupons.png)

### Basic settings

 Enable next order coupon and set up the **coupon value** in the basic settings here. 

![coupon value settings](../../images/docs/NextorderCoupon/coupon-value-settings.png)

**Order status and user role**

Order status and user role based coupon generation is also possible. Choose the desired order status and user role. The default setting is **All**.

**Coupon Type and Value:**  

You can provide a Percentage off on their Next purchase or a Flat price discount in the cart with a coupon value as per your requirement 

Example:  15% discount on the cart.

**Apply coupon to:**

This setting is to validate the coupon code to be applied only when a customer logged or to be validated in the checkout or do not validate.

- Allow anyone to apply coupon - Do not validate the coupon if used my a customer.
- Allow the customer to apply but validate at checkout - Coupon will be applied but the user will be validated at the checkout as user might not login until checkout
- Allow customer to apply coupon only after login


![Other settings](../../images/docs/NextorderCoupon/other-settings.png)

 **Allow next order coupons for orders created in the back end and also for old orders (when re-sending the email notification):**

By enabling this option, now you could send next order coupons for existing orders and new orders created from your back end also.

For more information on how to set up next order coupons for existing orders and
new orders from back end, click <link-text url="https://www.retainful.com/docs/woocommerce/testing-next-order-coupons/#from-store-admins-backend" target="_blank" rel="noopener">here</link-text>.

**Show next order coupon in order "Thank you" page?:**

Setting this option to Yes would show up a dynamically generated next order coupon at the thank you page of your store front. 

More information regarding this option can be found <link-text url="https://www.retainful.com/docs/woocommerce/how-to-display-coupon-code-on-thank-you-page" target="_blank" rel="noopener">here</link-text>.

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

**{{coupon_code}}** - Coupon code
**{{coupon_amount}}** - Coupon amount
**{{coupon_url}}** - Url to apply coupon automatically
**{{coupon_expiry_date}}** - Coupon expiry date(If coupon does not have any expiry days,then this will not attach to the message).

### Usage Restriction

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

### Coupon applied response message

You can display a popup indicating the application of the coupon while users redeem their next order coupons. This popup would appear when users click the GO button below the coupon code on their order notifications.

![Coupon response popup](../../images/docs/NextorderCoupon/coupon-response-popup.png)

To display the popup while users redeem their next order coupons, set the option Enable response popup to Yes.

You could even customize the text that appears on the popup in the message box available. As part of customization, you could include dynamic data by using shortcodes listed below the coupon popup message box.

We have completed the setting now.

### How users view the next order coupon

Let us see, how it looks in the emails as per the settings provided.

![Coupon Preview](https://raw.githubusercontent.com/retainful/site-images/master/docs/NextorderCoupon/couponPreview.png)


Cool, isn’t it !! 
Users can redeem their coupons by just clicking on the **Go** button below the coupon code.

### What's next?

<link-text url="https://www.retainful.com/docs/woocommerce/testing-next-order-coupons" target="_blank" rel="noopener">Know how to test your next order coupons</link-text>
