import styles from './ReasonCards.module.css';
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { ReasonCard } from "../ReasonCard/ReasonCard";

export const ReasonCards = ({
  reasonCards, 
  title, 
  titleEmpty,
  renderCard,
  children
}) => {
  // Render prop может быть передан как renderCard prop или как children функция
  const cardRenderer = renderCard || (typeof children === 'function' ? children : null);
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <VisibilityManager
          as="h2"
          side="left"
          className={contentStyles.title}
          style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        >
          {titleEmpty} {title}
        </VisibilityManager>
        
        <VisibilityManager className={styles.cardsGrid}>
          {reasonCards.map((card, index) => {
            // Если есть render prop, используем его
            if (cardRenderer) {
              return cardRenderer({ card, index, key: index });
            }
            // Иначе используем дефолтный ReasonCard
            return <ReasonCard key={index} card={card} index={index} />;
          })}
        </VisibilityManager>
      </div>
    </section>
  );
}; 