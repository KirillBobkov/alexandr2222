import React from "react";
import Image from "next/image"; // Adjust this import based on your image handling
import styles from "./Bio.module.css"; // Adjust the path as necessary
import containerStyles from "../../styles/container.module.css";
import alex1 from "../../public/images/alex1.jpg";
import { VisibilityManager } from "../VisibilityManager";

export const Bio = () => {
  return (
    <section className={styles.block}>
      <VisibilityManager className={containerStyles.container + ' ' + styles.block__container}>
          <Image
            src={alex1}
            alt="Александр Васильев"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>Александр Васильев</h2>
              <VisibilityManager as="div" className={styles.uptitle}>
                Я устраняю причины Ваших страданий навсегда.
              </VisibilityManager>
              <VisibilityManager as="div"  className={styles.divider}></VisibilityManager >
              <div className={styles.description}>
                <VisibilityManager as="p">Вам не нравится то, как Вы живёте и чувствуете себя?
                <br/>Я помогу Вам обрести то состояние, о котором Вы мечтаете.</VisibilityManager>
                <br />
                <VisibilityManager as="p">
                  Используя свои навыки, я смог улучшить жизни множества людей и
                  смогу помочь Вам, даже если сейчас Вы в это не верите.
                </VisibilityManager>
                <br />
                <VisibilityManager as="p">
                  Запишитесь на благотворительную консультацию и узнайте
                  истинные причины проблем, способы решения и возможные преграды
                  на пути к Вашему процветанию!
                </VisibilityManager>
                <br />
                <VisibilityManager as="span">168</VisibilityManager>
              </div>
            </div>
          </div>
        </VisibilityManager>
    </section>
  );
};
