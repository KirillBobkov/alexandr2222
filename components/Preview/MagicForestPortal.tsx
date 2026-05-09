"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./MagicForestPortal.module.css";
import secondaryPreview36 from "../../images/secondary_preview_36.webp";

const LINES_COUNT = 15;
const RINGS_COUNT = 12;

export const MagicForestPortal = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const secondaryBgRef = useRef<HTMLDivElement>(null);
  const ringsWrapperRef = useRef<HTMLDivElement>(null);
  const ringsArray = Array.from({ length: RINGS_COUNT });
  const linesArray = Array.from({ length: LINES_COUNT });
  const [forestLoaded, setForestLoaded] = useState(false);

  useEffect(() => {
    console.log("MagicForestPortal mounted");

    const backgroundEl = backgroundRef.current;
    const overlayEl = overlayRef.current;
    const secondaryBgEl = secondaryBgRef.current;
    const ringsWrapperEl = ringsWrapperRef.current;

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
      if (secondaryBgEl) {
        secondaryBgEl.style.opacity = progress.toString();
      }
      if (ringsWrapperEl) {
        // Rings fade out as secondary background fades in
        ringsWrapperEl.style.opacity = (1 - progress).toString();
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

  // Track forest.webp loading
  useEffect(() => {
    const img = new window.Image();
    img.src = "/images/forest.webp";

    const handleLoad = () => {
      setForestLoaded(true);
    };

    img.onload = handleLoad;

    // Fallback: if already cached or loaded
    if (img.complete) {
      handleLoad();
    }

    // Ultimate fallback: show rings after 1 second regardless
    const fallbackTimer = setTimeout(() => {
      setForestLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <>
      {/* Fixed background - always shown */}
      <div className={styles.fixedBackground}>
        <div ref={backgroundRef} className={styles.background} />
        {/* Secondary background that fades in on scroll */}
        <div ref={secondaryBgRef} className={styles.secondaryBackground}>
          <Image
            src={secondaryPreview36}
            alt="secondary background"
            fill
            priority
            className={styles.secondaryBackgroundImage}
          />
        </div>
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

      {/* Portal rings */}
      {forestLoaded && (
        <div ref={ringsWrapperRef} className={styles.portalWrapper}>
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
