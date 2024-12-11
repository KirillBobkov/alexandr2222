import React from "react";
import styles from "./Button.module.css";
import { VisibilityManager } from "../VisibilityManager";

interface ButtonProps {
  isSubmitted: boolean;
  disabled?: boolean;
  status: string;
  href?: string;
  className?: string
}

export function Button({
  isSubmitted = false,
  disabled = false,
  status,
  href = '',
  className = '',
}: ButtonProps) {
  return (
    href ?
      <VisibilityManager 
        as='a'
        href={href}
        className={`${styles.button} ${className} ${isSubmitted ? styles.success : ""}`}
      >
        {status}
    </VisibilityManager>
    :
    <VisibilityManager 
        as='button'
        type="submit"
        disabled={disabled}
        className={`${styles.button} ${className} ${isSubmitted ? styles.success : ""}`}
      >
        {`${status}`}
    </VisibilityManager>
  );
}
