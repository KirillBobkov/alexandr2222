import React from "react";
import styles from "./Final.module.css"; // Adjust the path as necessary
import { VisibilityManager } from "../shared/VisibilityManager";
import LinkButton from "../shared/LinkButton/LinkButton";

export const Final = ({ 
  title,
  description,
  buttonText,
  buttonHref
}) => {
  return (
    <section className={styles.block}>
      <div className={styles.content}>
        <VisibilityManager as="h3" className={styles.title}>
          <span>{title}</span>
        </VisibilityManager>
        <VisibilityManager as="p" className={styles.description}>
          <span>{description}</span>
        </VisibilityManager>
        {buttonText && buttonHref && <div style={{zIndex: "4"}}><LinkButton href={buttonHref}>{buttonText}</LinkButton></div>}
        <span className={styles.move + " " + styles.moving1}>ИN</span>
        <span className={styles.move + " " + styles.moving2}>ИN</span>
        <span className={styles.move + " " + styles.moving3}>ИN</span>
      </div>
    </section>
  );
};
