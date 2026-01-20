import React, { useMemo } from "react";
import styles from "./StarsBackground.module.css";


function generateBoxShadow(count: number, max = 2000) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * max);
    const y = Math.floor(Math.random() * max);
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(", ");
}

export default function StarsBackground() {
  const smallStars = useMemo(() => generateBoxShadow(300), []);
  const mediumStars = useMemo(() => generateBoxShadow(100), []);
  const bigStars = useMemo(() => generateBoxShadow(50), []);

  return (
    <div className={styles["stars-root"]}>
      <div className={styles["stars"] + ' ' + styles["stars-small"]} style={{ boxShadow: smallStars }} />
      <div className={styles["stars"] + ' ' + styles["stars-medium"]} style={{ boxShadow: mediumStars }} />
      <div className={styles["stars"] + ' ' + styles["stars-big"]} style={{ boxShadow: bigStars }} />

    </div>
  );
}
