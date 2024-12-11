import styles from './LineAnimation.module.css';

export const LineAnimation = ({ children }) => {
    return (
    <section style={{ position: 'relative' }}>
    <div class={styles.line_animation}>
    <div class={styles.line_area}></div>
    <div class={styles.line_area}></div>
    <div class={styles.line_area}></div>
    <div class={styles.line_area}></div>
    <div class={styles.line_area}></div>
    <div class={styles.line_area}></div>
    <div class={styles.line_area}></div>
    <div class={styles.line_area}></div>
    </div>
    <>{children}</>
    </section>)
}

