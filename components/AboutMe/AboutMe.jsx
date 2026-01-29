import { VisibilityManager } from "../shared/VisibilityManager";
import { Button } from "../shared/Button/Button";
import contentStyles from "../../styles/contentStyles.module.css";
import point from "../../images/point.webp";
import styles from "./AboutMe.module.css";

export const AboutMe = ({
  title,
  titleEmpty,
  items,
  bottomText,
  href,
  buttonStatus,
  order = 1,
}) => {
  return (
    <div className={styles.block}>
      {(title || titleEmpty) && (
        <VisibilityManager
          as="h2"
          side="left"
          className={contentStyles.title}
          style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        >
          {order === 2 ? title : null}
          {titleEmpty}
          {order === 1 ? title : null}
        </VisibilityManager>
      )}

      {items?.length > 0 && (
        <VisibilityManager as="ul" className={styles["grid-container"]}>
          {items.map((item, index) => (
            <TextBlock key={index} title={item.title} />
          ))}
        </VisibilityManager>
      )}

      {bottomText && (
        <VisibilityManager as="p" style={{ maxWidth: 700 }}>
          {bottomText}
        </VisibilityManager>
      )}

      {href && buttonStatus && (
        <Button className={styles.message} href={href} status={buttonStatus} />
      )}
    </div>
  );
};

const TextBlock = ({ title }) => {
  return title ? (
    <li className={`${styles.textBlock} ${styles.item}`}>
      <h3 className={contentStyles.title_small}>
        <img src={point.src} alt="" className={contentStyles.textSymbol} />
        {title}
      </h3>
    </li>
  ) : null;
};
