import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './PurchaseSuccessWidget.module.css';

export const PurchaseSuccessWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Проверяем наличие параметра paid=true в URL и что мы на нужной странице
    if (router.query.paid === '1' && router.pathname === '/nonverbal-programming') {
      setIsVisible(true);
    }
  }, [router.query, router.pathname]);

  const handleClose = () => {
    setIsVisible(false);
    // Удаляем параметр из URL
    const newQuery = { ...router.query };
    delete newQuery.paid;
    router.replace({
      pathname: router.pathname,
      query: newQuery
    }, undefined, { shallow: true });
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.widget}>
        <div className={styles.content}>
          <div className={styles.icon}>
            ✓
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Спасибо за покупку!</h3>
            <p className={styles.subtitle}>Заказ успешно оплачен</p>
            <p className={styles.description}>Ожидайте материалы курса на почту</p>
          </div>
        </div>
        <button 
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Закрыть"
        >
          ×
        </button>
      </div>
    </div>
  );
}; 