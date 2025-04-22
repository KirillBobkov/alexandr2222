import React from "react";
import styles from "./styles.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import { LineAnimation } from "../LineAnomation/LineAnimation";

export const InnerQuestions = () => {
  const questions = [
    "Кто я на самом деле?",
    "Почему не чувствую себя живым?",
    "Почему радость исчезла, хотя внешне всё вроде бы хорошо?",
    "Почему отношения не приносят тепла?",
    "Почему деньги не наполнили мою жизнь смыслом?",
    "Почему внутри пусто, даже когда снаружи всё есть?",
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
        Ваш кризис — это зов. Глубокий, настоящий. Он говорит о том, что пришло время вернуться к самим себе. Не к образу себя, не к роли, а к подлинной сути. Услышать себя, вспомнить, зачем вы здесь — и начать жить осознанно, полно, с ощущением вкуса и правды.
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