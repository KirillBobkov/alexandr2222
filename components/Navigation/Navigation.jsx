import React, { useState } from "react";
import styles from "./Navigation.module.css";
import logoLight from "../../images/logo.webp";
import logoDark from "../../images/logo_dark.webp";
import Image from "next/image.js";
import { useRouter } from 'next/router';
import { Dropdown } from './Dropdown';  
import { useTheme } from "../../hooks/useTheme";
import { useMediaQuery } from '../../hooks/useMediaQuery';
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const { theme, changeTheme } = useTheme();

  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div>
      <button 
        className={styles["theme-toggle_mobile"]} 
        onClick={changeTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" fill="currentColor"/>
            <path d="M12 2V4M12 20V22M4 12H2M6.31 6.31L4.9 4.9M17.69 6.31L19.1 4.9M6.31 17.69L4.9 19.1M17.69 17.69L19.1 19.1M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z" fill="currentColor"/>
          </svg>
        )}
      </button>
      
      <header className={`${styles.header} ${isOpen ? styles.header_opened : ""} ${isHomePage ? styles.header_home : ""}`}>
        <div className={styles["header__logo-container"]}>
          <Image src={(theme === "light" && (isMobile ? true : isHomePage)) ? logoLight : logoDark} alt="Logo" className={styles.header__logo} id="logo" />
          <p className={styles.header__title}>
            <span className={styles["header__title-colored"]}>ИN</span>TEGRAAL
          </p>
        </div>

        <nav style={{ width: "100%" }}>
          <ul className={styles.navigation}>
            {getNavigationTree(router.pathname).map((item) => {
              const isActive = router.pathname === item.parent.path || 
                             (item.childs?.some(child => router.pathname === child.path));
              
              return (
                <Dropdown
                  key={item.parent.path}
                  text={item.parent.value}
                  href={item.parent.path}
                  childs={item.childs}
                  onClick={toggleMenu}
                  isActive={isActive}
                />
              );
            })}
            <li className={styles["theme-toggle"]}>
              <button 
                onClick={changeTheme}
                className={styles["theme-toggle__button"]}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" fill="currentColor"/>
                    <path d="M12 2V4M12 20V22M4 12H2M6.31 6.31L4.9 4.9M17.69 6.31L19.1 4.9M6.31 17.69L4.9 19.1M17.69 17.69L19.1 19.1M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      
      <button
        className={`${styles.burger} ${isOpen ? styles.burger_opened : ""}`}
        onClick={toggleMenu}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className={styles.burger__line} />
        ))}
      </button>
    </div>
  );
};

export const getNavigationTree = (pathname) => [
  {
    parent: {
      path: "/",
      value: "Главная",
    },
  },
  {
    parent: {
      path: "/about-me",
      value: "Обо мне",
    },
  },
  // {
  //   parent: {
  //     path: "/#programs",
  //     value: "Программы",
  //   },
  //   childs: products.map((p) => {
  //     return {
  //       path: p.href,
  //       value: p.title,
  //     };
  //   }).filter(value => !value.path.includes("ceremony")),
  // },
  {
    parent: {
      path: "/ceremony",
      value: "Мухоморный ретрит",
    },
    childs: [
      {
        path: "/ceremony#reviews",
        value: "Отзывы",
      },
      {
        path: "/ceremony#faq",
        value: "Вопросы и ответы",
      },
    ],
  },
  {
    parent: {
      path: "/neurotroubleshutting",
      value: "Нейротраблшуттинг",
    },
    childs: [
      {
        path: "/neurotroubleshutting#programs",
        value: "Программы",
      },
      {
        path: "/neurotroubleshutting#reviews",
        value: "Отзывы",
      },
      {
        path: "/neurotroubleshutting#faq",
        value: "Вопросы и ответы",
      },
    ],
  },
  { 
    parent: {
      path: "/blog",
      value: "Блог",
    },
  },
].filter(Boolean);
