import React from 'react';
import styles from '../styles/ProductGrid.module.css';
import Image from 'next/image';

interface ProductCardProps {
  product: any;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={styles.card} onClick={onClick}>
      <Image
        src={product.image} 
        alt={product.title} 
        className={styles.cardImage + ' ' + (loaded ? styles.loaded : '')}
        onLoad={() => setLoaded(true)}
      />
      <h3 className={styles.title}>{product.title}  →</h3>
      <svg className={styles.svg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#FF7425" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
  );
};