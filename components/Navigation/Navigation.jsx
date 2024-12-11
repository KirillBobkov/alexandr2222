import React, { useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../public/images/logo.webp";
import Image from "next/image.js";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div>
    <header className={`${styles.header} ${isOpen ? styles.header_opened : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <Image
        src={logo}
        alt=""
        className={styles.header__logo} id="logo"
      />
      <p className={styles.logo__title}><span className={styles.logo__title_colored}>ИN</span>TEGRAAL</p>
      </div>
     
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.navigation__item}>
            <a href="#reviews" onClick={() => setIsOpen(false)}>Отзывы</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#about" onClick={() => setIsOpen(false)}>Обо мне</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#message" onClick={() => setIsOpen(false)}>Контакты</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#programs" onClick={() => setIsOpen(false)}>Программы</a>
          </li>
        </ul>
      </nav>
    <div></div>
    </header>
        <button className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`} onClick={handleClick}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
    </button>
    </div>
  );
};
