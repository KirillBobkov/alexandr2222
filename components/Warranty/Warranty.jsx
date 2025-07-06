import React from "react";
import styles from "./Warranty.module.css"; // Adjust the path as necessary
import { VisibilityManager } from "../shared/VisibilityManager";
import { Button } from "../shared/Button/Button.jsx";
import { LineAnimation } from "../LineAnimation/LineAnimation.jsx";
import contentStyles from "../../styles/contentStyles.module.css";

export const Warranty = ({ title, titleEmpty, description }) => {
  return (
    <LineAnimation>
      <div className={styles.block}>
        <VisibilityManager as="h2" side="left" className={contentStyles.title} style={{ marginLeft: 0,marginBottom: 0 }}>
          {title}
          <span className={contentStyles.title_empty}>
            {titleEmpty}
          </span>
 
        </VisibilityManager>
        <VisibilityManager delay={0.5} className={styles.description}>
          <p>
            {description}
          </p>
        </VisibilityManager>
      </div>
    </LineAnimation>
  );
};
