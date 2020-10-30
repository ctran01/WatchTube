import React, { useContext, useEffect, useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchedVideo from "../SearchedVideo";
import { Context as VideoContext } from "../../context/VideoContext";

const Videopage = () => {
  const { state, onVideoSelect, onSearchSubmit } = useContext(VideoContext);
  // const [statistics, setStatistics] = useState();

  // useEffect(() => {
  //   setStatistics(state.selectedVideo.statistics);
  // });
  return (
    <>
      <NavigationBar onSearchSubmit={onSearchSubmit}></NavigationBar>
      <SearchedVideo
        video={state.selectedVideo}
        onVideoSelect={onVideoSelect}
        videos={state.videos}
        search={state.search}
        // statistics={statistics}
        // comments={this.state.comments}
        selectedVideo={state.selectedVideo}
      ></SearchedVideo>
    </>
  );
};

export default Videopage;
