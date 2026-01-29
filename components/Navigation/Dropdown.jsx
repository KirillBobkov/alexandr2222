import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

export const Dropdown = ({ childs, href, isActive, onClick, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) setIsOpen(true);
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const handleArrowClick = useCallback(
    (e) => {
      if (isMobile) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }
    },
    [isMobile],
  );

  const handleLinkClick = useCallback(
    (e, linkHref) => {
      if (isMobile) {
        setIsOpen(false);
      }
      onClick(e, linkHref);
    },
    [isMobile, onClick],
  );

  const mouseEvents = isMobile
    ? {}
    : {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      };

  const activeClass = isActive ? styles.navigation__item_active : "";

  return (
    <li
      {...mouseEvents}
      className={`${styles.navigation__item} ${activeClass}`}
    >
      <Link
        prefetch={false}
        className={`${styles["navigation__parent-link"]} ${activeClass}`}
        href={href}
        scroll={false}
        onClick={(e) => handleLinkClick(e, href)}
      >
        <span className={styles["navigation__parent-link-text"]}>{text}</span>
        {childs && (
          <span className={styles.navigation__arrow} onClick={handleArrowClick}>
            <span className={styles["navigation__arrow-container"]}>
              <svg
                width="10"
                height="10"
                className={`${
                  styles["navigation__arrow-icon"]
                } ${isOpen ? styles["navigation__arrow-icon_rotated"] : ""}`}
                viewBox="0 0 10 10"
              >
                <path
                  d="M1 3.5L5 7.5L9 3.5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        )}
      </Link>

      {childs && (
        <div
          className={`${
            styles.dropdown
          } ${isOpen ? styles.dropdown_visible : ""}`}
        >
          {childs.map((child) => (
            <Link
              key={child.path}
              prefetch={false}
              href={child.path}
              onClick={(e) => handleLinkClick(e, child.path)}
              className={`${
                styles.dropdown__item
              } ${router.pathname === child.path ? styles.navigation__item_active : ""}`}
              scroll={false}
            >
              {child.value}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};
