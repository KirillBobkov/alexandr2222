import Image from "next/image";
import { useTheme } from "../../hooks/useTheme";
import logoDark from "../../images/logo_dark.webp";
import logoLight from "../../images/logo.webp";
import styles from "./AnimatedLine.module.css";

export const AnimatedLine = () => {
  const { theme } = useTheme();
  const logo = theme === "light" ? logoLight : logoDark;

  return (
    <div className={styles.block}>
      <div className={styles.moving}>
        <Image src={logo} alt="" className={styles.logo} id="logo" />
        <p className={styles.logo__title}>TEGRAAL</p>
      </div>
      <div className={styles.moving}>
        <Image src={logo} alt="" className={styles.logo} id="logo" />
        <p className={styles.logo__title}>TEGRAAL</p>
      </div>
      <div className={styles.moving}>
        <Image src={logo} alt="" className={styles.logo} id="logo" />
        <p className={styles.logo__title}>TEGRAAL</p>
      </div>
    </div>
  );
};
