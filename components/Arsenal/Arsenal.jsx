import React from "react";
import styles from "./Arsenal.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { VisibilityManager } from "../VisibilityManager";

export const Arsenal = () => {
  return (
    <LineAnimation>
      <div className={styles.block}>
        <VisibilityManager as="h2" side="left" className={styles.title}>
          Арсенал,
          <span className={styles.title_empty}>
            {" "}
            применяемых мною инструментов{" "}
          </span>
        </VisibilityManager>

        <VisibilityManager as="ul" className={styles["flex-container"]}>
          <TextBlock title={"Техники НЛП"} />

          <TextBlock title={"Ароматерапия"} />

          <TextBlock title={"Кинезиология"} />

          <TextBlock title={"Дыхательные практики"} />

          <TextBlock title={"Психоанализ Карла Юнга"} />
        </VisibilityManager>

        <VisibilityManager as="p"
          className={styles.textContent}
          style={{ marginBottom: "20px" }}
        >
          Основной принцип моей деятельности — не навреди. В зависимости от
          сложности задачи, сессия длится от 15 минут до 2-ух часов.
        </VisibilityManager>

        <VisibilityManager as="p" className={styles.textContent}>
          Сеанс может включать в себя «домашнее задание» — несложные, но
          эффективные действия, направленные на усиление результатов, с которыми
          Вы легко справитесь.
        </VisibilityManager>
      </div>
    </LineAnimation>
  );
};

const TextBlock = ({ title, desc }) => {
  return (
    <li className={styles.circle}>
      <h3 className={styles.textTitle}>{title}</h3>
    </li>
  );
};
