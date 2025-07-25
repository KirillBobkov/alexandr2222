import React from "react";
import styles from "./AboutMe.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnimation/LineAnimation.jsx";
import { VisibilityManager } from "../shared/VisibilityManager";
import { Button } from "../shared/Button/Button.jsx";
import contentStyles from "../../styles/contentStyles.module.css";
export const AboutMe = ({
  title,
  titleEmpty,
  items,
  bottomText,
  href,
  buttonStatus,
  order = 1,
}) => {
  return (
    <LineAnimation>
      <div className={styles.block}>
        {(title || titleEmpty) && (
          <VisibilityManager
            as="h2"
            side="left"
            className={contentStyles.title}
            style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          >
            {order === 2 ? title : null}
            {titleEmpty && (
              <span className={contentStyles.title_empty}>{titleEmpty}</span>
            )}
            {order === 1 ? title : null}
          </VisibilityManager>
        )}

        {items?.length > 0 && (
          <VisibilityManager as="ul" className={styles["grid-container"]}>
            {items.map((item, index) => (
              <TextBlock key={index} title={item.title} />
            ))}
          </VisibilityManager>
        )}

        {bottomText && (
          <VisibilityManager as="p" style={{ maxWidth: 700 }}>
            {bottomText}
          </VisibilityManager>
        )}

        {href && buttonStatus && (
          <Button
            className={styles.message}
            href={href}
            status={buttonStatus}
          />
        )}
      </div>
    </LineAnimation>
  );
};

const TextBlock = ({ title }) => {
  return title ? (
    <li className={styles.textBlock + " " + styles.item}>
      <h3 className={contentStyles.title_small}>
        {" "}
        <span className={contentStyles.textSymbol}>// </span>
        {title}
      </h3>
    </li>
  ) : null;
};
