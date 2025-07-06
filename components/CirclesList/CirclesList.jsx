import React from "react";
import styles from "./CirclesList.module.css";
import { LineAnimation } from "../LineAnimation/LineAnimation";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";

export const CirclesList = ({
  title,
  titleEmpty,
  items,
  descriptions,
  underTitle,
  animation,
}) => {
  const content = (
    <div className={styles.block}>
      {(title || titleEmpty) && (
        <VisibilityManager
          as="h2"
          side="left"
          className={contentStyles.title}
          style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        >
          {title}
          {titleEmpty && (
            <span className={contentStyles.title_empty}>{titleEmpty}</span>
          )}
        </VisibilityManager>
      )}

      {underTitle?.length > 0 && (
        <VisibilityManager as="p" className={styles.description}>
          {underTitle}
        </VisibilityManager>
      )}

      {items?.length > 0 && (
        <VisibilityManager as="ul" className={styles["flex-container"]}>
          {items.map((item, index) => (
            <CircleItem key={index} title={item.title} />
          ))}
        </VisibilityManager>
      )}
      {descriptions?.length > 0 && (
        <div className={contentStyles.descriptions}>
          {descriptions.map((description, index) => (
            <VisibilityManager
              key={index}
              as="p"
              className={styles.description}
            >
              {description}
            </VisibilityManager>
          ))}
        </div>
      )}
    </div>
  );

  return animation ? (
    <LineAnimation>{content}</LineAnimation>
  ) : (
    <div className={styles.container}>{content}</div>
  );
};

const CircleItem = ({ title }) => {
  return (
    <li className={styles.circle}>
      <h3 className={styles.textTitle}>{title}</h3>
    </li>
  );
};
