import { useState } from "react";
import Image from "next/image";
import { VisibilityManager } from "../shared/VisibilityManager";
import styles from "./SecondaryPreview.module.css";

export const SecondaryPreview = ({ image, subtext, text, animated = true, overlay = true, bgImage }) => {
  const [loaded, setLoaded] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section className={styles.secondaryPreview}>
      {bgImage && (
        <Image
          src={bgImage}
          alt="фон за заставкой"
          className={`${styles.secondaryPreview__bgImage} ${animated ? styles.secondaryPreview__animated : ''} ${bgLoaded ? styles.loaded : ""}`}
          onLoad={() => setBgLoaded(true)}
        />
      )}
      <Image
        src={image}
        alt="заставка превью"
        className={`${styles.secondaryPreview__bg} ${animated ? styles.secondaryPreview__animated : ''} ${loaded ? styles.loaded : ""}`}
        onLoad={() => setLoaded(true)}
      />
      {text && (
        <VisibilityManager className={styles.secondaryPreview__content}>
          <h1 className={styles.secondaryPreview__title}>{text}</h1>
        </VisibilityManager>
      )}
      {subtext && (
        <VisibilityManager className={styles.secondaryPreview__content}>
          <h1 className={styles.secondaryPreview__subtitle}>{subtext}</h1>
        </VisibilityManager>
      )}
    </section>
  );
};
