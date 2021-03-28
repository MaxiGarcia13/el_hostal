import React from 'react';
import './menuItem.scss';

const MenuItemComponent = ({ title, heroTitle, description, data }) => (
    <section className='menu__section'>
        {heroTitle && <h3 className='menu__section__heroTitle'>{heroTitle}</h3>}
        {title !== null && <h2>{title}</h2>}
        {description !== null && <p className='description'>{description}</p>}
        <table className='menu__section__table'>
            <tbody>
                {data.map((item) => (
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

export default MenuItemComponent;
