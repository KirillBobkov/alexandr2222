import React, { useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../images/logo.webp";
import Image from "next/image.js";
import Link from "next/link";
import { products } from "../../pages/index";
import { useRouter } from 'next/router';
import { Dropdown } from './Dropdown';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div>
      <header className={`${styles.header} ${isOpen ? styles.header_opened : ""}`}>
        <div className={styles.header__logo_container}>
          <Image src={logo} alt="Logo" className={styles.header__logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
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
          </ul>
        </nav>
      </header>
      
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className={styles.burgerLine} />
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
