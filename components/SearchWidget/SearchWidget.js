import { VisibilityManager } from "../shared/VisibilityManager";
import styles from "./SearchWidget.module.css";

export const SearchWidget = ({ onSearchChange, resultsCount, searchQuery }) => {
  return (
    <div className={styles.searchWidget}>
      <div className={styles.header}>
        <h3 className={styles.title}>Поиск по статьям</h3>
      </div>

      <input
        type="text"
        placeholder="Введите название"
        value={searchQuery}
        onChange={onSearchChange}
        className={styles.searchInput}
        autoComplete="off"
      />
      <div className={styles.searchResults}>Найдено статей: {resultsCount}</div>
    </div>
  );
};
