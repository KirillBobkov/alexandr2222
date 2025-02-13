import React from "react";
import Image from "next/image"; // Adjust this import based on your image handling
import styles from "./Bio.module.css";
import alex5 from "../../public/images/alex5.webp";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import LinkButton from "../shared/LinkButton/LinkButton";

export const Bio = () => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <section className={styles.block} id="about">
      <div className={styles.block__container}>
        <VisibilityManager className={styles.imageWrapper}>
          <Image
            src={alex5}
            alt="Александр Васильев"
            className={styles.image + " " + (loaded ? styles.loaded : "")}
            onLoad={() => setLoaded(true)}
          />
        </VisibilityManager>
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <VisibilityManager as="h3" className={contentStyles.title_middle}>
              Моя история:
              <span className={contentStyles.title_empty}>
                {" "}
                от личных испытаний к призванию целителя
              </span>
            </VisibilityManager>

            <VisibilityManager delay={0.5} className={styles.description}>
              <p>
                Меня зовут Александр «Интеграл» Васильев, и я хочу поделиться с
                вами своей историей.
              </p>
              <br />
              <p>
                Как я прошёл через трудности, чтобы найти своё истинное
                призвание — помогать людям исцеляться и обретать гармонию в
                жизни.{" "}
              </p>
            </VisibilityManager>
            <VisibilityManager delay={0.7} className={styles.description}>
              <LinkButton href="/about-me">Читать полностью</LinkButton>
            </VisibilityManager>
          </div>
        </div>
      </div>
    </section>
  );
};
