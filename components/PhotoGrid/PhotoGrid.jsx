import { useState } from "react";
import Image from "next/image";
import { VisibilityManager } from "../shared/VisibilityManager";
import styles from "./PhotoGrid.module.css";

export const PhotoGrid = ({ photos }) => {
  return (
    <div className={styles.photoGrid}>
      {photos &&
        photos.map((photo, index) => (
          <VisibilityManager key={index} className={styles.photoItem}>
            <PhotoItem
              description={photo.description}
              img={photo.img}
              title={photo.title}
            />
          </VisibilityManager>
        ))}
    </div>
  );
};

const PhotoItem = ({ description, img, title }) => {
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
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        ) : (
          <div className={styles.placeholderBg} />
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
