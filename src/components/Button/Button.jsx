import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick, label }) => {
  return (
    <button type="submit" className={css.button} onClick={onClick}>
      <span className={css.buttonLabel}>{label}</span>
    </button>
  );
};

export default Button;
