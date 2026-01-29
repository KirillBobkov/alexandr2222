import { VisibilityManager } from "../shared/VisibilityManager";
import { ReasonCard } from "../ReasonCard/ReasonCard";
import contentStyles from "../../styles/contentStyles.module.css";
import styles from "./ReasonCards.module.css";

export const ReasonCards = ({ children, reasonCards, renderCard, title, titleEmpty }) => {
  const cardRenderer = renderCard || (typeof children === "function" ? children : null);

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
            if (cardRenderer) {
              return cardRenderer({ card, index, key: index });
            }
            return <ReasonCard key={index} card={card} index={index} />;
          })}
        </VisibilityManager>
      </div>
    </section>
  );
};
