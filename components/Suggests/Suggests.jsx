import React from "react";
import styles from "./Suggests.module.css"; // Adjust the path as necessary
import { VisibilityManager } from "../shared/VisibilityManager";
import chart from "../../images/chart.webp";
import Image from "next/image";
import contentStyles from "../../styles/contentStyles.module.css";
import point from "../../images/point.webp";

export const Suggest = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={styles.block}>
      <VisibilityManager
        as="h2"
        side="left"
        className={contentStyles.title}
        style={{ marginLeft: "0", marginRight: "0" }}
      >
        Что здесь?
      </VisibilityManager>

      <div className={styles["grid-container"]}>
        <VisibilityManager className={styles.item5}>
          <TextBlock
            title={"Мгновенные результаты во всех сферах "}
            desc={
              "Независимо от того, что вас беспокоит — бизнес, отношения или здоровье — я помогу вам устранить проблемы и начать действовать с новой силой. Ваша жизнь меняется сразу, без долгих ожиданий."
            }
          />
        </VisibilityManager>
        <VisibilityManager className={styles.item3}>
          <TextBlock
            title={"Полная персонализация "}
            desc={
              "Я разрабатываю индивидуальный подход под ваши уникальные потребности и цели. Это не шаблонные решения — каждый шаг направлен на то, чтобы вам стало легче достигать успехов именно в тех аспектах, которые важны для Вас."
            }
          />
        </VisibilityManager>
        <VisibilityManager className={styles.item4}>
          {" "}
          <Image
            src={chart}
            alt="Александр Васильев"
            className={styles.image + " " + (loaded ? styles.loaded : "")}
            onLoad={() => setLoaded(true)}
          />
        </VisibilityManager>
        <VisibilityManager className={styles.item2}>
          <TextBlock
            title={"Результат "}
            desc={
              "Если проблема не решается - вы получаете возврат денег в размере 100%."
            }
          />
        </VisibilityManager>
      </div>
    </div>
  );
};

const TextBlock = ({ title, desc }) => {
  return (
    <div className={styles.textBlock}>
      <h3 className={styles.textTitle}>
        {" "}
        <img src={point.src} alt="" className={styles.textSymbol} />
        {title}
      </h3>
      <p className={styles.textDescription}>{desc}</p>
    </div>
  );
};
