import styles from './ReasonCards.module.css';
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { LineAnimation } from "../LineAnomation/LineAnimation";

export const ReasonCards = ({reasonCards, title, titleEmpty}) => {


  return (
    <LineAnimation>
      <section className={styles.container}>
        <div className={styles.content}>
          <VisibilityManager
            as="h2"
            side="left"
            className={contentStyles.title}
            style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          >
            <span>
              <span className={contentStyles.title_empty}>{titleEmpty}</span>
              <span className={contentStyles.title_accent}> {title}</span>
            </span>
          </VisibilityManager>
          
          <VisibilityManager className={styles.cardsGrid}>
            {reasonCards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                {card.title ? <h3 className={styles.cardTitle}>{card.title}</h3> : null}
                {card.description ? <p className={styles.cardDescription}>{card.description}</p> : null}
              </div>
            ))}
          </VisibilityManager>
        </div>
      </section>
    </LineAnimation>
  );
}; 