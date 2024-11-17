import React from "react";
import styles from "./Preview.module.css";
import preview_bg from "../../public/images/preview_bg.webp";
import Image from "next/image.js";
import { VisibilityManager } from "../VisibilityManager";

export const Preview = () => {
  return (
    <section className={styles.preview}>
      <Image
        src={preview_bg}
        alt="заставка превью"
        className={styles.preview__bg}
      />
      <VisibilityManager as="div" className={styles.preview__content}>
        <span className={styles.preview__sign}>ИN</span>
        <h1 className={styles.preview__title}>БЛАГОСЛОВЕННЫЙ ПОРТАЛ МЕЧТЫ</h1>
        <p className={styles.preview__description}>
          здоровье / деньги / отношения
        </p>
      </VisibilityManager>
    </section>
  );
};
