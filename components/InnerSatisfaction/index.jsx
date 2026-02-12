import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import styles from "./InnerSatisfaction.module.css";

export const InnerSatisfaction = ({
  animation = false,
  description,
  emptyTitle = true,
  order = 1,
  titlePrefix = "",
  titleStyles = {},
  titleSuffix = "",
}) => {
  const content = (
    <div className={styles.block}>
      {titlePrefix && <VisibilityManager
        as="h2"
        side="left"
        className={`${contentStyles.title} ${styles.title}`}
        style={{ marginLeft: 0, marginRight: 0, marginBottom: 0, ...titleStyles }}
      >
        {order === 1 ? `${titlePrefix} ` : null}
        {titleSuffix}
        {order === 2 ? ` ${titlePrefix}` : null}
      </VisibilityManager>}

      <VisibilityManager>
        <p className={styles.paragraph} style={{ maxWidth: 700 }}>
          {description}
        </p>
      </VisibilityManager>
    </div>
  );

  return <div className={styles.container}>{content}</div>;
};
