import Link from 'next/link'
import styles from './LinkButton.module.css'

const LinkButton = ({ href, children, className = '' }) => {
  return (
    <Link 
      href={href} 
      className={`${styles.button} ${className}`}
      prefetch={false}
    >
      <span className={styles.text}>{children}</span>
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
    </Link>
  )
}

export default LinkButton;