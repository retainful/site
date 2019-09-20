const Menubar = [
    {
        TITLE: 'Product',
        LINK: '/product/features/woocommerce',
        DROPDOWN_TARGET: 'featuresDropdown',
        DROPDOWN_LINKS: [
            {
                ICON: 'https://raw.githubusercontent.com/retainful/site-images/master/menu-icons/woo-icon.png',
                TITLE: 'WooCommerce',
                DESC:  'Download the Retainful Plugin for WooCommerce',
                LINK: '/product/features/woocommerce',

            },
            {
                ICON: 'https://raw.githubusercontent.com/retainful/site-images/master/menu-icons/shopify-icon.png',
                TITLE: 'Shopify',
                DESC: 'Install the Shopify App and get started in minutes',
                LINK: '/product/features/shopify',
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
