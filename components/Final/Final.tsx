import { useState } from "react";
import Image from "next/image";
import { VisibilityManager } from "../shared/VisibilityManager";
import LinkButton from "../shared/LinkButton/LinkButton";
import styles from "./Final.module.css";

interface FinalProps {
  image?: string;
  animation?: boolean;
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  className: string;
}

export const Final = ({
  children,
  customStyles = {},
  image,
  className = ''
}: FinalProps) => {
  const [loaded, setLoaded] = useState(false);

  const content = (
    <VisibilityManager as="section" className={styles.block} style={customStyles}>
      <div className={styles.content + ' ' + className} >
        {image && (
          <Image
            src={image}
            alt="фоновое изображение"
            className={`${styles.background} ${loaded ? styles.loaded : ""}`}
            onLoad={() => setLoaded(true)}
            sizes="100vw"
          />
        )}
        {children}
      </div>
    </VisibilityManager>
  );

  return <div className={styles.container}>{content}</div>;
};
