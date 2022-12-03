import React from 'react';
import './Error.css';
import classNames from 'classnames';

function Error({ text, className }) {
  if (!text) return null;
  return (
    <span className={classNames(
      'error',
      className,
    )}
    >
      {text}
    </span>
  );
}

export default Error;
