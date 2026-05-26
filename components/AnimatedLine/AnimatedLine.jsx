import { useTheme } from "../../hooks/useTheme";
import styles from "./AnimatedLine.module.css";

export const AnimatedLine = () => {
  useTheme();

  return (
    <div className={styles.block}>
      <div className={styles.moving}>
        <p className={styles.logo__title}>ИNTEGRAAL</p>
      </div>
      <div className={styles.moving}>
        <p className={styles.logo__title}>ИNTEGRAAL</p>
      </div>
      <div className={styles.moving}>
        <p className={styles.logo__title}>ИNTEGRAAL</p>
      </div>
    </div>
  );
};
