import React from "react";
import styles from "./Final.module.css"; // Adjust the path as necessary
import { VisibilityManager } from "../shared/VisibilityManager";
import LinkButton from "../shared/LinkButton/LinkButton";
import Image from "next/image";
import { LineAnimation } from "../LineAnomation/LineAnimation";
export const Final = ({ 
  title,
  description,
  buttonText,
  buttonHref,
  image,
  price,
  animation
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const content = (
    <section className={styles.block}>
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
          <>
            <span className={styles.move + " " + styles.moving1}>ИN</span>
            <span className={styles.move + " " + styles.moving2}>ИN</span>
            <span className={styles.move + " " + styles.moving3}>ИN</span>
          </>
        )}
        <VisibilityManager as="h3" className={`${styles.title} ${image ? "" : styles.title_no_image}`}>
          {title}
        </VisibilityManager>

        {price && (
          <VisibilityManager as="div" className={styles.price}>
            {price}
          </VisibilityManager>
        )}


        <VisibilityManager as="p" className={styles.description + " " + (image ? "" : styles.description_no_image)}>
          {description}
        </VisibilityManager>


        {buttonText && buttonHref && (
          <VisibilityManager as="div" style={{zIndex: "4"}}>
            <LinkButton href={buttonHref}>{buttonText}</LinkButton>
          </VisibilityManager>
        )}
      </div>
    </section>
  );

  return animation ? (
    <LineAnimation>{content}</LineAnimation>
  ) : (
    <div className={styles.container}>{content}</div>
  );
};
