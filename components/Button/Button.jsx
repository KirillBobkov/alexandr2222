import React, { useRef, useState } from "react";
import styles from "./Button.module.css";
import { VisibilityManager } from "../VisibilityManager";
import { useRouter } from "next/router";

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

  // Определить, мобильное устройство или нет
  const isMobile = () => {
    return typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  };

  // Обработчики для свайпа на мобильных устройствах
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setProgress(20); // Сброс прогресса
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const distance = Math.max(0, touchEndX - touchStartX.current); // Расстояние свайпа
    const buttonWidth = e.target.offsetWidth * 0.8; // Ширина кнопки
    const swipeProgress = Math.min((distance / buttonWidth) * 100, 100); // Рассчитать процент
    setProgress(20 + swipeProgress); // Установить прогресс
  };

  const handleTouchEnd = () => {
    if (progress >= 70) {
      // Если прогресс достиг 100%, выполнить действие
      if (href) router.push(href, undefined, { shallow: true });
      setProgress(20); // Сброс прогресса
    } else {
      setProgress(20); // Сброс прогресса, если не достигнут 100%
    }
  };

  return (
    <VisibilityManager
      as={href ? "a" : "button"}
      href={href}
      disabled={disabled}
      className={`${styles.button} ${!isMobile() ? styles.hover : ''} ${className} ${
        isSubmitted ? styles.success : ""
      }`}
      onClick={(e) => {
        if (href) {
          e.preventDefault();
        }
        !isMobile() && href && router.push(href, undefined, { shallow: true });
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        "--progress-width": `${progress}%`, // Динамическая ширина прогресса
      }}
    >
      {status}
    </VisibilityManager>
  );
};
