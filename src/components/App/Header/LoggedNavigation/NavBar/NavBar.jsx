import React from 'react';
import AppLink from '../../../../Shared/AppLink/AppLink';
import { MOVIES_ROUTE, SAVED_MOVIES_ROUTE } from '../../../../../consts/routes';
import './NavBar.css';
import ProfileButton from '../ProfileButton/ProfileButton';

function NavBar() {
  return (
    <div className="navBar">
      <AppLink
        to={MOVIES_ROUTE}
        className="navBar__link navBar__movies"
        activeClassName="navBar__link_active"
      >
        Фильмы
      </AppLink>
      <AppLink
        to={SAVED_MOVIES_ROUTE}
        className="navBar__link navBar__savedMovies"
        activeClassName="navBar__link_active"
      >
        Сохранённые фильмы
      </AppLink>
      <ProfileButton />
    </div>
  );
}

export default NavBar;
