import React from 'react';
import styles from './FullWidthImage.module.css'; // Adjust the path as necessary
import Image from 'next/image';

export const FullWidthImage = ({ src, alt, description }) => {
  return (
    <div className={styles.imageWrapper}>
          <div className={styles.description}>
        <p>{description}</p>
      </div>
      <Image src={src} alt={alt} className={styles.image} />
    </div>
  );
};