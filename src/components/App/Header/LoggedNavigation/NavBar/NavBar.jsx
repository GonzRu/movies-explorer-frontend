import React from 'react';
import AppLink from '../../../../Shared/AppLink/AppLink';
import {MOVIES_ROUTE, SAVED_MOVIES_ROUTE} from '../../../../../consts/routes';
import './NavBar.css';
import ProfileButton from '../ProfileButton/ProfileButton';

const NavBar = () => {
    return (
        <div className='navBar'>
            <AppLink to={MOVIES_ROUTE} className='navBar__movies'>
                Фильмы
            </AppLink>
            <AppLink to={SAVED_MOVIES_ROUTE} className='navBar__savedMovies'>
                Сохранённые фильмы
            </AppLink>
            <ProfileButton/>
        </div>
    );
};

export default NavBar;
