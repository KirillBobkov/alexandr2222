import styles from './ReasonCards.module.css';
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { LineAnimation } from "../LineAnomation/LineAnimation";

export const ReasonCards = () => {
  const reasonCards = [
    {
      title: "87% людей не умеют управлять своими эмоциями",
      description: "По разным оценкам, до 87% людей теряют энергию, фокус и ресурсы из-за неконтролируемых эмоций.\nСтрах, тревожность, раздражение, обида, суета — это не \"черты характера\", а состояния, с которыми можно работать.\nНа курсе вы узнаете, как управлять своим внутренним миром с помощью тела, без слов, долгих разборов и терапии."
    },
    {
      title: "Это удобно.",
      description: "Упражнения из курса можно выполнять в транспорте, перед встречей, в конфликте, в момент паники.\n\nЭто позволяет встроить практику даже в плотный график, без перегрузки и выгорания."
    },
    {
      title: "Это эффективно и недорого",
      description: "Тысячи рублей тратятся на попытки \"разобраться\" с собой через консультации и курсы.\nМетодика НП — это инструмент, с которым вы сами отключаете негатив и включаете ресурс.\nБез лишних слов. Без привязки к специалисту. Без зависимости от внешней помощи."
    },
    {
      title: "Мгновенный результат",
      description: "Это не «мотивационные разговоры» и не теория.\nПриёмы из курса дают эффект сразу: вы почувствуете, как уходит голод, снижается раздражение или включается спокойствие."
    },
    {
      title: "Поддержка есть, если потребуется",
      description: "Базовый курс — полностью самостоятельный.\nНо если нужно, вы можете выбрать тариф с сопровождением: я лично доведу вас до результата и помогу внедрить практику в повседневную жизнь."
    }
  ];

  return (
    <LineAnimation>
      <section className={styles.container}>
        <div className={styles.content}>
          <VisibilityManager
            as="h2"
            side="left"
            className={contentStyles.title}
            style={{ marginLeft: 0, marginRight: 0, marginBottom: 60 }}
          >
            <span>
              <span className={contentStyles.title_empty}>Почему вам нужен</span>
              <span className={contentStyles.title_accent}> этот курс</span>
            </span>
          </VisibilityManager>
          
          <VisibilityManager className={styles.cardsGrid}>
            {reasonCards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            ))}
          </VisibilityManager>
        </div>
      </section>
    </LineAnimation>
  );
}; 