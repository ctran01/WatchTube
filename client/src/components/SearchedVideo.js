import React from "react";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import "./css/MainContent.css";

const SearchedVideo = (props) => {
  return (
    <div className="main-content-container-search">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={props.video} comments={props.comments} />
          </div>
          <div className="five wide column main-content__video-list">
            <VideoList
              onVideoSelect={props.onVideoSelect}
              videos={props.videos}
              search={props.search}
              selectedVideo={props.selectedVideo}
              statistics={props.statistics}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedVideo;
