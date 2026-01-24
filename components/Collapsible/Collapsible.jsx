import React, { useState } from "react";
import styles from "./Collapsible.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import point from "../../images/point.webp";

export const Collapsible = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <VisibilityManager
      className={`${styles.collapsible} ${isOpen ? styles.collapsibleOpen : ""}`}
    >
      <div
        className={`${styles.header} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
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

export const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.section} ${isOpen ? styles.open : ""}`}>
      <div
        className={`${styles.sectionHeader} ${isOpen ? styles.sectionOpen : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className={styles.sectionTitle + ' ' + contentStyles.title_small}>
          <img src={point.src} alt="" className={contentStyles.textSymbol + ' ' + styles.symbol} />
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
