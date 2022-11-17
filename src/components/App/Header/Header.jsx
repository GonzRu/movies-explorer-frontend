import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import './Header.css'

const Header = ({isAccent}) => {

    const headerClassName = isAccent
    ? 'header header_color_accent' : 'header';
    return (
        <header className={headerClassName}>
            <Logo/>
            <Navigation/>
        </header>
    );
};

export default Header;
