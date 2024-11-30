import React, { useState } from 'react';
import styles from './VideoWidget.module.css';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { VideoList } from '../VideoList/VideoList';

export interface Video {
  link: string;
  thumbnailUrl: string;
  name: string;
  uploadDate: string;
}

const videos = [
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239059&hd=2&hash=febd42762d907c81",
    thumbnailUrl: "https://sun9-47.userapi.com/hVxPgf_KCcdxg8IFY2h9DWpDUQx-43TGT8YuXw/Vb-Zr8lbrcw.jpg",
    name: "Модеста. Гараж. Часть 1",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239060&hash=c9aea3c8e98382fc",
    thumbnailUrl: "https://i.mycdn.me/getVideoPreview?id=7414206827251&idx=0&type=39&tkn=beJTEbbBSBfa0JYcShRn_VyF_nI&fn=vid_t",
    name: "В чем отличие антропоморфного протеза от не антропоморфного?",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
];

export const VideoWidget: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);

  return (
    <div className={styles.container} id="reviews">
      <div className={styles.content}>
        <div className={styles.playerSection}>
          <VideoPlayer video={selectedVideo} />
        </div>
        <div className={styles.listSection}>
          <VideoList
            videos={videos}
            selectedVideo={selectedVideo}
            onVideoSelect={setSelectedVideo}
          />
        </div>
      </div>
    </div>
  );
};