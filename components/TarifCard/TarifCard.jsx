import { useState } from 'react';
import { TarifModal } from './TarifModal';
import styles from './TarifCard.module.css';

export const TarifCard = ({ card, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`${styles.card}`}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{card.title}</h3>
        </div>
        
        <div className={styles.cardContent}>
          <ul className={styles.featuresList}>
            {card.features.map((feature, idx) => (
              <li key={idx} className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className={styles.priceSection}>
            <div className={styles.price}>{card.price}</div>
          </div>
          
          <p className={styles.description}>{card.description}</p>
          
          <button 
            className={`${styles.buyButton}`}
            onClick={handleOpenModal}
          >
            Выбрать тариф
          </button>
        </div>
      </div>
      
      <TarifModal
        card={card}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}; 