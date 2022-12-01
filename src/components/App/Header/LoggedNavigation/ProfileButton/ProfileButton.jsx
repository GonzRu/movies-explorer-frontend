import React from 'react';
import classNames from 'classnames';
import AppLink from '../../../../Shared/AppLink/AppLink';
import { PROFILE_ROUTE } from '../../../../../consts/routes';
import './ProfileButton.css';

function ProfileButton({ className }) {
  return (
    <AppLink
      to={PROFILE_ROUTE}
      className={classNames('profileButton', className)}
    >
      <span className="profileButton__text">Аккаунт</span>
      <div className="profileButton__icon" />
    </AppLink>
  );
}

export default ProfileButton;
