import styles from './SearchWidget.module.css';
import { VisibilityManager } from '../shared/VisibilityManager';
export const SearchWidget = ({ searchQuery, onSearchChange, resultsCount }) => {
  return (
    <VisibilityManager className={styles.searchWidget}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <span className={styles.textSymbol}>//</span> Поиск по статьям
        </h3>
      </div>

      <input
        type="text"
        placeholder="Введите название"
        value={searchQuery}
        onChange={onSearchChange}
        className={styles.searchInput}
        autoComplete="off"
      />
      <div className={styles.searchResults}>
        Найдено статей: {resultsCount}
      </div>
    </VisibilityManager>
  );
}; 