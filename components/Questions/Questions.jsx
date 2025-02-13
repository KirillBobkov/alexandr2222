import React, { useState } from "react";

import styles from "./Questions.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import { questionsContent } from "../../content/questions.js";
import { LineAnimation } from "../LineAnomation/LineAnimation.jsx";

export const Questions = () => {
  return (
    <LineAnimation>
      <div>
        <VisibilityManager className={`${styles.container}`} id="faq">
          <h2 className={styles.question__main_title}>
            <span className={styles.title_empty}> Вопросы и </span> ответы
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
