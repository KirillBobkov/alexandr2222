import React from "react";
import styles from "./Preview.module.css";
import preview_bg from "../../public/images/preview_bg.webp";
import Image from "next/image.js";
import { VisibilityManager } from "../shared/VisibilityManager";
import { LineAnimation } from "../LineAnomation/LineAnimation";

export const Preview = () => {
  const [loaded, setLoaded] = React.useState(false);
  
  return (
    <LineAnimation>
    <section className={styles.preview}>
      <Image
        src={preview_bg}
        alt="заставка превью"
        className={styles.preview__bg + " " + (loaded ? styles.loaded : "")}
        onLoad={() => setLoaded(true)}
      />
      <VisibilityManager as="div" className={styles.preview__content}>
        <h1 className={styles.preview__title}>Благословенный <span className={styles.preview__title_empty}>портал мечты</span></h1>
      </VisibilityManager>
    </section>
    </LineAnimation>
  );
};
