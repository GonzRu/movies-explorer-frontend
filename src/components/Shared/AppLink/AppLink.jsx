import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './AppLink.css';
import classNames from 'classnames';

function AppLink(props) {
  const {
    to,
    children,
    className,
    onClick,
  } = props;

  const clickHandler = onClick
    ? (e) => {
      e.preventDefault();
      onClick();
    }
    : null;

  return (
    <NavLink
      className={classNames(
        'appLink',
        className,
      )}
      onClick={clickHandler}
      to={onClick ? '/' : to}
    >
      {children}
    </NavLink>
  );
}

export default memo(AppLink);
