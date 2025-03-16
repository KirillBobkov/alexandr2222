import React from "react";
import styles from "./AnimatedLine.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnomation/LineAnimation";
import logo from "../../images/logo.webp";
import Image from "next/image.js";

export const AnimatedLine = () => {
  return (
    <LineAnimation>
      <div className={styles.block}>
        <div className={styles.moving}>
          <Image src={logo} alt="" className={styles.logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
          </p>  
        </div>
        <div className={styles.moving}>
          <Image src={logo} alt="" className={styles.logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
          </p>  
        </div>
        <div className={styles.moving}>
          <Image src={logo} alt="" className={styles.logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
          </p>  
        </div>
      </div>
    </LineAnimation>
  );
};
