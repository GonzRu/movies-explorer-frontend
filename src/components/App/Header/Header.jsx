import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from '../../Shared/Logo/Logo';
import './Header.css'
import classNames from 'classnames';

const Header = ({isAccent}) => {

    return (
        <header className={classNames(
            'header',
            isAccent && 'header_color_accent'
        )}>
            <Logo/>
            <Navigation/>
        </header>
    );
};

export default Header;
