import { VisibilityManager } from "../VisibilityManager";
import styles from "./Input.module.css";

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
  animated = true,
}: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [8, 46, 9, 27, 13];
    const isModifierKey =
      e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true);
    const isNavigationKey = e.keyCode >= 35 && e.keyCode <= 40;

    if (
      allowedKeys.includes(e.keyCode) ||
      isModifierKey ||
      isNavigationKey
    ) {
      return;
    }

    if (type === "tel" && !/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const inputGroupClass = `${styles.inputGroup} ${
    error ? styles.error : ""
  }`;

  return (
    <>
      {animated ? (
        <VisibilityManager className={inputGroupClass}>
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
        <div className={inputGroupClass}>
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