import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Dropdown } from "./Dropdown";
import styles from "./Navigation.module.css";
import logoDark from "../../images/logo_dark.webp";
import logoLight from "../../images/logo.webp";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();
  const isHomePage = router.pathname === "/";
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header
        className={`${styles.header} ${
          isOpen ? styles.header_opened : ""
        } ${isHomePage ? styles.header_home : ""}`}
      >
        <div className={styles["header__logo-container"]}>
          <Image
            src={
              theme === "light" && (isMobile || isHomePage)
                ? logoLight
                : logoDark
            }
            alt="Logo"
            className={styles.header__logo}
            id="logo"
          />
          <p className={styles.header__title}>TEGRAAL</p>
        </div>

        <nav style={{ width: "100%" }}>
          <ul className={styles.navigation}>
            {getNavigationTree(router.pathname).map((item) => {
              const isActive =
                router.pathname === item.parent.path ||
                item.childs?.some((child) => router.pathname === child.path);

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
        className={`${styles.burger} ${isOpen ? styles.burger_opened : ""}`}
        onClick={toggleMenu}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className={styles.burger__line} />
        ))}
      </button>
    </>
  );
};

export const getNavigationTree = () => [
  {
    parent: {
      path: "/",
      value: "Главная",
    },
  },
  {
    parent: {
      path: "/ceremony",
      value: "Мухоморный ретрит",
    },
    childs: [
      {
        path: "/ceremony#program",
        value: "Программа",
      },
      {
        path: "/ceremony#reviews",
        value: "Отзывы",
      },
    ],
  },
  {
    parent: {
      path: "/neurotroubleshutting",
      value: "Нейротраблшутинг",
    },
    childs: [
      {
        path: "/neurotroubleshutting#reviews",
        value: "Отзывы",
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
