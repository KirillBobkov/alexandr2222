import React from "react";
import styles from "./styles.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import point from "../../images/point.webp";

export const InnerQuestions = ({
  title,
  subtitle,
  description,
  questions,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <VisibilityManager
          as="h2"
          className={contentStyles.title}
          style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        >
          {title} {subtitle}
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
  );
};

export const QuestionItem = ({ title }) => {
    return title ? (
      <li className={styles.textBlock + ' ' + styles.item}>
        <h3 className={contentStyles.title_small}>
          <img src={point.src} alt="" className={contentStyles.textSymbol} />
          {title}
        </h3>
      </li>
    ) : null;
  };

