import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

export const Dropdown = ({ text, href, childs, onClick, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop hover handlers
  const handleMouseEnter = useCallback(() => {
    if (!isMobile) setIsOpen(true);
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  // Mobile arrow click handler
  const handleArrowClick = useCallback((e) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen(prev => !prev);
    }
  }, [isMobile]);

  // Link click handler
  const handleLinkClick = useCallback((e, linkHref) => {
    if (isMobile) {
      setIsOpen(false);
    }
    onClick(e, linkHref);
  }, [isMobile, onClick]);

  const mouseEvents = isMobile ? {} : {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <li
      {...mouseEvents}
      className={`${styles.navigation__item} ${isActive ? styles.active : ""}`}
    >
      <Link
        prefetch={false}
        className={styles.navigation__parent_link + ' ' + (isActive ? styles.active : "")}
        style={{ height: "100%", display: "block" }}
        href={href}
        scroll={false}
        onClick={(e) => handleLinkClick(e, href)}
      >
        {text}
        {childs && (
          <span 
            className={styles.symbol} 
            onClick={handleArrowClick}
          >
            <svg
              width="10"
              height="10"
              className={`${styles.svg} ${isOpen ? styles.svg_rotate : ""}`}
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
        )}
      </Link>

      {childs && (
        <div className={`${styles.dropdown} ${isOpen ? styles.visible : ""}`}>
          {childs.map((child) => (
            <Link
              key={child.path}
              prefetch={false}
              href={child.path}
              onClick={(e) => handleLinkClick(e, child.path)}
              className={`${styles.dropdownItem} ${
                router.pathname === child.path ? styles.active : ""
              }`}
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
