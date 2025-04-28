import React, { useState } from "react";

import styles from "./Questions.module.css";

import { VisibilityManager } from "../shared/VisibilityManager";
import { LineAnimation } from "../LineAnomation/LineAnimation.jsx";
import contentStyles from "../../styles/contentStyles.module.css";
export const Questions = ({ questionsContent }) => {
  return (
    <LineAnimation>
      <div>
        <VisibilityManager className={`${styles.container}`} id="faq">
          <h2 className={contentStyles.title}>
            <span className={contentStyles.title_empty}> Вопросы и </span> ответы
          </h2>
          <ul>
            {questionsContent.blocks.map((q) => {
              return (
                <Question key={q.title} title={q.title} answer={q.answer} />
              );
            })}
          </ul>
        </VisibilityManager>
      </div>
    </LineAnimation>
  );
};

const Question = ({ title, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <VisibilityManager as="li" className={styles.question}>
      <div
        className={`${styles.question__title} ${isActive ? styles.active : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <h3 itemProp="name">{title}</h3>
        <span>{isActive ? "—" : "+"}</span>
      </div>
      {
        <p
          className={`${styles.question__answer} ${
            isActive ? styles["question__answer--visible"] : ""
          }`}
        >
          <span>{answer}</span>
        </p>
      }
    </VisibilityManager>
  );
};
