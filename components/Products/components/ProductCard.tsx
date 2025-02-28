import React from "react";
import styles from "../styles/ProductGrid.module.css";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Link prefetch={false} href={product.href} className={styles.card + " " + (loaded ? styles.loaded : "")}>
      <Image
        src={product.image}
        alt={product.title}
        className={styles.cardImage}
        onLoad={() => setLoaded(true)}
      />
      <div 
  
      className={`${styles.button}`}
    >
      <span className={styles.text}>{product.title}</span>
      <svg 
        className={styles.arrow} 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M4 12H20M20 12L14 6M20 12L14 18" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
      <div className={styles.svgWrapper}>
        <svg
          className={styles.svg}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="#ffd046"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
};
