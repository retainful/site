const Menubar = [
    {
        TITLE: 'Product',
        LINK: '/product/features/woocommerce',
        DROPDOWN_TARGET: 'featuresDropdown',
        DROPDOWN_LINKS: [
            {
                ICON: 'https://raw.githubusercontent.com/retainful/site-images/master/menu-icons/woo-icon-logo.png',
                TITLE: 'WooCommerce',
                DESC:  'Learn how Retainful works with your WooCommerce Store',
                LINK: '/product/features/woocommerce',

            },
            {
                ICON: 'https://raw.githubusercontent.com/retainful/site-images/master/menu-icons/shopify-icon.png',
                TITLE: 'Shopify',
                DESC: 'Connect your Shopify store and start recovering lost sales with Retainful',
                LINK: '/product/features/shopify',
            },
            {
                ICON: 'https://raw.githubusercontent.com/retainful/site-images/master/menu-icons/icon.png',
                TITLE: 'How it works',
                DESC: 'Learn how Retainful works',
                LINK: '/how-it-works',
                SUB_DROPDOWN_MENU: true
            },
            {
                ICON: 'https://raw.githubusercontent.com/retainful/site-images/master/menu-icons/1-04.jpg',
                TITLE: 'Abandoned Cart Recovery',
                LINK: '/abandoned-cart-recovery',
                SUB_DROPDOWN_MENU: true
            },
            {
                ICON: 'https://raw.githubusercontent.com/retainful/site-images/master/menu-icons/2-04.jpg',
                TITLE: 'Next Order Coupon',
                LINK: '/next-order-coupon',
                SUB_DROPDOWN_MENU: true
            }
        ],
        ISMEGAMENU: true
    },
    {
        TITLE: 'Pricing',
        LINK: '/pricing',
    },
    {
        TITLE: 'Reviews',
        LINK: '/reviews',
    },
    {
        TITLE: 'Support',
        LINK: '/support',
    },
    {
        TITLE: 'Blog',
        LINK: '/blog',
    },
    {
        TITLE: 'Docs',
        LINK: '/docs',
    },
];

export default Menubar;
