import React, { useState } from "react";
import styles from "./VideoWidget.module.css";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { VideoList } from "../VideoList/VideoList";
import { VisibilityManager } from "../shared/VisibilityManager";

export interface Video {
  link: string;
  thumbnailUrl: string;
  name: string;
  uploadDate: string;
}

export const VideoWidget: React.FC = ({ videos }: any) => {
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
