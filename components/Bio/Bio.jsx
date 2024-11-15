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
              <div className={styles.uptitle}>
                <strong>Я устраняю причины Ваших страданий навсегда.</strong>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.description}>
                <p>Вам не нравится то, как Вы живёте и чувствуете себя?</p>
                <p>Я помогу Вам обрести то состояние, о котором Вы мечтаете.</p>
                <br />
                <p>
                  Используя свои навыки, я смог улучшить жизни множества людей и
                  смогу помочь Вам, даже если сейчас Вы в это не верите.
                </p>
                <br />
                <p>
                  Запишитесь на благотворительную консультацию и узнайте
                  истинные причины проблем, способы решения и возможные преграды
                  на пути к Вашему процветанию!
                </p>
                <br />
                168
              </div>
            </div>
          </div>
        </VisibilityManager>
    </section>
  );
};
