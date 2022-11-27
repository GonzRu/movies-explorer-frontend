import React from 'react';
import './PortfolioLink.css';

function PortfolioLink({ name, link }) {
  return (
    <li className="portfolioLink">
      <a
        className="portfolioLink__name"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <a
        className="portfolioLink__link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        ↗
      </a>
    </li>
  );
}

export default PortfolioLink;
