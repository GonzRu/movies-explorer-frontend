import React from 'react';
import './FormError.css';

function FormError({ error }) {
  if (!error) return null;

  return (
    <span className="formError">
      {error}
    </span>
  );
}

export default FormError;
