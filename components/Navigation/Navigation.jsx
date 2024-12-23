import React, { useCallback, useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../public/images/logo.webp";
import Image from "next/image.js";
import Link from "next/link";
import { products } from "../Products/data/products";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, path) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header
        className={`${styles.header} ${isOpen ? styles.header_opened : ""}`}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src={logo} alt="" className={styles.header__logo} id="logo" />
          <p className={styles.logo__title}>
            <span className={styles.logo__title_colored}>ИN</span>TEGRAAL
          </p>
        </div>

        <nav>
          <ul className={styles.navigation}>
            {navigationTree.map((item, i) => {
              return (
                <Dropdown
                  key={i}
                  text={item.parent.value}
                  href={item.parent.path}
                  childs={item.childs}
                  onClick={handleClick}
                />
              );
            })}
          </ul>
        </nav>
      </header>
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </button>
    </div>
  );
};

const Dropdown = ({ text, href, childs, onClick }) => {
  const [hoverOpened, setHoverOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    setHoverOpened(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverOpened(false);
  }, []);

  const props = isMobile ? {
  } : {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  return (
    <li
      {...props}
      className={styles.navigation__item}
    >
      <Link
        prefetch={false}
        style={{
          height: "100%",
          display: "block",
        }}
        href={href}
        scroll={false}
        onClick={(e) => onClick(e, href)}
      >
        {text}{" "}
        {childs ? (
          <span className={styles.symbol}>
            <svg
              version="1.1"
              width="10"
              height="10"
              fill="#fff"
              id="Capa_1"
              x="50px"
              y="0px"
              viewBox="0 0 123.97 123.97"
              xmlSpace="preserve"
            >
              <g>
                <path d="M51.802,96.062c2.801,2.801,6.5,4.2,10.2,4.2s7.4-1.399,10.2-4.2l47.3-47.3c5.5-5.5,6.101-14.6,0.8-20.3 c-5.6-6.1-15.1-6.3-20.899-0.5l-30.4,30.3c-3.899,3.9-10.2,3.9-14.1,0l-30.3-30.3c-5.801-5.8-15.301-5.7-20.9,0.5 c-5.3,5.7-4.8,14.8,0.8,20.3L51.802,96.062z" />
              </g>
            </svg>
          </span>
        ) : (
          ""
        )}
      </Link>
      {childs ? (
        <div
          className={
            styles.dropdown + " " + (hoverOpened ? styles.visible : "")
          }
        >
          {childs.map((child) => {
            return (
              <Link
                prefetch={false}
                href={child.path}
                key={child.path}
                onClick={(e) => onClick(e, child.path)}
                className={styles.dropdownItem}
                scroll={false}
              >
                {child.value}
              </Link>
            );
          })}
        </div>
      ) : null}
    </li>
  );
};

export const navigationTree = [
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
    }),
  },
  {
    parent: {
      path: "/#about",
      value: "Обо мне",
    },
  },
  {
    parent: {
      path: "/#reviews",
      value: "Отзывы",
    },
  },
  {
    parent: {
      path: "/#faq",
      value: "Вопросы и ответы",
    },
  },
];
