import { FC, useEffect, useState } from "react";
import { VideoTile } from "./components/VideoTile";
import "./App.css";
import { VideoDetail } from "./components/VideoDetail";
import { getYoutubeId, VideoDTO, fetchVideos } from "./App.model";

import spinner from "./assets/spinner.gif";
export const App: FC = () => {
  const [videos, setVideos] = useState<VideoDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentVideoId, setCurrentVideoId] = useState("");

  useEffect(() => {
    fetchVideos()
      .then((data) => setVideos(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleTileClick = (videoId: string): void => {
    setCurrentVideoId(videoId);
  };

  return (
    <div className="app">
      <h1>Video app</h1>
      {loading && (
        <div className="spinner">
          <img src={spinner} alt="spinner" />
        </div>
      )}
      {!loading && (
        <div className="video-gallery">
          {videos.map((video) => (
            <VideoTile
              key={video.feedid}
              title={video.title}
              imageUrl={video.image}
              onClick={() =>
                handleTileClick(getYoutubeId(video.sources[0].file))
              }
            />
          ))}
        </div>
      )}
      {currentVideoId && (
        <VideoDetail
          videoId={currentVideoId}
          onClose={() => setCurrentVideoId("")}
        />
      )}
    </div>
  );
};
