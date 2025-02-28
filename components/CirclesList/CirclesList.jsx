import React from "react";
import styles from "./CirclesList.module.css";
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";

export const CirclesList = ({ title, titleEmpty, items, descriptions }) => {
  return (
    <LineAnimation>
      <div className={styles.block}>
        {(title || titleEmpty) && (
          <VisibilityManager
            as="h2"
            side="left"
            className={contentStyles.title}
          >
            {title}
            {titleEmpty && (
              <span className={contentStyles.title_empty}>{titleEmpty}</span>
            )}
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
    </LineAnimation>
  );
};

const CircleItem = ({ title }) => {
  return (
    <li className={styles.circle}>
      <h3 className={styles.textTitle}>{title}</h3>
    </li>
  );
};
