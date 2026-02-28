import { useState } from "react";
import { VisibilityManager } from "../shared/VisibilityManager";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { VideoList } from "../VideoList/VideoList";
import contentStyles from "../../styles/contentStyles.module.css";
import styles from "./VideoWidget.module.css";

export interface Video {
  link: string;
  thumbnailUrl: string;
  name: string;
  uploadDate: string;
}

interface VideoWidgetProps {
  videos: Video[];
}

export const VideoWidget: React.FC<VideoWidgetProps> = ({ videos }): any => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className={styles.container} id="reviews">
      <div className={styles.content}>
        <div className={styles.mobileCardWrapper}>
          <div className={styles.mobileHeader}>
            <h3 className={`${contentStyles.title_middle} ${styles.title}`}>
              Отзывы
            </h3>
          </div>

          <VisibilityManager side="opacity" className={styles.playerSection}>
            <VideoPlayer video={selectedVideo} />
          </VisibilityManager>
          <div className={styles.listSection}>
            <VideoList
              videos={videos}
              selectedVideo={selectedVideo}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
