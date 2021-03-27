module.exports = {
    siteMetadata: {
        title: 'el_hostal',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900'],
                },
            },
        },
    ],
};
