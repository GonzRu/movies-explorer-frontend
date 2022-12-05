import React from 'react';
import './FormUpdatedText.css';
import { PROFILE_UPDATED_MESSAGE } from '../../../consts/profile';

function FormUpdatedText({ isUpdated }) {
  if (!isUpdated) return null;
  return (
    <span className="formUpdatedText">
      {PROFILE_UPDATED_MESSAGE}
    </span>
  );
}

export default FormUpdatedText;
