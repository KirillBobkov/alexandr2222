import React from "react";
import styles from "./VideoPlayer.module.css";
import { Video } from "../VideoWidget/VideoWidget";

interface VideoPlayerProps {
  video: Video;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <div className={styles.container}>
          <iframe
            key={video.link}
            className={styles.video__frame}
            src={video.link}
            title="Vk"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
    </div>
  );
};
