import React from "react";
import styles from "./AnimatedLine.module.css"; // Adjust the path as necessary
import { LineAnimation } from "../LineAnomation/LineAnimation";
import Image from "next/image.js";
import logoLight from "../../images/logo_light.svg";
import logoDark from "../../images/logo_dark.svg";
import { useTheme } from "../../hooks/useTheme";

export const AnimatedLine = () => {
  const { theme } = useTheme();
  return (
    <LineAnimation>
      <div className={styles.block}>
        <div className={styles.moving}>
          <Image src={theme === "light" ? logoLight : logoDark} alt="" className={styles.logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
          </p>  
        </div>
        <div className={styles.moving}>
          <Image src={theme === "light" ? logoLight : logoDark } alt="" className={styles.logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
          </p>  
        </div>
        <div className={styles.moving}>
          <Image src={theme === "light" ? logoLight : logoDark} alt="" className={styles.logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
          </p>  
        </div>
      </div>
    </LineAnimation>
  );
};
