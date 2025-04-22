import React from "react";
import styles from "./InnerSatisfaction.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { LineAnimation } from "../LineAnomation/LineAnimation";

export const InnerSatisfaction = () => {
  return (
    <LineAnimation>
    <div className={styles.container}>
    <div className={styles.block}>
      <VisibilityManager
        as="h2"
        side="left"
        className={contentStyles.title}
        style={{marginLeft: 0, marginRight: 0, marginBottom: 0}}
      >
        <span>Когда внешний успех </span>
        <span className={contentStyles.title_empty}>
          не приносит внутреннего удовлетворения
        </span>
      </VisibilityManager>

      <VisibilityManager>
        <p className={styles.paragraph} style={{ maxWidth: 700 }}>
          В повседневной суете легко потерять связь с собой. Мы гонимся за
          достижениями, стараемся соответствовать ожиданиям, набираем скорости —
          но вдруг понимаем, что радость ушла. Внутри остаются тревога,
          одиночество, чувство неправильности и усталость от самого
          существования.
        </p>
      </VisibilityManager>
    </div>
    </div>
    </LineAnimation>
  );
};
