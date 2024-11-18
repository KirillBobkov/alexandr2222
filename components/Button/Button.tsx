import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  isSubmitted: boolean;
  disabled?: boolean;
  status: string;
}

export function Button({ isSubmitted, disabled, status }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${styles.button} ${isSubmitted ? styles.success : ''}`}
    >
      {`${status}`}
    </button>
  );
}