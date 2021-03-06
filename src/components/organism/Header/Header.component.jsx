import React from 'react';
import Brand from '../../atoms/Brand';
import './header.scss';

const HeaderComponent = ({ title }) => {
    return (
        <header className='header'>
            <Brand />
            <h1 className='header__title'>{title}</h1>
        </header>
    );
};

export default HeaderComponent;
