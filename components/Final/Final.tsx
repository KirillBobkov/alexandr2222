import React from "react";
import styles from "./Final.module.css"; // Adjust the path as necessary
import { VisibilityManager } from "../shared/VisibilityManager";
import LinkButton from "../shared/LinkButton/LinkButton";
import Image from "next/image";

export const Final = ({ 
  title,
  description,
  buttonText,
  buttonHref,
  image
}) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <section className={styles.block}>
      <div className={styles.content}>
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
          <>
            <span className={styles.move + " " + styles.moving1}>ИN</span>
            <span className={styles.move + " " + styles.moving2}>ИN</span>
            <span className={styles.move + " " + styles.moving3}>ИN</span>
          </>
        )}
        <VisibilityManager as="h3" className={styles.title}>
          <span>{title}</span>
        </VisibilityManager>
        <VisibilityManager as="p" className={styles.description}>
          <span>{description}</span>
        </VisibilityManager>
        {buttonText && buttonHref && (
          <VisibilityManager as="div" style={{zIndex: "4"}}>
            <LinkButton href={buttonHref}>{buttonText}</LinkButton>
          </VisibilityManager>
        )}
      </div>
    </section>
  );
};
