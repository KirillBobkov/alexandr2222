import React from "react";
import styles from "./styles.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import { LineAnimation } from "../LineAnimation/LineAnimation";

export const InnerQuestions = ({
  title,
  subtitle,
  description,
  questions,
}) => {
  return (
    <LineAnimation>
      <div className={styles.container}>
        <div className={styles.block}>
          <VisibilityManager
            as="h2"
            className={contentStyles.title}
            style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          >
            <span>{title} </span>
            <span className={contentStyles.title_empty}>{subtitle}</span>
          </VisibilityManager>

          <VisibilityManager as="ul" className={styles.gridContainer}>
            {questions.map((question, index) => (
              <QuestionItem key={index} title={question} />
            ))}
          </VisibilityManager>

          <VisibilityManager
            as="p"
            className={styles.description}
            style={{ maxWidth: 700 }}
          >
            {description}
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

