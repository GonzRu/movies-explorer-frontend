import React from 'react';
import Button from '../../Shared/Button/Button';
import './FormButtons.css';

function FormButtons({
  editMode, isLoading, isValid, onSaveClick, onEditClick, onLogoutClick,
}) {
  if (editMode) {
    return (
      <Button
        onClick={onSaveClick}
        className="formButtons__saveBtn"
        disabled={isLoading || !isValid}
      >
        Сохранить
      </Button>
    );
  }

  return (
    <>
      <button
        type="button"
        className="formButtons__editBtn"
        onClick={onEditClick}
        disabled={isLoading}
      >
        Редактировать
      </button>
      <button
        type="button"
        className="formButtons__logoutBtn"
        onClick={onLogoutClick}
        disabled={isLoading}
      >
        Выйти из аккаунта
      </button>
    </>
  );
}

export default FormButtons;
