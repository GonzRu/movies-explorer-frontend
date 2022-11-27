import React from 'react';
import Link from '../../Shared/Link/Link';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__row">
        <span className="footer__copyright">© 2022</span>
        <Link link="https://practicum.yandex.ru/" className="footer__link footer__link_type_praktikum">
          Яндекс.Практикум
        </Link>
        <Link link="https://github.com/GonzRu/" className="footer__link footer__link_type_github">
          Github
        </Link>
      </div>
    </div>
  );
}

export default Footer;
