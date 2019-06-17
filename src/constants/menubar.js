const Menubar = [
    {
        TITLE: 'Home',
        LINK: '/',
        CLASS: 'nav-link',
        TARGET:''
    },
    {
        TITLE: 'Features',
        LINK: '/features/woocommerce',
        CLASS: 'nav-link',
        TARGET:'',
        DROPDOWN_TARGET: 'navbarDropdown',
        DROPDOWN_LINKS: {
            'item': 'link'
        }
    },
    {
        TITLE: 'Support',
        LINK: '/support',
        CLASS: 'nav-link',
        TARGET:''
    },
    {
        TITLE: 'Blog',
        LINK: '/blog',
        CLASS: 'nav-link',
        TARGET:''
    },
    {
        TITLE: 'Docs',
        LINK: '/docs',
        CLASS: 'nav-link',
        TARGET:''
    },
];

export default Menubar;
