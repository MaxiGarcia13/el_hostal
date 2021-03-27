import React, { Fragment } from 'react';
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
                    <Fragment key={`${menu.title}-${index}`}>
                        {menu.title !== null && <h2> {menu.title}</h2>}
                        <table className='menu__table'>
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
                    </Fragment>
                );
            })}
        </Layout>
    );
};

export default MenuComponent;
