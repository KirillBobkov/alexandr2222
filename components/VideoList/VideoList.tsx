import React from "react";
import styles from "./VideoList.module.css";
import Image from "next/image";
import { VisibilityManager } from "../shared/VisibilityManager";

interface VideoListProps {
  videos: any[];
  selectedVideo: any;
  onVideoSelect: (video: any) => void;
}

export const VideoList: React.FC<VideoListProps> = ({
  videos,
  selectedVideo,
  onVideoSelect,
}) => {
  return (
    <VisibilityManager side="left" className={styles.container}>
      <div  className={styles.header}>
        <h3 className={styles.title}><span className={styles.textSymbol}>//
        </span> Отзывы людей, которым я помог</h3>
      </div>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {videos.length > 0 ? videos.map((video, i) => (
            <button
              key={video.link + i}
              onClick={() => onVideoSelect(video)}
              className={`${styles.item} ${
                selectedVideo.link === video.link ? styles.selected : ""
              }`}
            >
              <div className={styles.thumbnail}>
                <Image
                  width={50}
                  height={50}
                  src={video.thumbnailUrl}
                  alt={""}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <p className={styles.videoTitle}>{video.name}</p>
              </div>
            </button>
            )) : <p style={{ padding: "20px", textAlign: "center" } }>Список еще не загружен</p>}
        </ul>
      </div>
    </VisibilityManager>
  );
};
