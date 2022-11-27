import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css';
import InputWithLabel from './InputWithLabel/InputWithLabel';

function Profile() {
  const [currentUser] = useContext(CurrentUserContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    setName(currentUser?.name);
    setEmail(currentUser?.email);
  }, [currentUser]);

  if (!currentUser) return null;

  return (
    <div className="profile">
      <h1 className="profile__title">
        Привет,
        {currentUser.name}
        !
      </h1>
      <InputWithLabel
        label="Имя"
        value={name}
        onValueChanged={(value) => setName(value)}
      />
      <div className="profile__delimiter" />
      <InputWithLabel
        label="E-mail"
        value={email}
        onValueChanged={(value) => setEmail(value)}
      />
      <button
        type="button"
        className="profile__editBtn"
      >
        Редактировать
      </button>
      <button
        type="button"
        className="profile__logoutBtn"
      >
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
