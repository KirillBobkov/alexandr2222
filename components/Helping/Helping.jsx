import React from "react";
import styles from "./Helping.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { VisibilityManager } from "../VisibilityManager";
import alex1 from "../../public/images/alex3.webp";
import Image from "next/image";
import { Button } from "../Button/Button";

export const Helping = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <LineAnimation>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles["grid-container"]}>
          <VisibilityManager as="h2" side="left" className={styles.item1 + ' ' + styles.title}>
            Я помогу,
            <br />
            <span className={styles.title_empty}> если вы</span>
          </VisibilityManager>

            <VisibilityManager className={styles.item2}>
              <TextBlock
                title={"Стремитесь к успеху"}
                desc={
                  "Я предлагаю Вам практический мгновенный результат, чтобы Вы преодолели внутренние барьеры и добились желаемых результатов."
                }
              />
            </VisibilityManager>
            <VisibilityManager className={styles.item5}>
              <TextBlock
                title={"Желаете улучшить отношения"}
                desc={
                  "Построить или восстановить гармоничные и глубокие связи, с доведением до результата."
                }
              />
            </VisibilityManager>
            <VisibilityManager className={styles.item4}>
              <TextBlock
                title={"Достаточно дисциплинированы"}
                desc={
                  "Важно немедленно."
                }
              />
            </VisibilityManager>
            <VisibilityManager className={styles.item3}>
              <TextBlock
                title={"Цените своё время"}
                desc={
                  "Вам нужно действие сейчас."
                }
              />
            </VisibilityManager>
          </div>
          <Button href="#message" status="Записаться" />
        </div>
      </div>
    </LineAnimation>
  );
};

const TextBlock = ({ title, desc }) => {
  return (
    <div className={styles.textBlock}>
      <h3 className={styles.textTitle}>
      <span className={styles.textSymbol}>●</span> 
        {'  '}
        {title}
      </h3>
      <p className={styles.textDescription}>{desc}</p>
    </div>
  );
};
