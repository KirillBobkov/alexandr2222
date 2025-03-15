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
        <div className={styles.button_container}>
          <a href="https://t.me/chronics44" className={styles.telegram_button} target="_blank" rel="noopener noreferrer">
            <svg className={styles.telegram_icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.665 3.717L2.93497 10.554C1.72497 11.04 1.73197 11.715 2.71297 12.016L7.26497 13.436L17.797 6.791C18.295 6.488 18.75 6.651 18.376 6.983L9.84297 14.684H9.84097L9.84297 14.685L9.52897 19.377C9.98897 19.377 10.192 19.166 10.45 18.917L12.661 16.767L17.26 20.164C18.108 20.631 18.717 20.391 18.928 19.379L21.947 5.151C22.256 3.912 21.474 3.351 20.665 3.717Z" fill="currentColor"/>
            </svg>
            TELEGRAM КАНАЛ
          </a>
        </div>
      </VisibilityManager>
    </section>
    </LineAnimation>
  );
};
