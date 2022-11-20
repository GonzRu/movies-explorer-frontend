import React, {memo} from 'react';
import logo from '../../../images/logo.svg'
import {NavLink} from 'react-router-dom';
import {MAIN_ROUTE} from '../../../consts/routes';

const Logo = ({className}) => {
    return (
        <NavLink to={MAIN_ROUTE} className={className}>
            <img src={logo} alt='Логотип'/>
        </NavLink>
    );
};

export default memo(Logo);
