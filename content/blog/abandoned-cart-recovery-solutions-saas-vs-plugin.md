---
path: '/blog/abandoned-cart-recovery-solutions-saas-vs-plugin'
date: '2019-10-01'
title: 'Abandoned Cart Recovery Solutions: SaaS Vs Plugins'
description: 'It’s time to move on from self-hosted plugin based cart recovery solutions to cloud-based solutions (SaaS) for recovering your abandoned carts. And here we’ve given every reason as to why you should be doing so.'
keywords: "cart abandonment technology, wordpress saas, cart recovery solution, cart abandonment software"
author: 'Ramesh Elamathi'
image: '../images/abandoned-cart-solutions-cloud-based-solutions-vs-self-hosted-plugin-based-solutions/abandoned-cart-solutions-cloud-based-solutions-vs-self-hosted-plugin-based-solutions.png'
thumbnail: '../images/abandoned-cart-solutions-cloud-based-solutions-vs-self-hosted-plugin-based-solutions/abandoned-cart-solutions-cloud-based-solutions-vs-self-hosted-plugin-based-solutions.png'
category: 'eCommerce'
ogtype: 'blog'
---

Cart abandonment has now become a serious problem for online stores.  Small or large, it really doesn’t matter. It's a fact.  And, stores need lightspeed rescue solutions to address cart abandonment problems. With an effective follow-up, it is proven that 40 to 50 percent of abandoned carts can be recovered, which will boost your revenue by at least 5x.

When it comes to abandoned cart follow-ups, there are a number of solutions available especially for WooCommerce based stores. They can be broadly classified into two categories based on their architecture:

1. Plugins that run within your website
2. Solutions that run on the cloud (SaaS)

Let me explain these two types of solutions a bit more.

**Plugins that Run Within Your Website**

These are plugins that can be installed on your website. And they operate using your own server resources for running the entire abandoned cart email campaigns. Operations like continuous abandoned carts tracking, email scheduling and sending them at different intervals are performed using your website’s resources.

**Solutions that Run On the Cloud (SaaS - Software As a Service)**

These are called <link-text url="https://www.retainful.com/" rel="noopener" target="_blank">SaaS</link-text> (Software-as-a-Service) solutions, which run on the cloud infrastructure like Amazon AWS or Google Cloud. One such example of a SaaS solution is <link-text url="https://www.retainful.com" rel="noopener" target="_blank">Retainful</link-text> which uses its own computing resources for tracking cart abandonments, scheduling and sending emails.

Your website really does not have to do anything except reporting the carts to the SaaS solutions (you’ll have to use a simple integration just for connecting your website with the SaaS Service). Even emails are sent using dedicated mail servers to ensure a better delivery rate.

<toc></toc>

## Differences Between These Two Types of Cart Abandonment Solutions

I have taken three key metrics that are important for an eCommerce website and its abandoned cart email campaign.

1. Performance and Page Speed
2. Email Scheduling (at timed intervals)
3. Email Delivery

These three metrics will help you understand the difference between the two types of solutions. Let's have a look!

### 1. Performance and Page Speed

Page speed and performance have a direct impact on the conversions. The higher the speed is, the better the conversions will be. After all, no one wants to wait several minutes for the page to load and then buy.

What happens if you use an installable plugin on your site?

Tracking changes in a cart is a mandatory function an abandoned cart recovery plugin should be doing. Only then, the plugin can determine whether a cart is live or abandoned or recovered.

On the surface, this might seem a simple task. But check the background processes that goes underneath your website:

- Right from adding an item to the cart, updating it & deleting it, every action from “each customer” has to be recorded by the plugin separately.

- This means that the plugin performs a database operation for each and every change - add to cart, update quantity in cart, delete an item in the cart and so on.

- Even if it is your own database on your own server, each DB operation has a cost, especially if your website gets a high volume of traffic.

- Imagine, if there are 100 visitors on your site and they add just 1 item to their cart. In addition to WooCommerce, the plugin has to perform 100+ database operations…

- And it does not stop there. It has to go through the cart data and perform a number of checks (for instance, whether to consider the cart as abandoned or live).

That’s not all. There’s one more SERIOUS issue - Background cron jobs. An abandoned cart plugin that runs on your site depends on the CRON job for scheduling and sending an email. (More on this discussed in the next point)

Even if the cron runs once in 15 minutes, your site performs 96 additional cron requests.

It will be a critical issue on highly trafficked sites. Every request can trigger a process that goes to work and takes up server resources. And this might easily reduce your site speed significantly. They may even bring your server down if you don’t have adequate resources.

The reduced page load and speed will directly create an impact on your conversions. Customers tend to leave your shop if the page loads slowly. And as discussed, an evident drop will be seen in your conversion rates

**What happens if you use a SaaS solution on your website?**

The only task your website will perform here is that it will report the carts to the SaaS API. And this is usually done using asynchronous requests from your website with very little resource utilisation compared to the entire tracking built in by the plugins.

The remaining tasks - tracking abandoned carts, scheduling emails, sending them are all handled by the SaaS platform using its own computing resources. Your website does not get any additional load.

### 2. Email Scheduling
</br>

An effective <link-text url="https://www.retainful.com/blog/how-to-use-humor-in-abandoned-cart-recovery-emails" rel="noopener" target="_blank">Abandoned cart follow-up email</link-text> campaign usually comprises at least 3 to 4 emails, sent sequentially at well timed intervals.

**For example:**

1. First email after 1 hour after abandonment

2. 2nd email after 6 hours after abandonment

3. 3rd email after 24 hours after abandonment

4. 4th Email after 2 days after abandonment


Some stores have more emails in the sequence. I have seen few stores using 6 to 8 email follow-ups as well.

And these emails are automatically sent according to the schedule.

So far so good. Now, comes the scheduling part (sending the emails at a sequence):

How an abandoned cart plugin (that runs in your website) handles it?

In order to trigger these emails, an abandoned cart plugin should use something called: CRON JOB (some will call it as Cron task or scheduled actions/tasks). Just think of it is a “Ping” to your site.

**CRON is used**

- To determine if a cart is abandoned (you may have set the plugin to consider a cart as abandoned if a customer did not purchase within 30 minutes)

- To add the emails to an email queue

- To fetch queue items (emails) and send them

By default, WordPress comes with the WP-CRON process. This gets triggered whenever someone visits your site or if you have configured a system cron from your hosting cPanel, it’ll trigger the cron. The plugin hooks to the cron event and listens, forever.

In most of the sites, WP CRON uses the default settings - that is when somebody visits your site, the CRON runs.

What if no one visited your site for a while in a day? Say, for 4 to 5 hours, it is idle. This means, none of the cron based schedules are running which also means that NO EMAILS ARE SENT.

**Chris Lema, a WP expert and VP at Liquidweb Hosting has this to say in his blog:**

“Imagine a team of thieves who are set to rob a bank. They’ve hired a driver to pick them up at an appointed time. The exact time that they’ll walk out of the bank.

They then enter the bank and have set their stopwatch. They have 180 seconds to get everything they can and walk back out – in order to beat the cops to the bank. And in 180 seconds (three minutes), their driver will drive up and pick them up.

In a situation like that, if you’re one of the bank robbers, you want to make sure that everything goes according to plan, right?

But what if I told you that the driver’s watch worked differently than other watches? What if I told you that his second hand moved only when he was on his cell phone? Or only when he moved his arm? Or only when he smoked a cigar?

Not a very reliable watch, right? And if that’s not reliable, could you count on him to come get you at the right time?

That’s what WP CRON does. If it does not show up at the right time, your plan of sending the emails fail.

You set the first email to go after 1 hour. But unfortunately, no one has visited your site after that customer has abandoned the cart - for the next 3 hours.

Now, the first email will go only 3 hours after the abandonment.

Uh oh! that’s a shame.

Not convinced yet? Check the <link-text url="https://chrislema.com/understanding-wp-cron/" rel="noopener" target="\_blank">detailed post from Chris Lema</link-text>

**How does SaaS-based abandoned cart solutions handle it?**

Well, as I mentioned earlier, SaaS providers like us, use our own queueing and scheduling systems. At Retainful, we’ve built our queuing infrastructure on top of the Amazon AWS SQS and SNS services for email scheduling and sending.

<cta url="https://app.retainful.com/register" rel="noopener" target="_blank">Try Retainful for Free!</cta>

Let’s say, you want to send your first email remainder 15 minutes after a cart is abandoned. The customer will get the email exactly after 15 minutes. Because our infrastructure can handle millions of queue jobs and scale automatically. You can check out the <link-text url="https://aws.amazon.com/sqs/" rel="noopener nofollow">power SQS.</link-text>

### 3. Email Deliverability

This is the most important part. With a better email deliverability, the conversion rates will be higher.

Unlike SaaS services, a plugin that runs abandoned cart email campaigns has to depend on your hosting server for sending the email.

More than 60% of the WordPress websites are hosted on shared servers. A shared server means that you are sharing the server, it's IP and its resources with hundreds of other websites.

One of the major disadvantages of using shared hosting is that your IP reputation degrades pretty soon.

Imagine, a website sharing your IP sending tons of unsolicited emails. Your server IP reputation will degrade and instantly gets into the spam list. And your emails will never reach the inbox of your customers.

It’s not your fault. But someone else with a bad email practice will take you down if you are sharing the same server’s IP.

One may argue that using an SMTP service like Sendgrid, Mailgun or Mandrill will solve this issue. Right! But this comes along with a cost.

However, when you get to use a SaaS service like Retainful, emails are delivered from dedicated IP pools. Our systems continuously monitor the IP pools and keep a tab on the reputation of each IP which means, the email deliverability is quite higher.

With <link-text url="https://www.retainful.com/pricing" rel="noopener" target="_blank"> Retainful’s Business Plan,</link-text> you can also choose to send the email from your own domain name.

If you are still quite not clear, here’s a simple comparison that can help you understand better

<table class="table table-bordered py-2">
   <thead class="text-center" style="background-color:#DCDCDC">
      <tr>
         <th>Features &amp; Options</th>
         <th>Plugin</th>
         <th>SaaS</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><strong>1. Performance</strong></td>
         <td>Poor. Because it uses your store resources</td>
         <td>High. Runs in Cloud Infrastructure</td>
      </tr>
      <tr>
         <td><strong>2. Page Speed</strong></td>
         <td>Poor.</td>
         <td>High</td>
      </tr>
      <tr>
         <td><strong>3. Resource Consumption</strong></td>
         <td>Your site resources</td>
         <td>Its own resources. No burden for your store</td>
      </tr>
      <tr>
         <td><strong>4. Customisation</strong></td>
         <td>Very limited</td>
         <td>Highly Customizable</td>
      </tr>
      <tr>
         <td><strong>5. Reliability</strong></td>
         <td><link-text url="https://chrislema.com/understanding-wp-cron/" rel="noopener" target="\_blank">Questionable</link-text></td>
         <td>Highly Reliable</td>
      </tr>
      <tr>
         <td><strong>6. Delivery Rate</strong></td>
         <td>Low to Medium. (Poor if you are on shared servers)</td>
         <td>Higher</td>
      </tr>
      <tr>
         <td><strong>7. Usability</strong></td>
         <td>Moderate</td>
         <td>Easy to Use</td>
      </tr>
      <tr>
         <td><strong>8. Mail Handling</strong></td>
         <td>Your server</td>
         <td>Dedicated Mail Servers</td>
      </tr>
            <tr>
         <td><strong>9. Analytics and Reporting</strong></td>
         <td>Limited</td>
         <td>Extensive</td>
      </tr>

   </tbody>
</table>



### Summary

Unlike normal websites, an eCommerce website should be highly optimized, with faster loading pages. And their primary focus should only be on converting visitors into customers - quickly.

Tracking abandoned carts, scheduling and sending follow-up emails can be run outside of the website as they are no different from background processes. The site’s resources should not be wasted for tracking, storing, scheduling and sending the emails. Instead, these resources can be used to serve the pages faster.

Using a SaaS service like Retainful to handle your abandoned cart email campaigns will increase your revenue without adding any additional load on your website. Besides, you can ensure an effective, well-timed follow-up with better email deliverability.

**Lessons Learned**

You may ask how can I substantiate this claim. Well, we built Retainful as an installable plugin!!! We started off as a next order coupon plugin and then introduced abandoned cart recovery a few months ago. Right within the plugin!

**Honestly, it was a mistake.**

Despite all the inbuilt optimizations, the feedback from store owners were different. Half the time we would be answering and explaining questions like “why the email sending was delayed or why do I need a cron job running every 15 minutes?”. And we could not keep blaming the unreliable cron service.

So we introduced email scheduling and sending in the Retainful App in the cloud.

Ready to make the switch and increase your store revenue with better Abandoned Cart Email follow-ups?

Sign up for free and connect your store to get started in minutes!

<cta url="https://app.retainful.com/register" rel="noopener" target="_blank">Try Retainful for Free!</cta>
