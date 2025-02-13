import React from "react";
import styles from "./AboutMe.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { VisibilityManager } from "../shared/VisibilityManager";
import { Button } from "../shared/Button/Button.jsx";
import contentStyles from "../../styles/contentStyles.module.css";
export const AboutMe = ({ title, titleEmpty, items, bottomText, buttonHref, buttonStatus }) => {
  return (
    <LineAnimation>
      <div className={styles.block}>
        {(title || titleEmpty) && (
          <VisibilityManager as="h2" side="left" className={styles.title}>
            {titleEmpty && <span className={styles.title_empty}>{titleEmpty}</span>}
           {' '}
            {title}
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

        {buttonHref && buttonStatus && (
          <Button className={styles.message} href={buttonHref} status={buttonStatus} />
        )}
      </div>
    </LineAnimation>
  );
};

const TextBlock = ({ title }) => {
  return title ? (
    <li className={styles.textBlock + ' ' + styles.item}>
      <h3 className={contentStyles.title_small}>
        {" "}
        <span className={styles.textSymbol}>// </span>
        {title}
      </h3>
    </li>
  ) : null;
};