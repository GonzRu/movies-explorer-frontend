import React from 'react';
import './PortfolioLinks.css';
import PortfolioLink from '../PortfolioLink/PortfolioLink';

const portfolio = [
  { name: 'Статичный сайт', link: '' },
  { name: 'Адаптивный сайт', link: '' },
  { name: 'Одностраничное приложение', link: '' },
];

function PortfolioLinks() {
  return (
    <div className="portfolioLinks">
      {portfolio.map((item) => (
        <PortfolioLink
          key={item.name}
          name={item.name}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default PortfolioLinks;
