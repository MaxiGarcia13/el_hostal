import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const BrandComponent = ({ className }) => {
    return (
        <div className={className}>
            <StaticImage src='../../../images/logo.jpg' alt='El hostal cocina sincera' height={60} />
        </div>
    );
};

export default BrandComponent;
