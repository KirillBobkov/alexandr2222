import React, { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { products } from './data/products';
import styles from './styles/ProductGrid.module.css';

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div style={{ background: '#ffffff' }}>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct &&(
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
