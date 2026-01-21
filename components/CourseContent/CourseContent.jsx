import styles from './CourseContent.module.css';
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { Button } from "../shared/Button/Button";
import { ReasonCard } from "../ReasonCard/ReasonCard";

export const CourseContent = () => {
  const courseItems = [
    { title: 'Вступительный урок', badgeText: 'Знакомство с курсом' },
    { title: 'Убираем суету', badgeText: '1 прием' },
    { title: 'Отключаем стыд', badgeText: '2 прием' },
    { title: 'Отпускаем обиды', badgeText: '3 прием' },
    { title: 'Нивелируем гнев', badgeText: '4 прием' },
    { title: 'Гасим похоть', badgeText: '5 прием' },
    { title: 'Сдерживаем смех', badgeText: '6 прием' },
    { title: 'Сбрасываем стресс', badgeText: '7 прием' },
    { title: 'Нейтрализуем тревожность', badgeText: '8 прием' },
    { title: 'Отбиваемся от уныния', badgeText: '9 прием' },
    { title: 'Отбрасываем сомнения', badgeText: '10 прием' },
    { title: 'Отключаем страх', badgeText: '11 прием' },
    { title: 'Избавляемся от раздражительности', badgeText: '12 прием' },
    { title: 'Включаем режим антистресс+концентрация', badgeText: '13 прием' },
    { title: 'Активируем терпение', badgeText: '14 прием' },
    { title: 'Используем техники незаметно', badgeText: 'Заключительный урок' }
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
          <div
            className={styles.tree}
            role="tree"
            aria-label="Программа курса"
          >
            {courseItems.map((item, index) => {
              const gridColumns = 3;
              const row = Math.floor(index / gridColumns);
              const positionInRow = index % gridColumns;
              const isEvenRow = row % 2 === 0;
              const column = isEvenRow
                ? positionInRow
                : gridColumns - 1 - positionInRow;
              const hasNext = index < courseItems.length - 1;
              const nextRow = hasNext
                ? Math.floor((index + 1) / gridColumns)
                : null;
              const nextPositionInRow = hasNext ? (index + 1) % gridColumns : null;
              const nextIsEvenRow = hasNext ? nextRow % 2 === 0 : null;
              const nextColumn = hasNext
                ? nextIsEvenRow
                  ? nextPositionInRow
                  : gridColumns - 1 - nextPositionInRow
                : null;
              const direction = hasNext
                ? nextRow === row
                  ? nextColumn > column
                    ? 'right'
                    : 'left'
                  : 'down'
                : null;
              const badgeText = item.badgeText;
              const isDown = direction === 'down';
              const directionClass =
                direction === 'right'
                  ? styles.directionRight
                  : direction === 'left'
                    ? styles.directionLeft
                    : isDown
                      ? column === 0
                        ? styles.directionDownLeft
                        : styles.directionDownRight
                      : '';

              return (
                <div
                  key={`${item.title}-${index}`}
                  className={`${styles.nodeCell} ${directionClass}`}
                  style={{ gridRow: row + 1, gridColumn: column + 1 }}
                  role="treeitem"
                  aria-label={item.title}
                >
                  {direction ? (
                    <span
                      className={`${styles.connector} ${
                        direction === 'right'
                          ? styles.connectorRight
                          : direction === 'left'
                            ? styles.connectorLeft
                            : styles.connectorDown
                      }`}
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className={styles.nodeCardWrap}>
                    <ReasonCard
                      card={{ title: item.title }}
                      index={index}
                      badgeText={badgeText}
                      className={styles.courseCard}
                    />
                  </div>
                </div>
              );
            })}
          </div>
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