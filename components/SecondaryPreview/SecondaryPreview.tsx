import React from "react";
import styles from "./SecondaryPreview.module.css";
import secondaryPreview from "../../public/images/preview.png";
import Image from "next/image.js";
import { VisibilityManager } from "../VisibilityManager";
import { LineAnimation } from "../LineAnomation/LineAnimation";

export const SecondaryPreview = ({ text }) => {
  const [loaded, setLoaded] = React.useState(false);
  
  return (
    <LineAnimation>
    <section className={styles.secondaryPreview}>
      <Image
        src={secondaryPreview}
        alt="заставка превью"
        className={styles.secondaryPreview__bg + " " + (loaded ? styles.loaded : "")}
        onLoad={() => setLoaded(true)}
      />
      <VisibilityManager as="div" className={styles.secondaryPreview__content}>
        <h1 className={styles.secondaryPreview__title}>{text}</h1>
      </VisibilityManager>
    </section>
    </LineAnimation>
  );
};
