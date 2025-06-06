import React from "react";
import styles from "./Warranty.module.css"; // Adjust the path as necessary
import { VisibilityManager } from "../shared/VisibilityManager";
import { Button } from "../shared/Button/Button.jsx";
import { LineAnimation } from "../LineAnomation/LineAnimation";
import contentStyles from "../../styles/contentStyles.module.css";
export const Warranty = ({ href }) => {
  return (
    <LineAnimation>
      <div className={styles.block}>
        <VisibilityManager as="h2" side="left" className={contentStyles.title} style={{ marginBottom: 0 }}>
          Я уверен{" "}
          <span className={contentStyles.title_empty}>
            в своей методике на{" "}
          </span>
          100%
        </VisibilityManager>
        <VisibilityManager delay={0.5} className={styles.description}>
          <p>
            Если после работы со мной, вы не почувствуете улучшения, я верну вам
            все деньги. Моя цель – сделать так, чтобы вы были довольны и
            рекомендовали меня своим близким.
          </p>
        </VisibilityManager>
      </div>
    </LineAnimation>
  );
};
