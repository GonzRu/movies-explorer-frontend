import React from 'react';
import PortfolioLinks from './PortfolioLinks/PortfolioLinks';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <PortfolioLinks/>
        </div>
    );
};

export default Portfolio;
