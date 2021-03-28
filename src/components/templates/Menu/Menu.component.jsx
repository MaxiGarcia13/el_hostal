import React from 'react';
import Layout from '../Layout';
import MenuItem from '../../molecules/MenuItem';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './menu.scss';
import SEO from '../../atoms/SEO/SEO.component';

const MenuComponent = ({ pageContext: { title, image, data, allowHeroTitle } }) => {
    const buildedImage = getImage(image.fuild.gatsbyImageData);

    return (
        <Layout className='menu' title={title}>
            <GatsbyImage image={buildedImage} alt={image.alt} style={{ minHeight: '300px', objectFit: 'cover' }} />
            <SEO
                title={`El Hostal - ${title}`}
                description='El Hostal ofrece cocina de mercado en una maravillosa casona del S.XIX, con la mayor calidad y un cuidado servicio, lo que lo convierte en un lugar especial.'
                img={`/assets/images/${image.name}`}
            />
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
