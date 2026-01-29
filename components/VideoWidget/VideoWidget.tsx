import { useState } from "react";
import { VisibilityManager } from "../shared/VisibilityManager";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { VideoList } from "../VideoList/VideoList";
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

export const VideoWidget: React.FC<VideoWidgetProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);

  return (
    <div className={styles.container} id="reviews">
      <div className={styles.content}>
        <div className={styles.listSection}>
          <VideoList
            videos={videos}
            selectedVideo={selectedVideo}
            onVideoSelect={setSelectedVideo}
          />
        </div>
        <VisibilityManager side="right" className={styles.playerSection}>
          <VideoPlayer video={selectedVideo} />
        </VisibilityManager>
      </div>
    </div>
  );
};
