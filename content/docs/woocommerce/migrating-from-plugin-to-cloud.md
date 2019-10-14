---
title: "Migrating from plugin to cloud"
description: "Migrating from the Retainful plugin to cloud would allow you to manage abandoned carts and emails via cloud, thus increasing the efficiency of the process with minimal use of your site's resources."
date: "2019-10-09"
author: "Sowbagya lakshmi"
tags: ["migrating from plugin to cloud", "woocommerce"]
category: woocommerce
---

### Why should I migrate to cloud

Unlike Retainful version 1.x, where mail handling and cart management occurs at the Woocommerce store itself, if you migrate to the cloud the cart and mail management would be done in the Retainful account dashboard and not on your site. 

More information for reasons of migration can be found <link-text url="https://www.retainful.com/blog/abandoned-cart-solutions-cloud-based-solutions-vs-self-hosted-plugin-based-solutions">here</link-text>.

### Pre-requisites

While using Retainful 2.x, the mail delivery is done with encryption, for security purposes. So, please make sure that your site's server has mcrypt php library enabled.
>NOTE: The migration option would only be available for users that update the Retainful plugin from version 1.x to 2.x.
> For users who use Retainful 2.x by default, the cart and mail management would be done via cloud only.

### Migration from version 1.x to 2.x

#### Step-1: Upgrading from version 1.x to 2.x

The migration option would be available if you update from Retainful version 1.x to 2.x as mentioned before. Hence, the first step is to update the plugin version from 1.x to 2.x

1. A one-click update option would be available on your store's plugin manager if you have connected the store with your Retainful plugin. If you haven't connected the store with your account yet, you could do so by clicking <link-text url="https://www.retainful.com/docs/woocommerce/connecting-the-store-with-retainful-account" target="_blank" rel="noopener">here.<link-text>


2.  Once you connect the store with Retainful account, navigate to your Plugin manager(Woocommerce->Plugins->Installed plugins). You would find an update button below Retainful- Abandoned carts as shown below:
![Update button](../../images/docs/migrating-from-plugin-to-cloud/updte-button.png) 
    
3. Click on the Update button to Update the plugin to version 2.0. A success message appears post update like this:
![Update success](../../images/docs/migrating-from-plugin-to-cloud/update-success.png)
    
> NOTE: For new users, you could install the plugin straight away and all the data would be maintained on cloud. To learn how to install the plugin, click <link-text url="https://www.retainful.com/docs/woocommerce/install-retainful-plugin-for-woocommerce" target="_blank" rel="noopener">here</link-text>   

#### Step-2: Migrating to cloud       
    
1. Now that you have updated to 2.x, a button would appear at the Retainful page on your site.

![Switch to cloud button](../../images/docs/migrating-from-plugin-to-cloud/switch-to-cloud-button.png)      

2. Clicking on the button would move all the upcoming abandoned cart, in-progress carts and recovered cart entries to the Retainful account. Make sure that you have <link-text url="https://www.retainful.com/docs/woocommerce/connecting-the-store-with-retainful-account" target="_blank" rel="noopener">connected the store with your Retainful account.</link-text>

3. As far as Abandoned cart email templates are concerned, you will have to set up a series of new ones in your Retainful account, so that the users who abandon carts after migration would get notified.

#### Step-3: Post migrating to cloud

1. As mentioned before, after you migrate to cloud, there has to be an abandoned cart email sequence maintained on the Retainful account as well. There would be a default set of templates on the Account. You could use these templates or create a new email sequence as per your requirements.

**Switching back to plugin:**  

If you change your mind after migrating to cloud, you still have the option to switch back to plugin.

### Summary
In this article, we saw how to:
1.  Update the Retainful plugin
2.  Migrate the entries to cloud
3.  Switch back to plugin