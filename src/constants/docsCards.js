import React from 'react';
import {MdSend, MdSettings, MdShowChart, MdSupervisorAccount} from 'react-icons/md';

const HOME_CARDS = [
    {
        ICON: <MdSend/>,
        TITLE: 'Sending Follow Up Emails',
        LINKS: [
            { URL: '/docs/woocommerce/sending-mail/', TEXTNODE: 'Sending follow up emails to your customers' },
        ],
        BUTTON_LINK: '/docs/woocommerce/sending-mail/',
    },
    // {
    //     ICON: <MdSupervisorAccount/>,
    //     TITLE: 'Managing Contacts with Marketing Campaigns',
    //     LINKS: [
    //         { URL: '/ui/managing-contacts/adding-contacts/', TEXTNODE: 'Adding Contacts' },
    //         { URL: '/ui/managing-contacts/building-your-contact-list/', TEXTNODE: 'Contacts Best Practices' },
    //         { URL: '/ui/managing-contacts/segmenting-your-contacts/', TEXTNODE: 'Segmenting Contacts' },
    //     ],
    //     BUTTON_LINK: '/ui/managing-contacts/',
    // },
];

export default HOME_CARDS;