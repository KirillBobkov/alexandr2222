import React from "react";
import styles from "./Final.module.css"; // Adjust the path as necessary
import { VisibilityManager } from "../VisibilityManager";

export const Final = () => {
  return (
    <section className={styles.block}>
      <div className={styles.content}>
        <VisibilityManager as="h3" className={styles.title}>
          <span>Запишитесь на бесплатную консультацию</span>
        </VisibilityManager>
        <VisibilityManager as="p" className={styles.description}>
          <span>Узнайте причины своих проблем, способы их решения и возможные преграды
          на вашем пути к успеху!</span>
        </VisibilityManager>
        <VisibilityManager as="a" href="#message" className={styles.link}>
          <span>Записаться</span>
        </VisibilityManager>
        <span className={styles.move + " " + styles.moving1}>ИN</span>
        <span className={styles.move + " " + styles.moving2}>ИN</span>
        <span className={styles.move + " " + styles.moving3}>ИN</span>
      </div>
    </section>
  );
};
