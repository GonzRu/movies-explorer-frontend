import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css';
import InputWithLabel from './InputWithLabel/InputWithLabel';
import Button from '../Shared/Button/Button';

function Profile() {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setName(currentUser?.name ?? '');
    setEmail(currentUser?.email ?? '');
  }, [currentUser]);

  if (!currentUser) return null;

  const onEditClick = () => setEditMode(true);
  const onSaveClick = () => setEditMode(false);

  return (
    <main className="profile">
      <h1 className="profile__title">
        Привет,
        {currentUser.name}
        !
      </h1>
      <InputWithLabel
        label="Имя"
        value={name}
        onValueChanged={(value) => setName(value)}
        readOnly={!editMode}
      />
      <div className="profile__delimiter" />
      <InputWithLabel
        label="E-mail"
        value={email}
        onValueChanged={(value) => setEmail(value)}
        readOnly={!editMode}
      />
      {
            editMode
              ? (
                <Button
                  onClick={onSaveClick}
                  className="profile__saveBtn"
                >
                  Сохранить
                </Button>
              )
              : (
                <>
                  <button
                    type="button"
                    className="profile__editBtn"
                    onClick={onEditClick}
                  >
                    Редактировать
                  </button>
                  <button
                    type="button"
                    className="profile__logoutBtn"
                  >
                    Выйти из аккаунта
                  </button>
                </>
              )
        }
    </main>
  );
}

export default Profile;
