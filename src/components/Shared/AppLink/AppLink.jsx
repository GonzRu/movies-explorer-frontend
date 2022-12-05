import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './AppLink.css';
import classNames from 'classnames';

function AppLink(props) {
  const {
    to,
    children,
    className,
    activeClassName,
    onClick,
    ...otherProps
  } = props;

  const clickHandler = onClick
    ? (e) => {
      e.preventDefault();
      onClick();
    }
    : null;

  return (
    <NavLink
      className={(active) => classNames(
        'appLink',
        className,
        active && activeClassName,
      )}
      onClick={clickHandler}
      to={onClick ? '/' : to}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
}

export default memo(AppLink);
