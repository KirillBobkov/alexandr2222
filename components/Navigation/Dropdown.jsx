import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navigation.module.css';

export const Dropdown = ({ text, href, childs, onClick, isActive, DropdownArrow }) => {
  const [hoverOpened, setHoverOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = useCallback(() => setHoverOpened(true), []);
  const handleMouseLeave = useCallback(() => setHoverOpened(false), []);

  const mouseEvents = isMobile ? {} : {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <li
      {...mouseEvents}
      className={`${styles.navigation__item} ${isActive ? styles.active : ''}`}
    >
      <Link
        prefetch={false}
        className={isActive ? styles.active : ''}
        style={{ height: "100%", display: "block" }}
        href={href}
        scroll={false}
        onClick={(e) => onClick(e, href)}
      >
        {text}
        {' '}
        {childs && <DropdownArrow />}
      </Link>

      {childs && (
        <div className={`${styles.dropdown} ${hoverOpened ? styles.visible : ''}`}>
          {childs.map((child) => (
            <Link
              key={child.path}
              prefetch={false}
              href={child.path}
              onClick={(e) => onClick(e, child.path)}
              className={`${styles.dropdownItem} ${router.pathname === child.path ? styles.active : ''}`}
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