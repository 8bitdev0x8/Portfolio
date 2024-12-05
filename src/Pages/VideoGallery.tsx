import React, { useState } from "react";
import "./VideoGallery.css";
import Bellarom_Thumpnail from '../Images/Bellarom_thumpnail.png';
import TouchMeNot_Thumpnail from '../Images/TouchMeNot_thumb.jpg';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  isVimeo?: boolean;
}

const videos: Video[] = [
  // {
  //   id: 1,
  //   title: "Nature Walk",
  //   thumbnail: "https://via.placeholder.com/300x200?text=Nature+Walk",
  //   videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  // },
  // {
  //   id: 2,
  //   title: "City Lights",
  //   thumbnail: "https://via.placeholder.com/300x200?text=City+Lights",
  //   videoUrl: "https://www.w3schools.com/html/movie.mp4",
  // },
  {
    id: 3,
    title: "Bellarom",
    thumbnail: Bellarom_Thumpnail,
    videoUrl: "https://player.vimeo.com/video/1035192003?h=287bfb8b74&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    isVimeo: true, // Mark this as a Vimeo video
  },
  {
    id: 4,
    title: "Touch Me Not",
    thumbnail: TouchMeNot_Thumpnail,
    videoUrl: "https://player.vimeo.com/video/1036384450?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    isVimeo: true, // Mark this as a Vimeo video
  },
];

const VideoGallery: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(videos[0]);

  const handleVideoClick = (video: Video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="video-gallery-container">
      <h1>Video Gallery</h1>
      <div className="video-list">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-thumbnail"
            onClick={() => handleVideoClick(video)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {currentVideo && (
        <div className="video-player">
          <h2>{currentVideo.title}</h2>
          {currentVideo.isVimeo ? (
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={currentVideo.videoUrl}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title={currentVideo.title}
              ></iframe>
            </div>
          ) : (
            <video
              src={currentVideo.videoUrl}
              controls
              autoPlay
              className="player"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
