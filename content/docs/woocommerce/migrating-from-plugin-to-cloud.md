---
title: "Migrating from plugin to cloud"
description: "Migrating from the Retainful plugin to cloud would allow you to manage abandoned carts and emails via cloud, thus increasing the efficiency of the process with minimal use of your site's resources."
date: "2019-10-09"
author: "Sowbagya lakshmi"
tags: ["migrating from plugin to cloud", "woocommerce"]
category: woocommerce
---

### Why should I upgrade ?

Retainful 1.x heavily depends on the WP Cron for managing abandoned carts, scheduling and sending emails. However, the WP Cron is quite unreliable and performance intensive too. Read what  <link-text url="https://www.retainful.com/docs/woocommerce/migrating-from-plugin-to-cloud">WP Expert Chris Lema has to say about WP Cron</link-text>.

Besides, managing tons of abandoned carts and constant checks for scheduling adds additional loads to your database and server. 

So we have introduced the abandoned cart management, email creation, scheduling and sending of emails in the Retainful app itself. All these run on Retainful servers. No extra loads to your shop.

If you would like to learn more about the benefits, <link-text url="https://www.retainful.com/blog/abandoned-cart-solutions-cloud-based-solutions-vs-self-hosted-plugin-based-solutions">check this detailed blog post</link-text>.

### Pre-requisites

Make sure you have installed the Retainful 2.0 plugin.

>NOTE: The migration option is available for existing users of Retainful 1.x
> For users who use Retainful 2.x by default, the abandoned cart management would be done via Retainful App by default. No further steps are needed.

### Migration from version 1.x to 2.x

#### Step 1: Upgrading from version 1.x to 2.x

Install or update to the Retainful 2.0 plugin.

1. Navigate to your Plugin manager (Woocommerce->Plugins->Installed plugins). You would find an update button below Retainful- Abandoned carts as shown below:
![Update button](../../images/docs/migrating-from-plugin-to-cloud/updte-button.png) 
    
3. Click on the Update button to Update the plugin to version 2.0. A success message appears post update like this:
![Update success](../../images/docs/migrating-from-plugin-to-cloud/update-success.png)
    
> NOTE: Are you a new user? These steps are not relevant for you! Please skipe the entire guide.

#### Step 2: Switching to cloud       
    
1. Now that you have updated to 2.x, a button would appear at the Retainful page on your site.
![Switch to cloud button](https://raw.githubusercontent.com/retainful/site-images/master/docs/Installation/switch-to-cloud.png)

2. Press that button. 

3. You will see a Connection tab 
![Switch to cloud button](https://raw.githubusercontent.com/retainful/site-images/master/docs/Installation/connection-tab.png)

4. Login to your [Retainful Dashboard](https://app.retainful.com) and then go to the Settings to get your App ID and Secret Key.

5. Copy these keys and paste them in your Connection tab.

6. Press the "Connect" button

> IMPORTANT NOTE: If you are an existing user and only used the App ID before, please click "Reconnect" button after entering the Secret Key.

#### Step 3: Create your first email template

Your store is now connected. To start recovering abandoned carts, create at least one Email template in your Retainful Dashboard and set it active.

Go to Retainful Dashboard -> Emails -> Email Templates. Create an abandoned cart email template with our brand new drag and drop editor and set it live. 

NOTE: You can create as many email templates as you required for your recovery email sequence. There is no limit.

You are now all set to receover abandoned :-)

#### Post migration

An ideal abandoned cart recovery campaign comprises at least 3 emails. So go ahead and create the required emails for your sequence and set them active once you are done.

**Switching back to plugin:**  

If you change your mind after migrating to cloud, you still have the option to switch back to plugin.

### What's Next ?

[Creating an Abandoned Cart Email Template with Drag and Drop Editor](https://www.retainful.com/docs/woocommerce/customizing-the-email-templates-using-drag-and-drop-editor)