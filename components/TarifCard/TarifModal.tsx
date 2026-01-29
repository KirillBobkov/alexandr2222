import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { OrderForm } from "../shared/OrderForm/OrderForm";
import styles from "./TarifModal.module.css";

interface Card {
  price: string;
  title: string;
  tariff: string;
}

interface TarifModalProps {
  card: Card;
  isOpen: boolean;
  onClose: () => void;
}

export const TarifModal = ({ card, isOpen, onClose }: TarifModalProps) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 100);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;
  if (typeof window === "undefined") return null;

  const modalContent = (
    <div
      className={`${styles.overlay} ${!closing ? styles.open : ""}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal}>
        <button onClick={handleClose} className={styles.closeButton}>
          ✕
        </button>

        <div className={styles.modalContent}>
          <div className={styles.formSection}>
            <OrderForm
              price={card.price}
              title={card.title}
              tariff={card.tariff}
              description="Заполните форму для оплаты курса. Материалы будут отправлены на указанную почту в течение 24 часов."
            />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
