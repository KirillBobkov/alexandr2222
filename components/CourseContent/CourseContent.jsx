import styles from './CourseContent.module.css';
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { Button } from "../shared/Button/Button";

export const CourseContent = () => {
  const courseItems = [
    'Как мгновенно снимать тревогу, раздражение, обиду и другие состояния',
    'Какие невербальные паттерны в теле запускают нужные эмоции',
    'Как включать ресурсные состояния: концентрацию, терпение, смирение, устойчивость',
    'Как подавлять голод, страх, суету и сомнения — с помощью простых микродвижений',
    'Как использовать приёмы незаметно для окружающих',
    'Почему невербальные сигналы работают быстрее и глубже, чем разговорные методы',
    'Как интегрировать методику в повседневную жизнь'
  ];

  return (

    <section className={styles.container}>
      <div className={styles.content}>
      <VisibilityManager
          as="h2"
          side="left"
          className={contentStyles.title}
          style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        >
          <span>
            <span className={contentStyles.title_empty}>Что узнаем</span>
            <span className={contentStyles.title_accent}> на курсе?</span>
          </span>
        </VisibilityManager>
        
        <VisibilityManager className={styles.listContainer}>
          <div className={styles.badge}>
            <span className={styles.badgeNumber}>12</span>
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