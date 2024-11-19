import React from 'react';
import containerStyles from "../../styles/container.module.css";
import styles from './ContentBlock.module.css'; // Adjust the path as necessary

export const ContentBlock = ({ children, background, color, id = '' }) => {
  return (
  <section id={id} className={styles.block} style={{background, color}}>
      <div className={containerStyles.container + ' ' + styles.content}>
        <>{children}</>
      </div>
    </section>
  );
};

