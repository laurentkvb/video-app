import { FC } from "react";

interface VideoTileProps {
  title: string;
  imageUrl: string;
  onClick(): void;
}

export const VideoTile: FC<VideoTileProps> = ({ title, imageUrl, onClick }) => (
  <div className="video-tile">
    <img src={imageUrl} alt={title} onClick={onClick} />
  </div>
);
