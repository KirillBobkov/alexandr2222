import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  isSubmitted: boolean;
  disabled?: boolean;
}

export function Button({ isSubmitted, disabled }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${styles.button} ${isSubmitted ? styles.success : ''}`}
    >
      {isSubmitted ? 'Запись оформлена' : 'Записаться'}
    </button>
  );
}