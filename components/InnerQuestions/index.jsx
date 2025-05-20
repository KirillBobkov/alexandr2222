import React from "react";
import styles from "./styles.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import { LineAnimation } from "../LineAnomation/LineAnimation";

export const InnerQuestions = () => {
  const questions = [
    "Почему у других получается, а у меня нет?",
    "Тем ли делом я занимаюсь?",
    "Почему я постоянно разочаровываюсь в людях?",
    "Сколько будут длиться эти страдания?",
    "Из-за чего то, что должно вызывать радость в жизни, становится обузой?",
    "Неужели жизнь действительно не имеет смысла?",
    "Отчего я постоянно хочу уйти из жизни?",
  ];

  return (
    <LineAnimation>
    <div className={styles.container}>
      <div className={styles.block}>
          <VisibilityManager  as="h2" className={contentStyles.title} style={{marginLeft: 0, marginRight: 0 , marginBottom: 0}}>
            <span>Внутренний голос </span>
            <span className={contentStyles.title_empty}>
              всё чаще задаёт вопросы
            </span>
          </VisibilityManager >

        <VisibilityManager as="ul" className={styles.gridContainer}>
          {questions.map((question, index) => (
            <QuestionItem key={index} title={question} />
          ))}
        </VisibilityManager>

        <VisibilityManager as="p" className={styles.description} style={{ maxWidth: 700 }}>
        Это говорит о том, что пришло время основательно разобраться в самом себе. Не в образе себя, не в роли, а именно в подлинной сути.<br /><br />
        Спокойно, без суеты, устранить психотравмы, которые тяжёлым грузом тянут вас вниз, и, в первую очередь, наладить контакт с самим собой, а потом уже со всеми окружающими.
        </VisibilityManager>
      </div>
    </div>
    </LineAnimation>
  );
};

export const QuestionItem = ({ title }) => {
    return title ? (
      <li className={styles.textBlock + ' ' + styles.item}>
        <h3 className={contentStyles.title_small}>
          <span className={contentStyles.textSymbol}>// </span>
          {title}
        </h3>
      </li>
    ) : null;
  }; 