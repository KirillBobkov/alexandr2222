import { useState } from "react";
import Image from "next/image";
import { VisibilityManager } from "../shared/VisibilityManager";
import styles from "./SecondaryPreview.module.css";

export const SecondaryPreview = ({ image, subtext, text, animated = true, }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className={styles.secondaryPreview}>
      <Image
        src={image}
        alt="заставка превью"
        className={`${styles.secondaryPreview__bg} ${animated ? styles.secondaryPreview__animated : ''} ${loaded ? styles.loaded : ""}`}
        onLoad={() => setLoaded(true)}
      />
      <div className={styles.overlay} />
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
