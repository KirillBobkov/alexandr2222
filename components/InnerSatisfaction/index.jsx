import React from "react";
import styles from "./InnerSatisfaction.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";

export const InnerSatisfaction = ({
  titlePrefix = '',
  titleSuffix = '',
  description,
  order = 1,
  animation = false,
  titleStyles = {},
  emptyTitle = true,
}) => {
  const content = (
    <div className={styles.block}>
      <VisibilityManager
        as="h2"
        side="left"
        className={contentStyles.title + " " + styles.title}
        style={{ marginLeft: 0, marginRight: 0, marginBottom: 0, ...titleStyles }}
      >
        {order === 1 ? `${titlePrefix} ` : null}
        {titleSuffix}
        {order === 2 ? ` ${titlePrefix}` : null}
      </VisibilityManager>

      <VisibilityManager>
        <p className={styles.paragraph} style={{ maxWidth: 700 }}>
          {description}
        </p>
      </VisibilityManager>
    </div>
  );

  return <div className={styles.container}>{content}</div>;
};
