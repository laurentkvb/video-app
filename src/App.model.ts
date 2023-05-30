interface Source {
  file: string;
  type: string;
}

export interface VideoDTO {
  feedid: string;
  title: string;
  link: string;
  image: string;
  sources: Source[];
}

export const getYoutubeId = (url: string): string => url.split("=")[1];

export const fetchVideos = async (): Promise<VideoDTO[]> => {
  const response = await fetch(
    "https://cdn.jwplayer.com/v2/playlists/jAT6P8QM"
  );
  const data = await response.json();
  return data.playlist;
};
