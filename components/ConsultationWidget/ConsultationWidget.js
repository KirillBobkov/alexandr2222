import styles from './ConsultationWidget.module.css';
import { Button } from '../shared/Button/Button';
import { VisibilityManager } from '../shared/VisibilityManager';
export const ConsultationWidget = ({ href }) => {
  return (
    <VisibilityManager className={styles.consultationWidget}>
      <div className={styles.header}>
        <h3 className={styles.title}>
        Бесплатная консультация по вашему вопросу
        </h3>
      </div>
      <Button href={href} status="Записаться" />
    </VisibilityManager>
  );
}; 