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
        <h3 className={styles.title}>{product.title}</h3>
    </div>
  );
};