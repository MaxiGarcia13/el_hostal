import React from 'react';
import Head from 'react-helmet';

const SEOcomponent = ({ title, description, img }) => {
    return (
        <Head>
            <title>{title}</title>

            <meta name='description' content={description} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={img} />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
        </Head>
    );
};

export default SEOcomponent;
