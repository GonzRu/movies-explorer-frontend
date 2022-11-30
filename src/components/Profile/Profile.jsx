import React, { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css';
import useForm from '../../hooks/useForm';
import FormInputs from './FormInputs/FormInputs';
import FormButtons from './FormButtons/FormButtons';
import FormError from './FormError/FormError';

function Profile() {
  const { currentUser, logout, updateUser } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const {
    values,
    errors,
    isValid,
    onChange,
  } = useForm({ name: currentUser.name, email: currentUser.email });

  if (!currentUser) return null;

  const onEditClick = () => setEditMode(true);
  const onSaveClick = () => {
    setIsLoading(true);
    updateUser(values)
      .then(() => {
        setEditMode(false);
        setError('');
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const onLogoutClick = () => {
    setIsLoading(true);
    logout();
    setIsLoading(false);
  };

  return (
    <main className="profile">
      <h1 className="profile__title">
        {`Привет, ${currentUser.name}!`}
      </h1>
      <form className="profile__form">
        <FormInputs
          values={values}
          errors={errors}
          onChange={onChange}
          editMode={editMode}
        />
        <FormError error={error} />
        <FormButtons
          editMode={editMode}
          isValid={isValid}
          isLoading={isLoading}
          onEditClick={onEditClick}
          onLogoutClick={onLogoutClick}
          onSaveClick={onSaveClick}
        />
      </form>
    </main>
  );
}

export default Profile;
