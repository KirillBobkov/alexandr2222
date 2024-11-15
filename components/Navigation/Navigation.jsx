import React, { useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../public/images/logo.jpg";
import Image from "next/image.js";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  return (
    <>
    <header className={`${styles.header} ${isOpen ? styles.header_opened : ''}`}>
      <Image
        src={logo}
        alt=""
        className={styles.header__logo} id="logo"
      />
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.navigation__item}>
            <a href="#portfolio">Кейсы</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#otzyvy">Отзывы</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#about">Обо мне</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#contacts">Контакты</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#projects">Проекты</a>
          </li>
        </ul>
      </nav>

      <div className={styles.time}>
        Вт.–Пт. — 15:00–17:00
        <br />
        Сб.–Пн. — Выходной
      </div>
      <div>
      <a className={`${styles.button} ${styles.tBtn}`} href="">
                            БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                        </a>
      </div>
    </header>
        <button className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`} onClick={handleClick}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
    </button>
    </>
  );
};

export default Navigation;
