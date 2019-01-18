module.exports = {
    siteMetadata: {
        title: `Retainful`,
        description: `The easiest way to drive repeat purchases and retain customers. Generate and send unique coupon codes that can be used by the customer for the next purchase.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/pages`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: ["gatsby-remark-component"]
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Montserrat\:300,400,500,600,700`,
                    `Quattrocento+Sans\:400,400i,700,700i`,
                ]
            }
        },
        // {
        //     resolve: `gatsby-plugin-typography`,
        //     options: {
        //         pathToConfigModule: `${__dirname}/src/utils/typography.js`,
        //     },
        // },
        `gatsby-remark-copy-linked-files`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 1080,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
}
