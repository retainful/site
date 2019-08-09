import React from 'react'
import {Link} from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo';
import HomeScreenshots from '../../../constants/featuresScreenshots';

const FeaturesPage = () => (
    <Layout>
        <SEO title="WooCommerce Abandoned Cart Recovery Email Plugin Features"
             description="Let your customers recover abandoned carts in a single click in your WooCommerce store. Automatically send a series of email follow-ups to recover lost sales. Also send unique, single-use coupons for next purchases automatically."
             keywords={[`woocommerce abandoned cart plugin`, `woocommerce abandoned cart recovery emails`, `woocommerce email follow-ups`, `woocommerce next order coupon`, `recover woocommerce abandoned carts`, `retainful woocommerce features`]}/>
        <div className="features-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3>Grow your WooCommerce Revenue!</h3>
                        <p>Retainful increases WooCommerce sales by driving repeated purchases and also encourages
                            customers to instantly buy the abandoned cart items.</p>
                        <p>
                            <a className="btn-action btn-edge btn-lg"
                               href={`${process.env.GATSBY_WOOCOMMERCE_PLUGIN_URL}`}
                               target="_blank" rel="noopener noreferrer">Download Free Plugin</a>
                            <a className="btn-action m-l-10 btn-outlined btn-lg"
                               href="http://demo.retainful.com/"
                               target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <p><img
                                src="https://images.ctfassets.net/xny2w179f4ki/7e3xXYmoIeUsYYUtS8CTAK/5c7ac59efd4009868a2dac07f71c96f2/InboxHeroUpdate_2x__1_.png"
                                alt="woocommerce" className="img-responsive"/></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-container container">
            <div className="row align-items-center">
                <div className="col-sm-7">
                    <h3>Capture Abandoned Carts</h3>
                    <p>Track all the abandoned carts in your WooCommerce online store. You can track even visitors who abandon carts not only after they’ve entered their email address, but also those leave even before reaching the checkout.</p>
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Capture all abandoned carts including guest carts</li>
                        <li>Automatically capture the email as soon as the customer enters it at checkout</li>
                        <li>See what items were left by the customers in their carts</li>
                    </ul>
                </div>
                <div className="col-sm-5">
                    <img src="https://images.ctfassets.net/xny2w179f4ki/390zqBIJLzsS8KK7S7UviH/2e3c6478627cb5ee0dd3f855ca191d16/all-customer-communication_2x.png" alt="" className="img-responsive p-l-30"/>
                </div>
            </div>
        </div>
        <div className="features-container container">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img src="https://images.ctfassets.net/xny2w179f4ki/390zqBIJLzsS8KK7S7UviH/2e3c6478627cb5ee0dd3f855ca191d16/all-customer-communication_2x.png" alt="" className="img-responsive p-r-30"/>
                </div>
                <div className="col-sm-7">
                    <h3>Recover Abandoned Carts with Single Click</h3>
                <p>Automatically send a series of email reminders when customers abandon their carts. No manual emailing required. Just create an email sequence and set it live. Let Retainful email the reminders automatically and let your customer recover their carts in a single click.</p>
                <p>When the cart is recovered, the plugin will automatically stop sending the emails.</p>
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Single-click cart recovery link included in the emails</li>
                        <li>Send as many emails as you want to recover carts, exactly when you want, as quickly as 30 min after they leave.</li>
                        <li>Not annoying to users--Emails are automatically stopped when a purchase is made.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="features-container container">
            <div className="row align-items-center">
                <div className="col-sm-7">
                    <h3>Drip / Sequential Recovery Emails</h3>
                    <p>Create a high-performing drip campaign and send emails at well-timed intervals in autopilot. You can easily create an email sequence in a few minutes with Retainful.</p>
                    <h4>Recommended Email Sequence:</h4>
                    <ul>
                        <li>Send the first cart recovery email 1 hour after abandonment</li>
                        <li>2nd reminder can go 6 hours after cart abandonment</li>
                        <li>3rd reminder can be sent 1 day after the customer abandons the cart</li>
                        <li>4th reminder can go 3 days after the cart is abandoned</li>
                        <li>5th reminder can be sent 5 days after the cart abanonment</li>
                    </ul>
                </div>
                <div className="col-sm-5">
                    <img src="https://images.ctfassets.net/xny2w179f4ki/390zqBIJLzsS8KK7S7UviH/2e3c6478627cb5ee0dd3f855ca191d16/all-customer-communication_2x.png" alt="" className="img-responsive p-l-30"/>
                </div>
            </div>
        </div>
        <div className="features-container container">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img src="https://images.ctfassets.net/xny2w179f4ki/390zqBIJLzsS8KK7S7UviH/2e3c6478627cb5ee0dd3f855ca191d16/all-customer-communication_2x.png" alt="" className="img-responsive p-r-30"/>
                </div>
                <div className="col-sm-7">
                    <h3>Responsive, high-converting Email Templates</h3>
                    <p>Save your precious time by using our pre-built email templates, optimized for conversions. The email templates are mobile friendly, responsive and fully customizable. The emails work in almost all the email clients including Outlook.</p>
                    <h4>Key Features:</h4>
                    <ul>
                        <li>3 pre-built email templates</li>
                        <li>Responsive, mobile friendly emails</li>
                        <li>Highly customizable</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="features-container container">
            <div className="row align-items-center">
                <div className="col-sm-7">
                    <h3>Personalisation with Short Codes</h3>
                    <p>Personalized emails get a higher open rates and click throughs when compared to generic emails. Retainful provides you short codes to personalize your abandoned cart email templates.</p>
                    <h4>Short codes for</h4>
                    <ul>
                        <li>Customer’s first and last name, email</li>
                        <li>Cart contents / items</li>
                        <li>Cart recovery link</li>
                        <li>Coupons</li>
                    </ul>
                </div>
                <div className="col-sm-5">
                    <img src="https://images.ctfassets.net/xny2w179f4ki/390zqBIJLzsS8KK7S7UviH/2e3c6478627cb5ee0dd3f855ca191d16/all-customer-communication_2x.png" alt="" className="img-responsive p-l-30"/>
                </div>
            </div>
        </div>

        <div className="features-container container text-center">
            <h3>Retainful Premium</h3>
        </div>

        <div className="features-container container">
            <div className="row align-items-center">
                <div className="col-sm-7">
                    <h3>Email Collection Popup</h3>
                    <p>Most customers abandon their carts even before reaching the checkout step. So capture the customer’s email at the time of adding an item to cart itself.  When customers click the add to cart button, an email collection popup will be triggered. You can now reach out to them and recover the carts even if they abandon it.</p>
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Triggers when customer clicks add to cart button</li>
                        <li>Fully Customizable. Change the popup content easily</li>
                        <li>Compatible almost all themes</li>
                    </ul>
                </div>
                <div className="col-sm-5">
                    <img src="https://images.ctfassets.net/xny2w179f4ki/390zqBIJLzsS8KK7S7UviH/2e3c6478627cb5ee0dd3f855ca191d16/all-customer-communication_2x.png" alt="" className="img-responsive p-l-30"/>
                </div>
            </div>
        </div>
        <div className="features-container container">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img src="https://images.ctfassets.net/xny2w179f4ki/390zqBIJLzsS8KK7S7UviH/2e3c6478627cb5ee0dd3f855ca191d16/all-customer-communication_2x.png" alt="" className="img-responsive p-r-30"/>
                </div>
                <div className="col-sm-7">
                    <h3>Coupons for Email Collection</h3>
                    <p>Customers usually hesitate to provide their emails. So instead of plainly asking for an email at the time of adding to cart, give them a motivation. If a popup says “Get a 5% discount code in your email”, 99% of the customers will leave the email. Coupon is a magic wand.</p>
                    <p>Retainful can automatically email a coupon code when customer enter their email</p>
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Automatically email a coupon when customer gives their email</li>
                        <li>Customizable email template</li>
                        <li>Uses the built-in WooCommerce Coupons</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="features-container container">
            <div className="row align-items-center">
                <div className="col-sm-7">
                    <h3>Countdown Timer - Add an urgency</h3>
                    <p>Motivate the customer to complete their purchase quickly by adding an urgency. Turn on the Sales Countdown Timer feature in Retainful.</p>
                    <p>It can automatically apply a coupon code and show sales countdown timer at the cart page, with an offer expiry time.</p>
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Sales Countdown Timer with customizable message</li>
                        <li>Position the timer at the top or just below the coupon or above the cart.</li>
                        <li>Auto apply a coupon code with the timer and set an expiry for the coupon.</li>
                    </ul>
                </div>
                <div className="col-sm-5">
                    <img src="https://images.ctfassets.net/xny2w179f4ki/390zqBIJLzsS8KK7S7UviH/2e3c6478627cb5ee0dd3f855ca191d16/all-customer-communication_2x.png" alt="" className="img-responsive p-l-30"/>
                </div>
            </div>
        </div>

        <div className="features-container container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Automate Cart Recovery emails
                        </h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Trigger timely cart recovery emails</h4>
                        <p>No more manual emailing. Schedule and automate cart recovery email reminders in a well-timed
                            sequence. Stop sending email reminder automatically when the cart is recovered.</p>
                    </div>
                    <div className="features-list">
                        <h4>Unlimited Email templates</h4>
                        <p>Send unlimited number of personalized recovery emails. Share a single-click product recovery
                            link so that your customers can easily recover the abandoned cart items.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Live Cart Notifications</h4>
                        <p>View your WooCommerce cart live and see list of customers using the cart. Receive a
                            notification when customer recovers cart.</p>
                    </div>
                    <div className="features-list">
                        <h4>Compare Cart Values</h4>
                        <p>Compare abandoned cart value and recovered cart value to know how much you earned using the
                            recovery email campaign.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Next order Coupon Generator</h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Unique Coupon Codes</h4>
                        <p>Generate unique Next order discount codes for every customer and sent it via order emails
                            after their successful purchase.</p>
                    </div>
                    <div className="features-list">
                        <h4>Advanced WooCommerce coupons</h4>
                        <p>Create advanced coupon codes using the coupon settings. Offer both percentage and flat price
                            coupons. Add user restriction and coupon restrictions per user.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Trigger FOMO</h4>
                        <p>Set validity for the coupon codes. Time-limited coupons drive customers to instantly shop at
                            your WooCommerce store.</p>
                    </div>
                    <div className="features-list">
                        <h4>Auto apply coupon</h4>
                        <p>Customers don’t want to copy and paste coupon codes. Clicking on the coupon code
                            automatically applies the coupon to the customer cart.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <div className="features-list">
                        <h3>Actionable Analytics & Insights
                        </h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Extensive Dashboard</h4>
                        <p>Get useful analytics on your sales conversions, WooCommerce revenue, customer insights, cart
                            recovery email performance.</p>
                    </div>
                    <div className="features-list">
                        <h4>Track Sale Conversions</h4>
                        <p>Track real-time WooCommerce sale conversions and compare the values of the recovered cart and
                            abandoned carts.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="features-list">
                        <h4>Actionable Customer Insights</h4>
                        <p>Get the list of successful conversions using the next order coupon codes. Track customers who
                            have opened and who haven’t opened the coupon/ cart recovery emails.</p>
                    </div>
                    <div className="features-list">
                        <h4>Clean Revenue report</h4>
                        <p>Get real-time data on how much revenue you made using Next order coupons and Abandoned cart
                            recovery email campaigns.</p>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="how-it-works">*/}
        {/*<div className="container">*/}
        {/*<div className="flex-intro align-center">*/}
        {/*<h2>How it Works ?</h2>*/}
        {/*</div>*/}
        {/*<div className="card">*/}
        {/*<div className="card-body">*/}
        {/*<h4><span>1</span> Install & Connect your store</h4>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="card">*/}
        {/*<div className="card-body">*/}
        {/*<h4><span>2</span> Automate Cart recovery email campaigns</h4>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="card">*/}
        {/*<div className="card-body">*/}
        {/*<h4><span>3</span> Generate Next order Coupon codes</h4>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="card">*/}
        {/*<div className="card-body">*/}
        {/*<h4><span>4</span> Profit!</h4>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="row">*/}
        {/*<div className="col-md-6">*/}
        {/*<div className="card">*/}
        {/*<div className="card-body">*/}
        {/*<h4><span>1</span> Install & Connect your store</h4>*/}
        {/*<p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-md-6">*/}
        {/*<div className="card">*/}
        {/*<div className="card-body">*/}
        {/*<h4><span>2</span> Automate Cart recovery email campaigns</h4>*/}
        {/*<p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-md-6">*/}
        {/*<div className="card">*/}
        {/*<div className="card-body">*/}
        {/*<h4><span>3</span> Generate Next order Coupon codes</h4>*/}
        {/*<p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-md-6">*/}
        {/*<div className="card">*/}
        {/*<div className="card-body">*/}
        {/*<h4><span>4</span> Profit!</h4>*/}
        {/*<p>Include a unique coupon code towards the next purchase in the order notification email itself.</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}


        {/*<HomeScreenshots/>*/}
        <div className="features-download-section text-center">
            <div className="container features-download-intro wow fadeInDown">
                <h3>Retain & Grow your WooCommerce<br/> Business Smart</h3>
                <p>
                    <a className="btn-action btn-lg" href={`${process.env.GATSBY_WOOCOMMERCE_PLUGIN_URL}`}
                       target="_blank" rel="noopener noreferrer">Download Retainful</a>
                </p>
            </div>
        </div>
    </Layout>
)

export default FeaturesPage
