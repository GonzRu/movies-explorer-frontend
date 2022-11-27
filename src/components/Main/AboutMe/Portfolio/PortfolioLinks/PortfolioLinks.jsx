import React from 'react';
import PortfolioLink from '../PortfolioLink/PortfolioLink';
import './PortfolioLinks.css';

const portfolio = [
  { name: 'Статичный сайт', link: 'https://gonzru.github.io/how-to-learn/' },
  { name: 'Адаптивный сайт', link: 'https://gonzru.github.io/russian-travel/' },
  { name: 'Одностраничное приложение', link: 'https://github.com/GonzRu/react-mesto-api-full' },
];

function PortfolioLinks() {
  return (
    <ul className="portfolioLinks">
      {portfolio.map((item) => (
        <PortfolioLink
          key={item.name}
          name={item.name}
          link={item.link}
        />
      ))}
    </ul>
  );
}

export default PortfolioLinks;
