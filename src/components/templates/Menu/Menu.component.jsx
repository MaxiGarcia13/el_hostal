import React from 'react';
import Layout from '../Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './menu.scss';

const MenuComponent = ({ pageContext: { title, image, data } }) => {
    const buildedImage = getImage(image.fuild.gatsbyImageData);

    return (
        <Layout className='menu' title={title}>
            <GatsbyImage image={buildedImage} alt={image.alt} style={{ minHeight: '300px', objectFit: 'cover' }} />

            {data.map((menu, index) => {
                return (
                    <section key={`${menu.title}-${index}`} className='menu__section'>
                        {menu.title !== null && <h2>{menu.title}</h2>}
                        {menu.description !== null && <p className='description'>{menu.description}</p>}
                        <table className='menu__section__table'>
                            <tbody>
                                {menu.data.map((item) => (
                                    <tr key={item.title} className='row'>
                                        <td className='text'>
                                            <div> {item.title}</div>
                                            {item.description && <div className='description'>{item.description}</div>}
                                        </td>
                                        <td className='price'>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                );
            })}
        </Layout>
    );
};

export default MenuComponent;
