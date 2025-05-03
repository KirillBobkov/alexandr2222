import React from "react";
import styles from "./SecondaryPreview.module.css";
import Image from "next/image.js";
import { VisibilityManager } from "../shared/VisibilityManager";

export const SecondaryPreview = ({ text, subtext, image }) => {
  const [loaded, setLoaded] = React.useState(false);
  
  return (
    <section className={styles.secondaryPreview}>
      <Image
        src={image}
        alt="заставка превью"
        className={styles.secondaryPreview__bg + " " + (loaded ? styles.loaded : "")}
        onLoad={() => setLoaded(true)}
      />
      <div className={styles.overlay}></div>
      {text && <VisibilityManager className={styles.secondaryPreview__content}>
        <h1 className={styles.secondaryPreview__title}>{text}</h1>
      </VisibilityManager>}

      {subtext && <VisibilityManager className={styles.secondaryPreview__content}>
        <h1 className={styles.secondaryPreview__subtitle}>{subtext}</h1>
      </VisibilityManager>}
    </section>
  );
};
