import React from 'react';
import image from '../../../images/landing-logo.svg';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img
        className="promo__image"
        src={image}
        alt="Изображение промо"
      />
    </section>
  );
}

export default Promo;
