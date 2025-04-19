import React from "react";
import styles from "./Footer.module.css"; // Import your CSS module
import logoLight from "../../images/logo.webp";
import logoDark from "../../images/logo_dark.webp";
import Image from "next/image";
import { useTheme } from "../../hooks/useTheme";

export function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo__container}>
          <Image className={styles.logo} src={theme === "light" ? logoLight : logoDark} alt="Company Logo" />
          <ul className={styles.social__list}>
            <li>
              <span className={styles.social__link} style={{ position: 'relative', cursor: 'not-allowed' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0718 18C6.77376 18 3.06576 13.6587 2.92773 6.5H5.87574C5.96775 11.9012 8.23177 14.1495 10.1158 14.6732V6.5H12.8879V11.1932C14.7399 10.9832 16.6879 8.88925 17.3359 6.5H20.108C19.6039 9.44262 17.4879 11.5362 15.9599 12.3637C17.4879 13.0175 19.8639 14.8558 20.8479 18H17.8319C17.0639 15.871 15.2839 14.1622 12.8879 13.9187V18H13.0718Z" fill="currentColor"/>
                </svg>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'none'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
                    <path d="M19 5L5 19" stroke="red" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M5 5L19 19" stroke="red" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </span>
            </li>
            <li>
              <a href="https://t.me/chronics44" target="_blank" rel="noopener noreferrer" className={styles.social__link}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.665 3.717L2.93497 10.554C1.72497 11.04 1.73197 11.715 2.71297 12.016L7.26497 13.436L17.797 6.791C18.295 6.488 18.75 6.651 18.376 6.983L9.84297 14.684H9.84097L9.84297 14.685L9.52897 19.377C9.98897 19.377 10.192 19.166 10.45 18.917L12.661 16.767L17.26 20.164C18.108 20.631 18.717 20.391 18.928 19.379L21.947 5.151C22.256 3.912 21.474 3.351 20.665 3.717Z" fill="currentColor"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@alexandrvasilev.ru?_t=ZS-8vOVKf5Isrv&_r=1" target="_blank" rel="noopener noreferrer" className={styles.social__link}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@alexandrvasilev_ru?si=h6JxlRRBXkh8Oxln" target="_blank" rel="noopener noreferrer" className={styles.social__link}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                </svg>
              </a>
            </li>
            <li>
              <span className={styles.social__link} style={{ position: 'relative', cursor: 'not-allowed' }}>
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46.894 23.986c.004 0 .007 0 .011 0 .279 0 .545-.117.734-.322.192-.208.287-.487.262-.769C46.897 11.852 38.154 3.106 27.11 2.1c-.28-.022-.562.069-.77.262-.208.192-.324.463-.321.746C26.193 17.784 28.129 23.781 46.894 23.986zM46.894 26.014c-18.765.205-20.7 6.202-20.874 20.878-.003.283.113.554.321.746.186.171.429.266.679.266.03 0 .061-.001.091-.004 11.044-1.006 19.787-9.751 20.79-20.795.025-.282-.069-.561-.262-.769C47.446 26.128 47.177 26.025 46.894 26.014zM22.823 2.105C11.814 3.14 3.099 11.884 2.1 22.897c-.025.282.069.561.262.769.189.205.456.321.734.321.004 0 .008 0 .012 0 18.703-.215 20.634-6.209 20.81-20.875.003-.283-.114-.555-.322-.747C23.386 2.173 23.105 2.079 22.823 2.105zM3.107 26.013c-.311-.035-.555.113-.746.321-.192.208-.287.487-.262.769.999 11.013 9.715 19.757 20.724 20.792.031.003.063.004.094.004.25 0 .492-.094.678-.265.208-.192.325-.464.322-.747C23.741 32.222 21.811 26.228 3.107 26.013z" fill="currentColor"/>
                </svg>
                {/* Cross overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'none'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
                    <path d="M19 5L5 19" stroke="red" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M5 5L19 19" stroke="red" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </span>
            </li>
          </ul>
          <p className={styles.year}>© {new Date().getFullYear()} Александр "Интеграл" Васильев</p>
        </div>
      </div>
    </footer>
  );
}
