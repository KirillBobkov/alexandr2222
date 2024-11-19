import React from 'react';
import containerStyles from "../../styles/container.module.css";
import styles from './AskMe.module.css'; // Adjust the path as necessary


export const AskMe = ({  }) => {
  return (
  <section className={styles.block}>
      <div className={containerStyles.container + ' ' + styles.content}>
        <h2 className={styles.title}>Запишитесь на бесплатную консультацию.</h2>
        <div className={styles.description}>
          <p>
          Узнайте причины своих проблем, способы их решения и возможные преграды на вашем пути к успеху!
          </p>
          <br />
        </div>
      </div>
    </section>
  );
};

