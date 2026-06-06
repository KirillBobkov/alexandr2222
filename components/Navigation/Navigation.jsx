import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Dropdown } from "./Dropdown";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useTheme();
  const isHomePage = router.pathname === "/";
  useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header
        className={`${styles.header} ${
          isOpen ? styles.header_opened : ""
        } ${isHomePage ? styles.header_home : ""}`}
      >
        <div className={styles["header__logo-container"]}>
          <p className={styles.header__title}>ИNTEGRAAL</p>
        </div>

        <nav style={{ width: "100%" }}>
          <ul className={styles.navigation}>
            {NAVIGATION_TREE.map((item) => {
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

const NAVIGATION_TREE = [
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
  },
  {
    parent: {
      path: "/neurotroubleshutting",
      value: "Направленная медитация",
    },
  },
  {
    parent: {
      path: "/blog",
      value: "Блог",
    },
  },
];
