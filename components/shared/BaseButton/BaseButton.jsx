import styles from "./BaseButton.module.css";

export const BaseButton = ({
  children,
  className = "",
  href,
  type = "button",
  target,
  rel,
  onClick,
  disabled = false,
  as = "button",
}) => {
  const commonProps = {
    className: `${styles.button} ${className}`,
    disabled,
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </button>
  );
};
