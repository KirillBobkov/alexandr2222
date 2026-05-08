"use client";

import { useEffect, useRef } from "react";
import styles from "./MagicForestPortal.module.css";

const LINES_COUNT = 15;
const RINGS_COUNT = 12;

interface MagicForestPortalProps {
  showRings?: boolean;
}

export const MagicForestPortal = ({ showRings = false }: MagicForestPortalProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const ringsArray = Array.from({ length: RINGS_COUNT });
  const linesArray = Array.from({ length: LINES_COUNT });

  useEffect(() => {
    console.log("MagicForestPortal mounted");

    const backgroundEl = backgroundRef.current;
    const overlayEl = overlayRef.current;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const scrollY = scrollTop;
      const maxScroll = window.innerHeight * 0.5;
      const progress = Math.min(scrollY / maxScroll, 1);

      if (backgroundEl) {
        backgroundEl.style.setProperty("--scroll-progress", progress.toString());
      }
      if (overlayEl) {
        overlayEl.style.opacity = (progress * 0.2).toString();
      }
    };

    // Try multiple scroll targets
    const scrollTargets = [
      window,
      document,
      document.documentElement,
      document.body,
    ];

    console.log("Adding scroll listeners to multiple targets");
    scrollTargets.forEach(target => {
      target.addEventListener("scroll", updateProgress);
    });

    updateProgress(); // Initial call

    return () => {
      console.log("Removing scroll listeners");
      scrollTargets.forEach(target => {
        target.removeEventListener("scroll", updateProgress);
      });
    };
  }, []);

  return (
    <>
      {/* Fixed background - always shown */}
      <div className={styles.fixedBackground}>
        <div ref={backgroundRef} className={styles.background} />
        {/* Dark overlay on scroll */}
        <div ref={overlayRef} className={styles.scrollOverlay} />
        <div className={styles.linesLayer}>
          {linesArray.map((_, i) => {
            const length = 50 + Math.random() * 50;
            const left = Math.random() * 100;
            const delay = Math.random() * 4000;
            const duration = 15000 + Math.random() * 5000;

            return (
              <span
                key={i}
                className={styles.flyingLine}
                style={{
                  width: `${length}px`,
                  left: `${left}%`,
                  animationDelay: `${delay}ms`,
                  animationDuration: `${duration}ms`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Portal rings - only on Preview page, not fixed */}
      {showRings && (
        <div className={styles.portalWrapper}>
          <svg className={styles.rings} viewBox="0 0 600 600">
            {ringsArray.map((_, i) => {
              const isReverse = i % 3 === 0;
              const glowDelay = -(Math.random() * 6);

              return (
                <g key={i}>
                  <circle
                    className={`${styles.ring} ${isReverse ? styles.ringReverse : ""}`}
                    cx="300"
                    cy="300"
                    r={20 + i * 20}
                  />
                  <circle
                    className={styles.ringGlow}
                    cx="300"
                    cy="300"
                    r={20 + i * 20}
                    style={{ animationDelay: `0s, ${glowDelay}s, 0s` }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      )}
    </>
  );
};

export default MagicForestPortal;
