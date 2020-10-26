import React from "react";
import VideoItemHome from "./VideoItemHome";
import "./css/VideoItem.css";

const VideoListHome = (props) => {
  const renderedList = props.videos.map((video) => {
    // let stats = grabVideoData(video);
    console.log(
      "this is from the video list home component check video",
      video
    );
    return (
      <VideoItemHome
        key={video.id.videoId || video.id}
        video={video}
        onVideoSelect={props.onVideoSelect}
      ></VideoItemHome>
    );
  });

  return <div className="video-list-home">{renderedList}</div>;
};

export default VideoListHome;
