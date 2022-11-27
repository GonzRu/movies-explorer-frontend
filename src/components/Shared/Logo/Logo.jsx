import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import { MAIN_ROUTE } from '../../../consts/routes';

function Logo({ className }) {
  return (
    <NavLink to={MAIN_ROUTE} className={className}>
      <img src={logo} alt="Логотип" />
    </NavLink>
  );
}

export default memo(Logo);
