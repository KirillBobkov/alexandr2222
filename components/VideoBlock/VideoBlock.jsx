import { useCallback, useRef, useState } from "react";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import styles from "./VideoBlock.module.css";

export const VideoBlock = ({
  autoPlay = false,
  controls = true,
  directVideo = false,
  loop = false,
  muted = true,
  poster,
  title,
  titleEmpty,
  videoSrc,
  videoTitle,
}) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadStart = useCallback(() => setIsLoading(true), []);

  const handleLoadedData = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  const renderVideo = () => {
    if (directVideo) {
      return (
        <div className={styles.directVideoContainer}>
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner} />
              <p className={styles.loadingText}>Загрузка видео...</p>
            </div>
          )}

          {hasError && (
            <div className={styles.errorOverlay}>
              <div className={styles.errorIcon}>⚠️</div>
              <p className={styles.errorText}>Ошибка загрузки видео</p>
              <button
                className={styles.retryButton}
                onClick={() => {
                  setHasError(false);
                  setIsLoading(true);
                  if (videoRef.current) {
                    videoRef.current.load();
                  }
                }}
              >
                Повторить
              </button>
            </div>
          )}
          <video
            ref={videoRef}
            className={styles.directVideo}
            autoPlay={autoPlay}
            muted={muted}
            controls={controls}
            loop={loop}
            preload="metadata"
            playsInline
            onLoadStart={handleLoadStart}
            onLoadedData={handleLoadedData}
            onError={handleError}
            aria-label={videoTitle || "Видео"}
            title={videoTitle}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      );
    }

    return (
      <iframe
        src={
          videoSrc ||
          "https://vkvideo.ru/video_ext.php?oid=-231430175&id=456239017&hd=2"
        }
        className={styles.videoIframe}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        allowFullScreen
        title={videoTitle}
      />
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <VisibilityManager
          as="h2"
          side="left"
          style={{ marginLeft: "0px", marginBottom: "0px" }}
          className={contentStyles.title}
        >
          {title}
          {titleEmpty}
        </VisibilityManager>

        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>{renderVideo()}</div>
        </div>
      </div>
    </div>
  );
};
