import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';
import AppLink from '../Shared/AppLink/AppLink';

function NotFound() {
  const history = useHistory();

  const onBack = () => {
    history.goBack();
  };

  return (
    <div className="notFound">
      <div className="notFound__container">
        <h1 className="notFound__title">404</h1>
        <p className="notFound__text">Страница не найдена</p>
      </div>
      <AppLink
        className="notFound__backBtn"
        onClick={onBack}
      >
        Назад
      </AppLink>
    </div>
  );
}

export default NotFound;
