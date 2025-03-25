import React, { useRef, useState } from "react";
import styles from "./Button.module.css";
import { VisibilityManager } from "../VisibilityManager";
import { useRouter } from "next/router";
import Link from "next/link";

export const Button = ({
  isSubmitted = false,
  disabled = false,
  status,
  href = "",
  className = "",
}) => {
  const touchStartX = useRef(0);
  const [progress, setProgress] = useState(20); // Процент заполнения кнопки
  const router = useRouter();

  // Обработчики для свайпа на мобильных устройствах
  const handleTouchStart = (e) => {
    // e.preventDefault();
    touchStartX.current = e.touches[0].clientX;
    setProgress(20); // Сброс прогресса
  };

  const handleTouchMove = (e) => {
    // e.preventDefault();
    const touchEndX = e.touches[0].clientX;
    const distance = Math.max(0, touchEndX - touchStartX.current); // Расстояние свайпа
    const buttonWidth = e.target.offsetWidth * 0.8; // Ширина кнопки
    const swipeProgress = Math.min((distance / buttonWidth) * 100, 100); // Рассчитать процент
    setProgress(20 + swipeProgress); // Установить прогресс
  };

  const handleTouchEnd = (e) => {
    // e.preventDefault();
    console.log("handleTouchEnd", progress);
    if (progress >= 70) {
      // Если прогресс достиг 100%, выполнить действие
      if (href)
        router.push(
          {
            pathname: href.pathname,
            hash: href.hash,
          },
          undefined
        );
      setProgress(20); // Сброс прогресса
    } else {
      setProgress(20); // Сброс прогресса, если не достигнут 100%
    }
  };

  return (
    <VisibilityManager
      as="div"
      className={`${styles.button} ${className} ${
        isSubmitted ? styles.success : ""
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        "--progress-width": `${progress}%`, // Динамическая ширина прогресса
      }}
    >
      <Link
        prefetch={false}
        href={(href.pathname ?? router.pathname) + (href.hash || '')}
        scroll={false}
        className={`${styles.inner}`}
      >
        {status}
      </Link>
    </VisibilityManager>
  );
};
