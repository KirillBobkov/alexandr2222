import styles from './CourseContent.module.css';
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { LineAnimation } from "../LineAnimation/LineAnimation";
import { Button } from "../shared/Button/Button";

export const CourseContent = () => {
  const courseItems = [
    'Вступительный урок',
    '1 приём: убираем суету',
    '2 приём: отключаем стыд',
    '3 приём: отпускаем обиды',
    '4 приём: нивелируем гнев',
    '5 приём: гасим похоть',
    '6 приём: сдерживаем смех',
    '7 приём: сбрасываем стресс',
    '8 приём: нейтрализуем тревожность',
    '9 приём: отбиваемся от уныния',
    '10 приём: отбрасываем сомнения',
    '11 приём: отключаем страх',
    '12 приём: избавляемся от раздражительности',
    '13 приём: включаем режим антистресс+концентрация',
    '14 приём: активируем терпение',
    'Заключительный урок: используем техники незаметно'
  ];

  return (

    <section className={styles.container}>
      <div className={styles.content}>
        <VisibilityManager
          as="h2"
          side="left"
          className={contentStyles.title + " " + styles.title}
          style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        >
          Программа курса
        </VisibilityManager>
        
        <VisibilityManager className={styles.listContainer}>
          <div className={styles.badge}>
            <span className={styles.badgeNumber}>16</span>
            <span className={styles.badgeText}>видеоуроков</span>
          </div>
          
          <ul className={styles.list}>
            {courseItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                <span className={styles.itemText}>{item}</span>
              </li>
            ))}
          </ul>
        </VisibilityManager>
        <Button
          className={contentStyles.message}
          style={{ alignSelf: 'flex-start' }}
          href={{ pathname: "/nonverbal-programming", hash: "#message" }}
          status="Приобрести курс"
        />
      </div>
    </section>

  );
}; 