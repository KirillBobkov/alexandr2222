import React from "react";
import styles from "./Suggests.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { VisibilityManager } from "../VisibilityManager";
import alex1 from "../../public/images/alex3.webp";
import Image from "next/image";

export const Suggest = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <LineAnimation>
      <div className={styles.block}>
        <VisibilityManager as="h2" side="left" className={styles.title}>
          <span className={styles.title_empty}>Что я </span>
          предлагаю вам?
        </VisibilityManager>

        <div className={styles["grid-container"]}>
          <VisibilityManager className={styles.item2}>
            <TextBlock
              title={"Мгновенные результаты во всех сферах "}
              desc={
                "Независимо от того, что Вас беспокоит — бизнес, отношения или здоровье — я помогу Вам устранить проблемы и начать действовать с новой силой. Ваша жизнь меняется сразу, без долгих ожиданий."
              }
            />
          </VisibilityManager>
          <VisibilityManager className={styles.item3}>
            <TextBlock
              title={"Полная персонализация "}
              desc={
                "Я разрабатываю индивидуальный подход под Ваши уникальные потребности и цели. Это не шаблонные решения — каждый шаг направлен на то, чтобы Вам стало легче достигать успехов именно в тех аспектах, которые важны для Вас."
              }
            />
          </VisibilityManager>
          <VisibilityManager className={styles.item4}>
            {" "}
            <Image
              src={alex1}
              alt="Александр Васильев"
              className={styles.image + " " + (loaded ? styles.loaded : "")}
              onLoad={() => setLoaded(true)}
            />
          </VisibilityManager>
          <VisibilityManager className={styles.item5}>
            <TextBlock
              title={"Результат "}
              desc={
                "Если проблема не решается - Вы получаете возврат денег в размере 100%."
              }
            />
          </VisibilityManager>
        </div>
      </div>
    </LineAnimation>
  );
};

const TextBlock = ({ title, desc }) => {
  return (
    <div className={styles.textBlock}>
      <h3 className={styles.textTitle}>
        {" "}
        <span className={styles.textSymbol}>// </span>
        {title}
      </h3>
      <p className={styles.textDescription}>{desc}</p>
    </div>
  );
};
