import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { VisibilityManager } from "../shared/VisibilityManager";
import styles from "./SecondaryPreview.module.css";
import forest from "../../images/forest.webp";

export const SecondaryPreview = ({ image, subtext, text, animated = true, overlay = true, bgImage, parallaxMode = false, upTitle = false }) => {
  const [loaded, setLoaded] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [baseBgLoaded, setBaseBgLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Refs for wrapper elements (not Image directly)
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const bgImageWrapperRef = useRef<HTMLDivElement>(null);
  const baseBgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect with useRef for performance
  useEffect(() => {
    if (!parallaxMode) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const scrollY = scrollTop;
      const maxScroll = window.innerHeight * 0.5; // 50vh
      const progress = Math.min(scrollY / maxScroll, 1);

      // Direct DOM manipulation on wrapper divs - no re-renders
      if (bgImageWrapperRef.current) {
        bgImageWrapperRef.current.style.opacity = progress.toString();
      }
      if (bgWrapperRef.current) {
        bgWrapperRef.current.style.opacity = (1 - progress).toString();
      }
      // Forest background fades out too
      if (baseBgRef.current) {
        baseBgRef.current.style.opacity = (1 - progress).toString();
      }
      // Title/content fades out too
      if (contentRef.current) {
        contentRef.current.style.opacity = (1 - progress).toString();
      }
      if (overlayRef.current) {
        overlayRef.current.style.opacity = (progress * 0.1).toString();
      }
    };

    // Try multiple scroll targets (like in MagicForestPortal)
    const scrollTargets = [
      window,
      document,
      document.documentElement,
      document.body,
    ];

    scrollTargets.forEach(target => {
      target.addEventListener("scroll", updateProgress, { passive: true } as any);
    });

    updateProgress(); // Initial call

    return () => {
      scrollTargets.forEach(target => {
        target.removeEventListener("scroll", updateProgress);
      });
    };
  }, [parallaxMode]);

  // Fade in content after images are loaded
  useEffect(() => {
    if (parallaxMode && loaded && baseBgLoaded) {
      setContentLoaded(true);
    }
  }, [parallaxMode, loaded, baseBgLoaded]);

  return (
    <section className={`${styles.secondaryPreview} ${parallaxMode ? styles.parallaxMode : ''} ${upTitle ? styles.upTitle : ''}`}>
      {/* Base background - forest, fades out on scroll */}
      {parallaxMode && (
        <div ref={baseBgRef} className={`${styles.baseBackground} ${baseBgLoaded ? styles.loaded : ""}`}>
          <Image
            src={forest}
            alt="фон лес"
            fill
            onLoad={() => setBaseBgLoaded(true)}
          />
        </div>
      )}
      {bgImage && (
        <div ref={bgImageWrapperRef} className={`${styles.secondaryPreview__bgImage} ${!parallaxMode && animated ? styles.secondaryPreview__animated : ''} ${bgLoaded ? styles.loaded : ""}`}>
          <Image
            src={bgImage}
            alt="фон за заставкой"
            fill
            onLoad={() => setBgLoaded(true)}
          />
        </div>
      )}
      <div ref={bgWrapperRef} className={`${styles.secondaryPreview__bg} ${!parallaxMode && animated ? styles.secondaryPreview__animated : ''} ${loaded ? styles.loaded : ""}`}>
        <Image
          src={image}
          alt="заставка превью"
          fill
          onLoad={() => setLoaded(true)}
        />
      </div>
      {parallaxMode && (
        <div ref={overlayRef} className={styles.parallaxOverlay} />
      )}
      {(text || subtext) && (
        <div ref={contentRef} className={`${styles.secondaryPreview__content} ${contentLoaded ? styles.loaded : ''}`}>
          {text && (
            <VisibilityManager>
              <h1 className={styles.secondaryPreview__title}>{text}</h1>
            </VisibilityManager>
          )}
          {subtext && (
            <VisibilityManager>
              <h1 className={styles.secondaryPreview__subtitle}>{subtext}</h1>
            </VisibilityManager>
          )}
        </div>
      )}
    </section>
  );
};
