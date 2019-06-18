const Menubar = [
    {
        TITLE: 'Home',
        LINK: '/',
    },
    {
        TITLE: 'Features',
        LINK: '/features/woocommerce',
        DROPDOWN_TARGET: 'featuresDropdown',
        DROPDOWN_LINKS: [
            {
                TITLE: 'WooCommerce',
                LINK: '/features/woocommerce',
            },
            {
                TITLE: 'Shopify',
                LINK: '/features/shopify',
            }
        ],
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
