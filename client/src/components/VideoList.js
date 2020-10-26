import React from "react";
import VideoItem from "./VideoItem";
import "./css/VideoItem.css";

class VideoList extends React.Component {
  renderedList = this.props.videos.map((video) => {
    console.log("this is from the video list component", video);
    return (
      <VideoItem
        key={video.id.videoId || video.id}
        video={video}
        onVideoSelect={this.props.onVideoSelect}
        selectedVideo={this.props.selectedVideo}
      ></VideoItem>
    );
  });

  render() {
    return (
      <div className="ui relaxed divided list video-list">
        {this.renderedList}
      </div>
    );
  }
}

export default VideoList;
