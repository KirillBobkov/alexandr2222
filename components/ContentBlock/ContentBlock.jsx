import React from 'react';
import containerStyles from "../../styles/container.module.css";
import styles from './ContentBlock.module.css'; // Adjust the path as necessary

export const ContentBlock = ({ children, background, color }) => {
  return (
  <section className={styles.block} style={{background, color}}>
      <div className={containerStyles.container + ' ' + styles.content}>
        <>{children}</>
      </div>
    </section>
  );
};

