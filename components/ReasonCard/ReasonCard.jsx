import styles from './ReasonCard.module.css';

export const ReasonCard = ({ card, index }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      {card.title ? <h3 className={styles.cardTitle}>{card.title}</h3> : null}
      {card.description ? <p className={styles.cardDescription}>{card.description}</p> : null}
    </div>
  );
}; 