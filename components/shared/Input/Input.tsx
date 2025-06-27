import React from 'react';
import styles from './Input.module.css';
import { VisibilityManager } from '../VisibilityManager';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  animated?: boolean;
  }

export function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  animated = true
}: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ([8, 46, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode >= 35 && e.keyCode <= 40)) {
      return;
    }
    
    if (type === 'tel' && !/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
    {animated ? (
      <VisibilityManager className={`${styles.inputGroup} ${error ? styles.error : ''}`}>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={styles.input}
          autoComplete="off"
        />
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </VisibilityManager>
    ) : (
    <div className={`${styles.inputGroup} ${error ? styles.error : ''}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={styles.input}
        autoComplete="off"
      />
        {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
    )}
    </>
  );
}