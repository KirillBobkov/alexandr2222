import { memo } from 'react';
import styles from './LineAnimation.module.css';

export const LineAnimation = memo(({ children }) => {
    return (
    <section style={{ position: 'relative' }}>
    <div className={styles.line_animation}>
    <div className={styles.line_area}></div>
    <div className={styles.line_area}></div>
    <div className={styles.line_area}></div>
    <div className={styles.line_area}></div>
    <div className={styles.line_area}></div>
    <div className={styles.line_area}></div>
    <div className={styles.line_area}></div>
    <div className={styles.line_area}></div>
    </div>
    {children}
    </section>)
})

