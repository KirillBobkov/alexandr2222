import React from 'react';
import styles from '../styles/ProductGrid.module.css';

interface ProductCardProps {
  product: any;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img 
        src={product.image} 
        alt={product.title} 
        className={styles.cardImage}
      />
        <h3 className={styles.title}>{product.title}</h3>
    </div>
  );
};