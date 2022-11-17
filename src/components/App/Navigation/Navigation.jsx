import React from 'react';
import './Navigation.css'
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='Navigation'>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/movies'>Фильмы</NavLink>
            <NavLink to='/saved-movies'>Сохраненные фильмы</NavLink>
            <NavLink to='/profile'>Профиль</NavLink>
            <NavLink to='/signup'>Регистрация</NavLink>
            <NavLink to='/signin'>Войти</NavLink>
        </div>
    );
};

export default Navigation;
