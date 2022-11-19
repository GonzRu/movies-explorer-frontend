import React from 'react';
import './PortfolioLink.css';

const PortfolioLink = ({name, link}) => {
    return (
        <div className='portfolioLink'>
            <a className='portfolioLink__name' href={link}>{name}</a>
            <a className='portfolioLink__link' href={link}>↗</a>
        </div>
    );
};

export default PortfolioLink;
