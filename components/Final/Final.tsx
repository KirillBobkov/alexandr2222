import React from "react";
import styles from "./Final.module.css"; // Adjust the path as necessary
import { VisibilityManager } from "../shared/VisibilityManager";
import LinkButton from "../shared/LinkButton/LinkButton";
import Image from "next/image";
import { LineAnimation } from "../LineAnimation/LineAnimation";

export const Final = ({ 
  image,
  animation,
  flyletters = true,
  children,
  customStyles = {},
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const content = (
    <VisibilityManager as="section" className={styles.block} style={customStyles}>
      <div className={`${styles.content}`}>
        {image ? (
          <Image
            src={image}
            alt="фоновое изображение"
            className={styles.background + " " + (loaded ? styles.loaded : "")}
            onLoad={() => setLoaded(true)}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          (flyletters ? 
          <>
            <span className={styles.move + " " + styles.moving1}>ИN</span>
            <span className={styles.move + " " + styles.moving2}>ИN</span>
            <span className={styles.move + " " + styles.moving3}>ИN</span>
          </>
          :
          <>
          </>
        ))}
        {children}
      </div>
    </VisibilityManager>
  );

  return animation ? (
    <LineAnimation>{content}</LineAnimation>
  ) : (
    <div className={styles.container}>{content}</div>
  );
};
