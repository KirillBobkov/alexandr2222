import React from "react";
import Image from "next/image"; // Adjust this import based on your image handling
import styles from "./Bio.module.css";
import alex3 from "../../public/images/alex3.webp";
import { VisibilityManager } from "../VisibilityManager";

export const Bio = () => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <section className={styles.block} id="about">
      <VisibilityManager side="left" as="h2" className={styles.title}>
        Александр <br />
        <span className={styles.title_empty}>Васильев</span>
      </VisibilityManager>
      <div className={styles.block__container}>
        <VisibilityManager className={styles.imageWrapper}>
          <Image
            src={alex3}
            alt="Александр Васильев"
            className={styles.image + " " + (loaded ? styles.loaded : "")}
            onLoad={() => setLoaded(true)}
          />
        </VisibilityManager>
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <VisibilityManager
              side="right"
              delay={0.5}
              as="blockquote"
              className={styles.uptitle}
            >
              Я устраняю причины Ваших страданий навсегда.
            </VisibilityManager>
            <VisibilityManager delay={0.5} className={styles.description}>
              <p>
                Вам не нравится то, как Вы живёте и чувствуете себя? Я помогу
                Вам обрести то состояние, о котором Вы мечтаете.
              </p>
              <br />
              <p>
                Используя свои навыки, я смог улучшить жизни множества людей и
                смогу помочь Вам, даже если сейчас Вы в это не верите.
              </p>
              <br />
              <p>
                Запишитесь на благотворительную консультацию и узнайте истинные
                причины проблем, способы решения и возможные преграды на пути к
                Вашему процветанию!
              </p>
            </VisibilityManager>
          </div>
        </div>
      </div>
    </section>
  );
};
