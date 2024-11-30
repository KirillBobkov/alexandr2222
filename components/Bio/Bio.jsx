import React from "react";
import Image from "next/image"; // Adjust this import based on your image handling
import styles from "./Bio.module.css"; // Adjust the path as necessary
import containerStyles from "../../styles/container.module.css";
import alex1 from "../../public/images/alex1.webp";
import { VisibilityManager } from "../VisibilityManager";

export const Bio = () => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <section className={styles.block} id="about">
      <div className={styles.block__container}>
        <div className={styles.imageWrapper}>
          <Image
            src={alex1}
            alt="Александр Васильев"
            className={styles.image + " " + (loaded ? styles.loaded : "")} onLoad={() => setLoaded(true)}/>
             </div>
          <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
              <VisibilityManager as="h2" className={styles.title}>Александр Васильев</VisibilityManager>
              <VisibilityManager as="div" className={styles.uptitle}>
              Я устраняю причины Ваших страданий навсегда.
              </VisibilityManager>
              <VisibilityManager as="div"  className={styles.divider}></VisibilityManager >
              <VisibilityManager className={styles.description}>
                <p>Вам не нравится то, как Вы живёте и чувствуете себя?
                <br/>Я помогу Вам обрести то состояние, о котором Вы мечтаете.</p>
                <br />
                <p>
                Используя свои навыки, я смог улучшить жизни множества людей и смогу помочь Вам, <br/>даже если сейчас Вы в это не верите.
                </p>
                <br />
                <p>
                Запишитесь на благотворительную консультацию и узнайте истинные причины проблем, <br/>способы решения и возможные преграды на пути к Вашему процветанию!
                </p>
                <br />
                <p style={{ textAlign: 'center' }}>168</p>
              </VisibilityManager>
            </div>
          </div>
        </div>
    </section>
  );
};
