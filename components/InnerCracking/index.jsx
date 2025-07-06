import React from "react";
import styles from "./InnerCracking.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { LineAnimation } from "../LineAnimation/LineAnimation";

export const InnerCracking = () => {
  const challenges = [
    "вы теряете энергию",
    "теряется ясность",
    "появляются ссоры, усталость, тревога",
    "тело слабеет",
    "деньги приходят, но не радуют",
    "в зеркале — не вы",
  ];

  return (
    <LineAnimation>
      <div className={styles.container}>
        <div className={styles.block}>
          <VisibilityManager
            as="h2"
            side="left"
            className={contentStyles.title}
            style={{marginLeft: 0, marginRight: 0}}
          >
            <span>Почему жизнь начинает </span>
            <span className={contentStyles.title_empty}>
              трещать по швам?
            </span>
          </VisibilityManager>

          <VisibilityManager>
            <p className={styles.paragraph} style={{ maxWidth: 700 }}>
            Потому что изначально вам был дан ресурс, живая сила — как знак доверия от самой Вселенной. Когда вы идёте по своему пути, она поддерживает, питает, направляет. Но если свернуть и начать жить не своей жизнью, а пытаться угодить чужим ожиданиям, гнаться за иллюзиями, то эта поддержка начинает ускользать.
            </p>
          </VisibilityManager>

          <VisibilityManager as="ul" className={styles.gridContainer}>
            {challenges.map((challenge, index) => (
              <ChallengeItem key={index} title={challenge} />
            ))}
          </VisibilityManager>

          <VisibilityManager>
            <p className={styles.paragraph} style={{ maxWidth: 700 }}>
              И всё вокруг словно гаснет. Не потому, что кто-то наказывает. А потому, что вы отдаляетесь от себя.
            </p>
          </VisibilityManager>

          <VisibilityManager>
            <p className={styles.paragraph} style={{ maxWidth: 700 }}>
              Если продолжать так жить, можно остаться у разбитого корыта — в одиночестве, усталости, с болью внутри.
            </p>
          </VisibilityManager>

          <VisibilityManager>
            <p className={styles.paragraph} style={{ maxWidth: 700 }}>
              Потому что сила, которая была дана вам, будет передана другому — тому, кто готов её понести. 
              Кто идёт честно, глубоко, по-настоящему.
            </p>
          </VisibilityManager>

          <VisibilityManager>
            <p className={styles.paragraph_accent} style={{ maxWidth: 700 }}>
              Но если вы читаете эти строки — у вас ещё есть выбор. Всё можно вернуть. 
              Только для этого нужно решиться: заглянуть внутрь и вспомнить, кто вы.
            </p>
          </VisibilityManager>
        </div>
      </div>
    </LineAnimation>
  );
};

export const ChallengeItem = ({ title }) => {
  return title ? (
    <li className={styles.textBlock + ' ' + styles.item}>
      <h3 className={contentStyles.title_small}>
        <span className={contentStyles.textSymbol}>// </span>
        {title}
      </h3>
    </li>
  ) : null;
}; 