import React from 'react';

const SIDENAV_LINKS = [
    {
        TITLE: 'Home',
        BUTTON_LINK: '/docs',
    },
    {
        TITLE: 'WooCommerce',
        LINKS: [
              {URL: '/docs/woocommerce/install-retainful-plugin-for-woocommerce', TEXTNODE: 'Installation'},
              {URL: '/docs/woocommerce//retainful-upgrading-to-premium', TEXTNODE: 'Upgrade to Premium'},
              {URL: '/docs/woocommerce/retainful-abandoned-cart-recovery', TEXTNODE: 'Abandoned Cart Recovery Emails'},
              {URL: '/docs/woocommerce/collect-email-address-before-adding-to-cart-in-woocommerce', TEXTNODE: 'Email Collection Popup'},
              {URL: '/docs/woocommerce/coupon-for-email-popup', TEXTNODE: 'Coupon for Email Collection Popup'},
              {URL: '/docs/woocommerce/coupon-timer', TEXTNODE: 'Countdown Timer with Coupon Auto Apply'},
              {URL: '/docs/woocommerce/next-order-coupon', TEXTNODE: 'Next Order Coupon'},
              {URL: '/docs/woocommerce/testing-next-order-coupons', TEXTNODE: 'Test Next order coupons'},
              {URL: '/docs/woocommerce/getting-premium-abandoned-cart-mail-templates', TEXTNODE: 'Getting premium Abandoned Cart email templates'},

        ],
        BUTTON_LINK: '/docs/woocommerce/install-retainful-plugin-for-woocommerce',
    },
    {
        TITLE: 'Shopify',
        LINKS: [
              {URL: '/docs/shopify/introduction', TEXTNODE: 'Introduction'},
              {URL: '/docs/shopify/installation', TEXTNODE: 'Installation'},
              {URL: '/docs/shopify/overview', TEXTNODE: 'Introduction to Retainful dashboard'},
              {URL: '/docs/shopify/setting-up-an-abandoned-cart-email-sequence', TEXTNODE: 'Setting up an abandoned cart email sequence'},
              {URL: '/docs/shopify/customising-abandoned-cart-emails', TEXTNODE: 'Customising the abandoned cart recovery emails'},
              {URL: '/docs/shopify/live-carts', TEXTNODE: 'Live carts'},
        ],
        BUTTON_LINK: '/docs/shopify/introduction',
    },
];

export default SIDENAV_LINKS;
