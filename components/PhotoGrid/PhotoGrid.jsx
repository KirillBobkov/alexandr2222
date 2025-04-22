import React, { useState } from "react";
import Image from "next/image";
import styles from "./PhotoGrid.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";

/**
 * PhotoGrid component that displays a grid of photos with hover effect
 * @param {Array} photos - Array of photo objects with img, title, and description properties
 */
export const PhotoGrid = ({ photos }) => {
  return (
    <div className={styles.photoGrid}>
      {photos && photos.map((photo, index) => (
        <VisibilityManager key={index} className={styles.photoItem}>
          <PhotoItem 
            img={photo.img} 
            title={photo.title} 
            description={photo.description} 
          />
        </VisibilityManager>
      ))}
    </div>
  );
};

const PhotoItem = ({ img, title, description }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  return (
    <div className={styles.photoWrapper}>
      <div className={styles.photoContainer}>
        {img && !error ? (
          <Image
            src={img}
            alt={title}
            className={`${styles.photo} ${loaded ? styles.loaded : ""}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 25vw"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        ) : (
          <div className={styles.placeholderBg}></div>
        )}
        <div className={styles.overlay}>
          <div className={styles.photoInfo}>
            <h3 className={styles.photoTitle}>{title}</h3>
            <p className={styles.photoDescription}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 