import React from "react";
import styles from "./InnerSatisfaction.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";

export const InnerSatisfaction = ({
  titlePrefix,
  titleSuffix,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <VisibilityManager
          as="h2"
          side="left"
          className={contentStyles.title}
          style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        >
          <span>
            <span className={contentStyles.title_empty}>{titlePrefix} </span>
            {titleSuffix}
          </span>
        </VisibilityManager>

        <VisibilityManager>
          <p className={styles.paragraph} style={{ maxWidth: 700 }}>
            {description}
          </p>
        </VisibilityManager>
      </div>
    </div>
  );
};