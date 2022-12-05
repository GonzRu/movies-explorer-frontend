import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css';
import useForm from '../../hooks/useForm';
import FormInputs from './FormInputs/FormInputs';
import FormButtons from './FormButtons/FormButtons';
import FormError from './FormError/FormError';
import FormUpdatedText from './FormUpdatedText/FormUpdatedText';

function Profile() {
  const { currentUser, logout, updateUser } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const {
    values,
    errors,
    isValid,
    onChange,
  } = useForm({ name: currentUser.name, email: currentUser.email });

  useEffect(() => {
    if (currentUser.name === values.name
    && currentUser.email === values.email) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [currentUser, values]);

  if (!currentUser) return null;

  const onEditClick = () => {
    setEditMode(true);
    setIsUpdated(false);
  };
  const onSaveClick = () => {
    setIsLoading(true);
    updateUser(values)
      .then(() => {
        setEditMode(false);
        setIsUpdated(true);
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
        <FormUpdatedText isUpdated={isUpdated} />
        <FormButtons
          editMode={editMode}
          isValid={isValid && isChanged}
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
