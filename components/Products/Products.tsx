import React, { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { ProductModal } from "./components/ProductModal";
import { products } from "./data/products";
import styles from "./styles/ProductGrid.module.css";
import { VisibilityManager } from "../VisibilityManager";

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className={styles.container}id="programs">
      <div className={styles.block}>
        <VisibilityManager as="h2" side="left"  className={styles.blocktitle}>
          Программы
        </VisibilityManager>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => {
                setSelectedProduct(product);
                console.log("click", product);
              }}
            />
          ))}
        </div>
        {
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        }
      </div>
    </div>
  );
}
