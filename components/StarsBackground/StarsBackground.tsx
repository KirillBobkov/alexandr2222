import { useMemo } from "react";
import styles from "./StarsBackground.module.css";

const TILE_SIZE = 2000;
const TILE_OFFSETS = [
  { x: 0, y: 0 },
  { x: 0, y: -TILE_SIZE },
  { x: TILE_SIZE, y: 0 },
  { x: TILE_SIZE, y: -TILE_SIZE },
];

function generateBoxShadow(count: number, max = 2000) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * max);
    const y = Math.floor(Math.random() * max);
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(", ");
}

export default function StarsBackground() {
  const smallStars = useMemo(() => generateBoxShadow(300, TILE_SIZE), []);
  const mediumStars = useMemo(() => generateBoxShadow(100, TILE_SIZE), []);
  const bigStars = useMemo(() => generateBoxShadow(50, TILE_SIZE), []);

  const renderLayer = (boxShadow: string, sizeClass: string) =>
    TILE_OFFSETS.map((offset, index) => (
      <div
        key={`${sizeClass}-${index}`}
        className={`${styles.stars} ${sizeClass}`}
        style={{
          boxShadow,
          left: `${offset.x}px`,
          top: `${offset.y}px`,
        }}
      />
    ));

  return (
    <div className={styles["stars-root"]}>
      {renderLayer(smallStars, styles["stars-small"])}
      {renderLayer(mediumStars, styles["stars-medium"])}
      {renderLayer(bigStars, styles["stars-big"])}
    </div>
  );
}
