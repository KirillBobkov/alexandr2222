import React from "react";
import styles from "./AboutMe.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { VisibilityManager } from "../VisibilityManager";
import { Button } from "../Button/Button";
export const AboutMe = () => {

  return (
    <LineAnimation>
      <div className={styles.block}>
        <VisibilityManager as="h2" side="left" className={styles.title}>
          <span className={styles.title_empty}>Чем я </span>
          могу вам помочь
        </VisibilityManager>

        <VisibilityManager as="ul" className={styles["grid-container"]}>
  
            <TextBlock title={"Усталость"} />
       
            <TextBlock title={"Психосоматика"} />
      
            <TextBlock title={"Ночные кошмары"} />
        
            <TextBlock title={"Психические травмы"} />
          
            <TextBlock title={"Управление эмоциями"} />
        
            <TextBlock title={"Поиск предназначения"} />
      
            <TextBlock title={"Подавленное состояние"} />
          
            <TextBlock title={"Ментальные ограничения"} />
        </VisibilityManager>

        <VisibilityManager as="p" style={{ maxWidth: 700 }}>
          Возможно, Ваша проблема не вошла в этот список, поэтому, напишите свой
          запрос, и я подумаю, как Вам помочь.
        </VisibilityManager>
        <Button className={styles.message} href="#message" status="Записаться" />
      </div>
    </LineAnimation>
  );
};

const TextBlock = ({ title, desc }) => {
  return (
    <li className={styles.textBlock + ' ' + styles.item}>
      <h3 className={styles.textTitle}>
        {" "}
        <span className={styles.textSymbol}>// </span>
        {title}
      </h3>
    </li>
  );
};