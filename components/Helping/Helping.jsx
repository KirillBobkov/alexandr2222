import React from "react";
import styles from "./Helping.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { VisibilityManager } from "../shared/VisibilityManager";
import { Button } from "../shared/Button/Button.jsx";
import contentStyles from "../../styles/contentStyles.module.css";
export const Helping = ({ href }) => {
  return (
      <div className={styles.container}>
        <div className={styles.block}>
        <VisibilityManager as="h2" side="left" style={{ marginLeft: "0px"}} className={contentStyles.title}>
             Я помогу,
            <span className={contentStyles.title_empty}> если вы</span>
        </VisibilityManager>
          <div className={styles["grid-container"]}>
   

            <VisibilityManager className={styles.item2}>
              <TextBlock
                title={"Мечтаете о большем"}
                desc={
                  "Я могу помочь вам легко преодолеть внутренние барьеры и быстрее добиться желанных результатов."
                }
              />
            </VisibilityManager>
            <VisibilityManager className={styles.item5}>
              <TextBlock
                title={"Желаете наслаждаться отношениями"}
                desc={
                  "Хотите создать гармоничные и глубокие связи? Я решаю такие задачи, с доведением до результата."
                }
              />
            </VisibilityManager>
            <VisibilityManager className={styles.item4}>
              <TextBlock
                title={"Хотели бы позаботиться о своём здоровье"}
                desc={
                  "Известно, что большинство проблем со здоровьем «идут от головы», нейротраблшутинг даёт возможность устранять причины таких проблем."
                }
              />
            </VisibilityManager>
            <VisibilityManager className={styles.item3}>
              <TextBlock
                title={"Цените своё время"}
                desc={
                  "Вам нужен результат сейчас. Безопасно и эффективно, а главное - сразу. Я предлагаю вам практический мгновенный результат."
                }
              />
            </VisibilityManager>
          </div>
        </div>
      </div>
  );
};

const TextBlock = ({ title, desc }) => {
  return (
    <div className={styles.textBlock}>
      <h3 className={styles.textTitle}>
      <span className={styles.textSymbol}>//</span> 
        {'  '}
        {title}
      </h3>
      <p className={styles.textDescription}>{desc}</p>
    </div>
  );
};
