import React from "react";
import styles from "./Preview.module.css";
import preview_bg from "../../public/images/preview_bg.png";
import Image from "next/image.js";

export const Preview = () => {
    return (
        <div className={styles.preview}>
            <Image
                src={preview_bg}
                alt="заставка превью"
                className={styles.preview__bg}
            />
            <span className={styles.preview__sign}>ИN</span>
            <h1 className={styles.preview__title}>БЛАГОСЛОВЕННЫЙ ПОРТАЛ МЕЧТЫ</h1>
            <p className={styles.preview__description}>здоровье / деньги / отношения</p>
        </div>
    );
};