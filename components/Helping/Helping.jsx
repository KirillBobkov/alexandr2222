import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import point from "../../images/point.webp";
import styles from "./Helping.module.css";

export const Helping = ({ blocks, href, title = "Я помогу,", titleEmpty = " если вы" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <VisibilityManager
          as="h2"
          side="left"
          style={{ marginLeft: "0px", marginBottom: "0px" }}
          className={`${contentStyles.title} ${styles.title}`}
        >
          {title}
          {titleEmpty}
        </VisibilityManager>
        <div className={styles["grid-container"]}>
          {blocks.map((block) => (
            <VisibilityManager key={block.id} className={styles[block.className]}>
              <TextBlock desc={block.desc} title={block.title} />
            </VisibilityManager>
          ))}
        </div>
      </div>
    </div>
  );
};

const TextBlock = ({ desc, title }) => {
  return (
    <div className={styles.textBlock}>
      {title ? (
        <h3 className={styles.textTitle}>
          <img src={point.src} alt="" className={styles.textSymbol} />
          {"  "}
          {title}
        </h3>
      ) : null}
      <p className={styles.textDescription}>{desc}</p>
    </div>
  );
};
