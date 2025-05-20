import React from "react";
import styles from "./InnerSatisfaction.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";

export const InnerSatisfaction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <VisibilityManager
          as="h2"
          side="left"
          className={contentStyles.title}
          style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        >
          <span>
            <span className={contentStyles.title_empty}>ЧТО </span>Я ПРЕДЛАГАЮ?
          </span>
        </VisibilityManager>

        <VisibilityManager>
          <p className={styles.paragraph} style={{ maxWidth: 700 }}>
            Если вы чего-то достигли, но потеряли смысл жизни, разочаровались в
            людях, регулярно испытываете нервозность, апатию или суицидальные
            мысли, не переживайте. Не всё потеряно.
            <br />
            <br />
            Я знаю как вам помочь, и у вас есть бесплатный способ убедиться в
            этом. Что я имею ввиду? Я занимаюсь нейротраблшутингом (точечной
            перезагрузкой мышления через подсознание, работой с причинами
            внутренних тормозов, которые невозможно увидеть логикой) и, в случае
            отсутствия результата, возвращаю деньги.
            <br />
            <br />
            Более того, кто хочет познакомиться с самим собой и кардинально
            изменить свою внутреннюю составляющую, может записаться у меня на
            мухоморный ретрит. Это не для всех, но кто чувствует зов, ни с чем
            его не перепутает.
            <br />
            <br />
            Добро пожаловать!
          </p>
        </VisibilityManager>
      </div>
    </div>
  );
};
