import React from 'react';
import containerStyles from "../../styles/container.module.css";
import styles from './Neuro.module.css'; // Adjust the path as necessary


export const Neuro = () => {
  return (
  <div className={styles.block}>
      <div className={containerStyles.container + ' ' + styles.content}>
        <div className={styles.uptitle}>ИN</div>
        <div className={styles.title}>Нейротраблшуттинг</div>
        <div className={styles.description}>
          <p>
            Нейротраблшуттер — это мастер, который может <strong>быстро</strong> и <strong>эффективно</strong> устранять любые внутренние проблемы, мешающие Вам двигаться вперёд.
          </p>
          <br />
          <p>
            И это не долгий процесс — это <strong>точечное решение</strong> для того, чтобы Вы могли раскрыться в полную силу и в бизнесе, и в личной жизни, и в вопросах здоровья.
          </p>
          <br />
          <p>
            Когда проблема решается в голове, мы с Вами видим реальные результаты в жизни.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Neuro;
