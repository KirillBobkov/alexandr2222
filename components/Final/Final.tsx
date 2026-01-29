import { useState } from "react";
import Image from "next/image";
import { VisibilityManager } from "../shared/VisibilityManager";
import LinkButton from "../shared/LinkButton/LinkButton";
import styles from "./Final.module.css";

interface FinalProps {
  image?: string;
  animation?: boolean;
  flyletters?: boolean;
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
}

export const Final = ({
  children,
  customStyles = {},
  flyletters = true,
  image,
}: FinalProps) => {
  const [loaded, setLoaded] = useState(false);

  const content = (
    <VisibilityManager as="section" className={styles.block} style={customStyles}>
      <div className={styles.content}>
        {image ? (
          <Image
            src={image}
            alt="фоновое изображение"
            className={`${styles.background} ${loaded ? styles.loaded : ""}`}
            onLoad={() => setLoaded(true)}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          flyletters ? (
            <>
              <span className={`${styles.move} ${styles.moving1}`}>ИN</span>
              <span className={`${styles.move} ${styles.moving2}`}>ИN</span>
              <span className={`${styles.move} ${styles.moving3}`}>ИN</span>
            </>
          ) : null
        )}
        {children}
      </div>
    </VisibilityManager>
  );

  return <div className={styles.container}>{content}</div>;
};
