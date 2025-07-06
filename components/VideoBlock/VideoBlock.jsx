import React from "react";
import styles from "./VideoBlock.module.css";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { LineAnimation } from "../LineAnimation/LineAnimation";

export const VideoBlock = ({ title, titleEmpty, videoSrc, videoTitle }) => {
  return (
    <LineAnimation >
    <div className={styles.container}>
      <div className={styles.block}>
        <VisibilityManager
          as="h2"
          side="left"
          style={{ marginLeft: "0px", marginBottom: "0px" }}
          className={contentStyles.title}
        >
          {title}
          <span className={contentStyles.title_empty}>{titleEmpty}</span>
        </VisibilityManager>

        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <iframe 
              src="https://vkvideo.ru/video_ext.php?oid=-231430175&id=456239017&hd=2" 
              className={styles.videoIframe}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </LineAnimation>
  );
};
