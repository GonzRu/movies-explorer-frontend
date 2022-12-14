import React from 'react';
import './SideBarContent.css';
import classNames from 'classnames';
import AppLink from '../../../../Shared/AppLink/AppLink';
import { MAIN_ROUTE, MOVIES_ROUTE, SAVED_MOVIES_ROUTE } from '../../../../../consts/routes';
import ProfileButton from '../ProfileButton/ProfileButton';

function SideBarContent({ visible, onClose }) {
  return (
    <div className={classNames(
      'sideBarContent',
      visible && 'sideBarContent_visible',
    )}
    >
      <button
        type="button"
        className="sideBarContent__closeBtn"
        onClick={onClose}
      />
      <div className="sideBarContent__links">
        <AppLink to={MAIN_ROUTE}>
          Главная
        </AppLink>
        <AppLink to={MOVIES_ROUTE} className="sideBarContent__moviesLink">
          Фильмы
        </AppLink>
        <AppLink to={SAVED_MOVIES_ROUTE}>
          Сохранённые фильмы
        </AppLink>
      </div>
      <ProfileButton className="sideBarContent__profile" />
    </div>
  );
}

export default SideBarContent;
