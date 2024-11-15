import React from 'react';
import containerStyles from "../../styles/container.module.css";
import styles from './GreenBlock.module.css'; // Adjust the path as necessary
import { VisibilityManager } from '../VisibilityManager';


export const GreenBlock = () => {
  return (
  <section className={styles.block}>
      <div className={containerStyles.container + ' ' + styles.content}>
        <VisibilityManager as="h2" className={styles.title}>Я настолько уверен в своей методике, что предоставляю Вам 100% гарантию.</VisibilityManager>
        <div className={styles.description}>
          <VisibilityManager as="p">
          Если после работы со мной, Вы не почувствуете улучшения, я верну Вам все деньги.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
          Моя цель – сделать так, чтобы Вы были довольны и рекомендовали меня своим близким.
          </VisibilityManager>
        </div>
        <VisibilityManager as="span" className={styles.uptitle}>ИN</VisibilityManager>
      </div>
    </section>
  );
};

