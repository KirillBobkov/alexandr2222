import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { VisibilityManager } from "../VisibilityManager";
import styles from "./Button.module.css";

export const Button = ({
  disabled = false,
  href = "",
  isSubmitted = false,
  status,
  className = "",
}) => {
  const touchStartX = useRef(0);
  const [progress, setProgress] = useState(20);
  const router = useRouter();

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setProgress(20);
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const distance = Math.max(0, touchEndX - touchStartX.current);
    const buttonWidth = e.target.offsetWidth * 0.8;
    const swipeProgress = Math.min((distance / buttonWidth) * 100, 100);
    setProgress(20 + swipeProgress);
  };

  const handleTouchEnd = () => {
    if (progress >= 70 && href) {
      router.push(
        {
          pathname: href.pathname,
          hash: href.hash,
        },
        undefined,
      );
    }
    setProgress(20);
  };

  return (
    <VisibilityManager
      as="div"
      className={`${styles.button} ${
        progress <= 20 ? styles.pulsing : styles.not_pulsing
      } ${className} ${isSubmitted ? styles.success : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ "--progress-width": `${progress}%` }}
    >
      <Link
        prefetch={false}
        href={(href.pathname ?? router.pathname) + (href.hash || "")}
        scroll={false}
        className={styles.inner}
      >
        {status}
      </Link>
    </VisibilityManager>
  );
};
