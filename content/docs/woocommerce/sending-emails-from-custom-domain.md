---
title: "Sending emails from a custom domain"
path: "/docs/woocommerce/sending-emails-from-custom-domain"
description: "Learn how to send emails from your custom domain"
date: "2019-10-12"
author: "Sowbagya lakshmi"
tags: ["sending emails from custom domain", "woocommerce"]
category: woocommerce
---

Sending emails from your shop's domain not only looks more professional but it also helps build trust and improve your email deliverability. 

Setting up a custom email domain in Retainful ensures that all email is delivered from your domain, which removes the "via retainful.net" from the emails and uses "yourdomain.com" on the recovery email notifications.

In order to send emails from your shop's domain, you will need to add 2 DNS records wherever your domain is hosted. This topic is a bit technical but the process is rather simple.

In this article, let us see how to add a custom domain from which the abandoned cart emails are to be sent.

> NOTE: Setting up a custom domain is not mandatory. If you are fine with default mail settings, you can still use that itself.

### Should I create a custom domain

The answer to the above question depends on the following factors:

1. Is the from address you mentioned on your mail settings in Retainful account already using your store's domain instead of gmail.com or yahoo.com?
2. Are the abandoned cart emails displaying the from address as "yourstoredomain.com" or "via retainful.net"?

If No is the answer for the above questions, then it is recommended to set up a custom domain for your Retainful emails.

### Setting up a custom domain

To set up a custom domain, follow the below process:

#### Generating the DNS records

The first step is to add the shop's domain on the Retainful account and generate the DNS records. To do this:

1. Login to Retainful dashboard. Click on **Settings** tab.
2. Scroll to the **Advanced settings** tab.
3. In the **Custom Email domain** section, mention the shop's domain on the **Domain** field and click Save.

![Domain name](../../images/docs/sending-emails-from-custom-domain/enter-domain.png)

4. Once you click on save, a success message appears with the DNS records like this:

![DNS records](../../images/docs/sending-emails-from-custom-domain/DNS-records.png)
