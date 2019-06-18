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
              {URL: '/docs/woocommerce/retainful-abandoned-cart-recovery', TEXTNODE: 'Abandoned Cart Recovery Emails'},
              {URL: '/docs/woocommerce/collect-email-address-before-adding-to-cart-in-woocommerce', TEXTNODE: 'Email Collection during Add to Cart'},
              {URL: '/docs/woocommerce/coupon-for-email-popup', TEXTNODE: 'Coupon for Email Collection Popup'},
              {URL: '/docs/woocommerce/next-order-coupon', TEXTNODE: 'Next Order Coupon'},
        ],
        BUTTON_LINK: '/docs/woocommerce/install-retainful-plugin-for-woocommerce',
    },
];

export default SIDENAV_LINKS;
