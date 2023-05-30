import { FC, useEffect, useState } from "react";
import { VideoTile } from "./components/VideoTile";
import "./App.css";
import { VideoDetail } from "./components/VideoDetail";
import { getYoutubeId, VideoDTO, fetchVideos } from "./App.model";

export const App: FC = () => {
  const [videos, setVideos] = useState<VideoDTO[]>([]);
  const [currentVideoId, setCurrentVideoId] = useState("");

  useEffect(() => {
    fetchVideos()
      .then((data) => setVideos(data))
      .catch((error) => console.log(error));
  }, []);

  const handleTileClick = (videoId: string): void => {
    setCurrentVideoId(videoId);
  };

  return (
    <div className="app">
      <div className="video-gallery">
        {videos.map((video) => (
          <VideoTile
            key={video.feedid}
            title={video.title}
            imageUrl={video.image}
            onClick={() => handleTileClick(getYoutubeId(video.sources[0].file))}
          />
        ))}
      </div>
      {currentVideoId && (
        <VideoDetail
          videoId={currentVideoId}
          onClose={() => setCurrentVideoId("")}
        />
      )}
    </div>
  );
};
