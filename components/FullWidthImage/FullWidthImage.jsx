import React from "react";
import styles from "./FullWidthImage.module.css"; // Adjust the path as necessary
import Image from "next/image";

export const FullWidthImage = ({ src, alt, description }) => {
  return (
    <section className={styles.imageWrapper}>
      <p className={styles.description}>{description}</p>
      <Image src={src} alt={alt} className={styles.image} />
    </section>
  );
};
