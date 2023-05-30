import { FC, useEffect, useState } from "react";

import "./VideoDetail.css";
interface VideoDetailProps {
  videoId: string;
  onClose: () => void;
}

/**
 * The youtube video is being used, due to the JWplayer video not being able to load due to an error,
 *
 */
export const VideoDetail: FC<VideoDetailProps> = ({ videoId, onClose }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [onClose]);

  return (
    <div className="video-detail">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
      {/*this would have been able to load the video - but the video gives and 224003 error*/}
      {/*<video src={videoUrl} controls autoPlay />*/}

      {loaded && <button onClick={onClose}>Close video</button>}
    </div>
  );
};
