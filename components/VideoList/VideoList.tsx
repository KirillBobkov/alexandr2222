import Image from "next/image";
import { VisibilityManager } from "../shared/VisibilityManager";
import contentStyles from "../../styles/contentStyles.module.css";
import styles from "./VideoList.module.css";

interface Video {
  link: string;
  thumbnailUrl: string;
  name: string;
}

interface VideoListProps {
  videos: Video[];
  selectedVideo: Video;
  onVideoSelect: (video: Video) => void;
}

export const VideoList: React.FC<VideoListProps> = ({
  onVideoSelect,
  selectedVideo,
  videos,
}) => {
  return (
    <VisibilityManager className={styles.container}>
      <div className={styles.header}>
        <h3 className={`${contentStyles.title_middle} ${styles.title}`}>
          Отзывы
        </h3>
      </div>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {videos.length > 0 ? (
            videos.map((video, i) => (
              <button
                key={`${video.link}-${i}`}
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
                    alt=""
                    className={styles.image}
                  />
                </div>
                <div className={styles.info}>
                  <p className={styles.videoTitle}>{video.name}</p>
                </div>
              </button>
            ))
          ) : (
            <p style={{ padding: "20px", textAlign: "center" }}>
              Список еще не загружен
            </p>
          )}
        </ul>
      </div>
    </VisibilityManager>
  );
};
