import React, { useState } from "react";
import styles from "./VideoWidget.module.css";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { VideoList } from "../VideoList/VideoList";
import { LineAnimation } from "../LineAnomation/LineAnimation";
import { VisibilityManager } from "../shared/VisibilityManager";

export interface Video {
  link: string;
  thumbnailUrl: string;
  name: string;
  uploadDate: string;
}

const videos = [
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239191&hash=344bfa2e09b67aa6",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7749927766575&idx=12&type=39&tkn=wU7VVedkp7QlCuStZ29SMqQSNt0&fn=vid_x",
    name: 'Отзыв Тины о проработке с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 14, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239188&hash=8a160ed8a99c6834",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673156733487&idx=13&type=39&tkn=Q8JRpXn2Vz83D9N5E57aw5QCUIQ&fn=vid_x",
    name: 'Отзыв Александра Дворянинова о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239186&hash=04dd114246320d37",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673155488303&idx=8&type=39&tkn=o9JorSfWjRpqk_VYHE3jw9nU0_I&fn=vid_x",
    name: 'Отзыв Дмитрия Афанасьева о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239187&hash=6a6e9fc7449f1510",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673156012591&idx=6&type=39&tkn=m9S6n3h5E9xZhBraLacW2jnP_Tg&fn=vid_x",
    name: 'Отзыв Сергея Хана о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239185&hash=d1b034b0ccc2b6d2",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673149262383&idx=9&type=39&tkn=EfhvQoeYxbOiNWqNgax2vu0la4M&fn=vid_x",
    name: 'Отзыв Кирилла Бобкова о работе Александра "Интеграла" Васильева',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239190&hash=a23c38103b4eb288",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673158765103&idx=15&type=39&tkn=HG3N2h6DiDmo9jGfOjBZWO-jRn8&fn=vid_x",
    name: 'Отзыв Никиты Цыпленкова о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239189&hash=3f37fe408dafc519",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673158044207&idx=11&type=39&tkn=tyaKcHE9DvZStOsL9Uf6fwCYgXs&fn=vid_x",
    name: 'Отзыв Ксении о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
];

export const VideoWidget: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);

  return (
    <LineAnimation>
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
    </LineAnimation>
  );
};
