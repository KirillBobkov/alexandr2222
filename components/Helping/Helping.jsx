import React from "react";
import styles from "./Helping.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnimation/LineAnimation.jsx";
import { VisibilityManager } from "../shared/VisibilityManager";
import { Button } from "../shared/Button/Button.jsx";
import contentStyles from "../../styles/contentStyles.module.css";

export const Helping = ({
  blocks,
  title = "Я помогу,",
  titleEmpty = " если вы",
  href,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <VisibilityManager
          as="h2"
          side="left"
          style={{ marginLeft: "0px", marginBottom: "0px" }}
          className={contentStyles.title + " " + styles.title}
        >
          {title}{titleEmpty}
        </VisibilityManager>
        <div className={styles["grid-container"]}>
          {blocks.map((block) => (
            <VisibilityManager
              key={block.id}
              className={styles[block.className]}
            >
              <TextBlock title={block.title} desc={block.desc} />
            </VisibilityManager>
          ))}
        </div>
      </div>
    </div>
  );
};

const TextBlock = ({ title, desc }) => {
  return (
    <div className={styles.textBlock}>
      {title ? (
        <h3 className={styles.textTitle}>
          <span className={styles.textSymbol}>//</span>
          {"  "}
          {title}
        </h3>
      ) : null}
      <p className={styles.textDescription}>{desc}</p>
    </div>
  );
};
