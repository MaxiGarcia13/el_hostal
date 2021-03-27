import React from 'react';
import Header from '../../organism/Header';
import './layout.scss';

const LayoutComponent = ({ children, className, title }) => {
    return (
        <div className={`layout ${className}`}>
            <Header title={title} />
            <main styles='layout'>{children}</main>
        </div>
    );
};

export default LayoutComponent;
