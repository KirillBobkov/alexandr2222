import React from "react";
import styles from "./SecondaryPreview.module.css";
import Image from "next/image.js";
import { VisibilityManager } from "../shared/VisibilityManager";
import { LineAnimation } from "../LineAnomation/LineAnimation";

export const SecondaryPreview = ({ text, image }) => {
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
      <VisibilityManager className={styles.secondaryPreview__content}>
        <h1 className={styles.secondaryPreview__title}>{text}</h1>
      </VisibilityManager>
    </section>
  );
};
