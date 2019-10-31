---
title: "Recover Abandoned Carts in WooCommerce"
description: "Learn how to recover abandoned carts in WooCommerce and how to automatically send follow-up emails for cart abandonment"
date: "2019-04-23"
author: "Kiruthiga"
tags: ["installation", "woocommerce", "abandoned-cart-recovery-emails"]
category: woocommerce
---
> The following guide applies for Retainful 1.x Legacy versions. If you are using Retainful 2.0, you can manage the abandoned carts in your [Retainful Dashboard](https://app.retainful.com/?utm_source=abandoned_cart_recovery_mails&utm_medium=retainful_dashboard&utm_campaign=docs) itself.

More than 69% of the shoppers abandon their carts. But with a well-timed email follow-ups, it is possible to recover at least 39% of them.

Retainful comes with awesome cart recovery features, which helps you send automatic follow-up emails and recover the carts.

This guide walks you through the process of creating **a sequence of Abandoned Cart Recovery Emails in your WooCommerce store**.

### Setting up an abandoned cart email sequence for version 1.x:

For those using Retainful with version 1.x, please follow the below procedure for setting up an abandoned cart email sequence.


### Step 1:Basic configuration

Go to your WordPress Dashboard -> WooCommerce -> Retainful -> Settings tab.

The tab allows you to set up things like
- When to consider a cart abandoned
- How many days to wait before deleting an abandoned cart 
and more.

![Setting](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/setting.png)

The following two are the most important settings you may want to adjust or you can leave them to defaults

**When to consider a cart as abandoned?** 

Set the time period when to consider the cart left with products as Abandoned Cart. 
Let us say, when a cart is left 30mins with the products can be considered as abandoned cart

**How many days to wait before automatically deleting the cart?**

A maximum number of days to keep track of the cart and when can the items in the cart can be deleted.
Example: 100Days
Also, you can set if the store admin wants to be notified when cart is recovered by the User here.
Type the compliance Message to show when tracking real-time carts using.

###Step 2: Create an Email Sequence / Follow-ups

Go to WordPress Dashboard -> WooCommerce -> Retainful -> Email Templates tab

Retainful helps you create unlimited number of emails that can be sent in a sequence automatically.

**Example of an email sequence:**

- Send an email 1 hour after customer abandons the cart
- Do another email follow-up 3 hours after the cart is abandoned
- Remind the customer again 1 day after the abandonment
- Still not recovered, send one more reminder 2nd day.

Once this sequence is created, Retainful will automatically execute this sequence when a customer abandons the cart. 
NOTE: You can set up the interval and customize the sequence in anyway you wanted.

Whenever the cart is recovered, the sequence will automatically stop for that particular customer. So you do not have to worry about it.

![Abandoned Cart Email Sequence](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/abandoned-cart-recovery-email-sequence.png)


### Creating your first email sequence - Send an email 1 hour after cart abandonment

Go to the Email Templates tab and click  **Create New Template** button to get started.


![NewEmailTemplate](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/NewEmailTemplate.png)

Set up the following parameters:

![CustomerEmailTemplate](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/EmailTemplate-for-customer.png)

**Template Name** - An identifier for the template. You can give a name for it. 

**Template Subject** - Subject to be used for this email. For example: We saved your cart! 

**Email Body** - Use the Wysisyg editor to design the email body. By default, we provide a simple, elgant template design. But you are free to change the body content. If you are an advanced user, you can click on the **Text** field to see the HTML code and edit directly there as well.

Retainful provides the following short codes that can be inserted in the email body to include dynamic data and for personalisation.

Example: You can include the customer's cart contents and a recovery link

![ForgotSomething](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/ForgotSomething.png)

**Short codes supported:**

**{{customer_name}}** - To display Customer name

**{{cart_recovery_link}}** - Link to recover user cart. When clicked, the customer is taken to the cart page of your site with his cart contents restored. A single click cart recovery.

**{{user_cart}}** - This includes the abandoned cart contents of the customer.

**{{site_url}}** - Site link


**Send this email in** - This helps you schedule the email. Example: 1 hour after cart abandonment. 

**Send a test email to** - Once you have created the template and saved, you can use this feature to send a test email and see how it looks.

Now **Save and close** the template.

Repeat the above steps to create the remaining 3 sequences

### Abandoned Cart reports in WooCommerce

Retainful provides a complete insight into your abandoned carts.
Go to your WordPress Dashboard -> WooCommerce -> Retainful -> Abandoned carts tab.


You can see
- Number of Abandoned Carts
- The value of the abandoned carts
- The number of Recovered Carts using the follow-ups
- The value of Recovered Carts

![AbonndanedCart](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/abondanedCarts.png)

<i>Here is how it looks in the **Reports** !!</i>

![ReportAnalytics](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/Analytics.png)


You can filter the reports using various date ranges as well!


### Real-time monitoring of Carts and Abandoned Carts in WooCommerce

Retainful also comes with a powerful live monitoring for carts. You can see how many carts that were currently in-progress.

![MonitoringCustomers](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/legends.png)

Click on the **In-progress carts** to view the current / live carts. In other words, see how many customers have added products to cart and see what they are purchasing as well.

![CartOptions](https://raw.githubusercontent.com/retainful/site-images/master/docs/abandoned-cart-recovery/cartOptions.png)


### Got questions?

Reach out to us if you have any support questions. You can use the [support request form](https://www.retainful.com/support) or the Live Chat button at the bottom right corner.
