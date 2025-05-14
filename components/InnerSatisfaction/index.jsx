import React from "react";
import styles from "./InnerSatisfaction.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";

export const InnerSatisfaction = () => {
  return (
      <div className={styles.container}>
        <div className={styles.block}>
          <VisibilityManager
            as="h2"
            side="left"
            className={contentStyles.title}
            style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          >
            <span>ВЕДУ ЛЮДЕЙ   К ИСТИННОМУ «Я» </span>
            <span className={contentStyles.title_empty}>
          И СОЗДАТЕЛЯМ
            </span>
          </VisibilityManager>

          <VisibilityManager>
            <p className={styles.paragraph} style={{ maxWidth: 700 }}>
              Каждый человек подсознательно стремится к двум целям: обрести себя и соединиться с Творцами.
              <br /><br />
              Однако, в вихре амбиций и ответственности деловые люди нередко теряют внутренний ориентир.
              <br /><br />
              Выгорание, утрата смысла, финансовый потолок и проблемы со здоровьем всё чаще становятся спутниками внешнего успеха. Эти вызовы сигнализируют о разрыве с подлинной сутью.
            </p>
          </VisibilityManager>
        </div>
      </div>
  );
};
