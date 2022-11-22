import React from 'react';
import menu from '../../../../../images/menu.svg';
import './MenuIcon.css';

const MenuIcon = ({onClick}) => {
    return (
        <img
            onClick={onClick}
            className='menuIcon'
            src={menu}
            alt='Меню'
        />
    );
};

export default MenuIcon;
