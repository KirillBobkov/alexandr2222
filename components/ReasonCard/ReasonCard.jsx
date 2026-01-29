import styles from "./ReasonCard.module.css";

export const ReasonCard = ({ badgeText, card, className, index }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <div className={styles.cardHeader}>
        {badgeText ? (
          <span className={styles.cardBadge}>{badgeText}</span>
        ) : (
          <span className={styles.cardNumber}>{String(index + 1)}</span>
        )}
      </div>
      {card?.title ? <h3 className={styles.cardTitle}>{card.title}</h3> : null}
      {card?.description ? (
        <p className={styles.cardDescription}>{card.description}</p>
      ) : null}
    </div>
  );
};
