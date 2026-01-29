import { useState } from "react";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import point from "../../images/point.webp";
import styles from "./Collapsible.module.css";

export const Collapsible = ({ children, defaultOpen = false, title }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <VisibilityManager
      className={`${styles.collapsible} ${isOpen ? styles.collapsibleOpen : ""}`}
    >
      <div
        className={`${styles.header} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className={contentStyles.title_middle}>{title}</h3>
        <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.visible : ""}`}>
        <div className={styles.inner}>{children}</div>
      </div>
    </VisibilityManager>
  );
};

export const CollapsibleSection = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.section} ${isOpen ? styles.open : ""}`}>
      <div
        className={`${styles.sectionHeader} ${isOpen ? styles.sectionOpen : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h4 className={`${styles.sectionTitle} ${contentStyles.title_small}`}>
          <img
            src={point.src}
            alt=""
            className={`${contentStyles.textSymbol} ${styles.symbol}`}
          />
          {title}
        </h4>
        <span className={styles.sectionIcon}>{isOpen ? "−" : "+"}</span>
      </div>
      <div
        className={`${styles.sectionContent} ${
          isOpen ? styles.sectionVisible : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};
