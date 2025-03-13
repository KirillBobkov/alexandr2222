import Image from 'next/image';
import LinkButton from '../shared/LinkButton/LinkButton';
import styles from './BlogCard.module.css';
import contentStyles from '../../styles/contentStyles.module.css';
import React from 'react';
import { VisibilityManager } from '../shared/VisibilityManager';

export const BlogCard = ({ title, description, date, image, slug }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <VisibilityManager as="article" className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className={styles.image + " " + (loaded ? styles.loaded : "")}
          onLoad={() => setLoaded(true)}
          />
      </div>
      <div className={styles.content}>
        <time className={styles.date}>{date}</time>
        <h2 className={contentStyles.title_middle}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <LinkButton href={`/blog/${slug}`}>Читать полностью</LinkButton>
      </div>
    </VisibilityManager>  
  );
}; 