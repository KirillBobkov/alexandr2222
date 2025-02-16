import React, { useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../public/images/logo.webp";
import Image from "next/image.js";
import Link from "next/link";
import { products } from "../../pages/index";
import { useRouter } from 'next/router';
import { Dropdown } from './Dropdown';

const DropdownArrow = () => (
  <span className={styles.symbol}>
    <svg
      version="1.1"
      width="10"
      height="10"
      fill="#fff"
      viewBox="0 0 123.97 123.97"
    >
      <path d="M51.802,96.062c2.801,2.801,6.5,4.2,10.2,4.2s7.4-1.399,10.2-4.2l47.3-47.3c5.5-5.5,6.101-14.6,0.8-20.3 c-5.6-6.1-15.1-6.3-20.899-0.5l-30.4,30.3c-3.899,3.9-10.2,3.9-14.1,0l-30.3-30.3c-5.801-5.8-15.301-5.7-20.9,0.5 c-5.3,5.7-4.8,14.8,0.8,20.3L51.802,96.062z" />
    </svg>
  </span>
);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div>
      <header className={`${styles.header} ${isOpen ? styles.header_opened : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src={logo} alt="Logo" className={styles.header__logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
          </p>
        </div>

        <nav>
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
                  DropdownArrow={DropdownArrow}
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
      path: "/#programs",
      value: "Программы",
    },
    childs: products.map((p) => {
      return {
        path: p.href,
        value: p.title,
      };
    }).filter(value => !value.path.includes("ceremony")),
  },
  {
    parent: {
      path: "/ceremony",
      value: "Мухоморный ретрит",
    },
  },
  {
    parent: {
      path: "/neurotrableshutting",
      value: "Нейротраблшуттинг",
    },
  },
  {
    parent: {
      path: "/vegetalism",
      value: "Вегетализм",
    },
  },

  {
    parent: {
      path: "/about-me",
      value: "Обо мне",
    },
  },
  pathname.includes("neurotrableshutting") && {
    parent: {
      path: "/neurotrableshutting#reviews",
      value: "Отзывы",
    },
  },
  pathname.includes("neurotrableshutting") && {
    parent: {
      path: "/neurotrableshutting#faq",
      value: "Вопросы и ответы",
    },
  },
  pathname.includes("ceremony") && {
    parent: {
      path: "/ceremony#reviews",
      value: "Отзывы",
    },
  },
].filter(Boolean);
