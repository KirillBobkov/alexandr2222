import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { OrderForm } from "../shared/OrderForm/OrderForm";
import styles from "./TarifModal.module.css";

interface TarifModalProps {
  card: any;
  onClose: () => void;
  isOpen: boolean;
}

export const TarifModal = ({
  card,
  onClose,
  isOpen,
}: TarifModalProps) => {
  const [closing, setClosing] = useState(false);

  // Блокировка скролла body при открытии модального окна
  useEffect(() => {
    if (isOpen) {
      // Сохраняем текущее значение overflow для восстановления
      const originalOverflow = document.body.style.overflow;
      
      // Блокируем скролл
      document.body.style.overflow = 'hidden';
      
      // Очищаем при закрытии или размонтировании
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

  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

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

  // Рендерим модальное окно в корне документа через Portal
  // Проверяем, что мы в браузере (не SSR)
  if (typeof window === 'undefined') return null;
  
  return createPortal(modalContent, document.body);
}; 