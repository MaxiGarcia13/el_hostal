import React from 'react';
import Layout from '../Layout';
import MenuItem from '../../molecules/MenuItem';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './menu.scss';

const MenuComponent = ({ pageContext: { title, image, data, allowHeroTitle } }) => {
    const buildedImage = getImage(image.fuild.gatsbyImageData);

    return (
        <Layout className='menu' title={title}>
            <GatsbyImage image={buildedImage} alt={image.alt} style={{ minHeight: '300px', objectFit: 'cover' }} />

            {data.map((menu, index) => {
                return (
                    <MenuItem
                        key={`${menu.title}-${index}`}
                        heroTitle={allowHeroTitle && menu.heroTitle}
                        title={menu.title}
                        description={menu.description}
                        data={menu.data}
                    />
                );
            })}
        </Layout>
    );
};

export default MenuComponent;
