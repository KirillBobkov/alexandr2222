import React from "react";
import styles from "./VideoList.module.css";

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
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          Отзывы о работе Александра "Интеграла" Васильева.
        </h3>
      </div>
      <div className={styles.list}>
        {videos.map((video) => (
          <button
            key={video.link}
            onClick={() => onVideoSelect(video)}
            className={`${styles.item} ${
              selectedVideo.link === video.link ? styles.selected : ""
            }`}
          >
            <div className={styles.thumbnail}>
              <img
                src={video.thumbnailUrl}
                alt={video.name}
                className={styles.image}
              />
              {/* <div className={styles.duration}>{video.duration}</div> */}
            </div>
            <div className={styles.info}>
              <h4 className={styles.videoTitle}>{video.name}</h4>
              {/* <p className={styles.views}>{video.views} views</p> */}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
