import React from "react";
import styles from "./VideoList.module.css";
import Image from "next/image";

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
        <p>{videos.length} видео</p>
      </div>
      <div className={styles.list}>
        {videos.map((video, i) => (
          <button
            key={video.link + i}
            onClick={() => onVideoSelect(video)}
            className={`${styles.item} ${
              selectedVideo.link === video.link ? styles.selected : ""
            }`}
          >
            <p>{i + 1}</p>
            <div className={styles.thumbnail}>
              <Image
              width={50}
              height={50}
                src={video.thumbnailUrl}
                alt={""}
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
