import React from 'react';
import NavigationBar from "./NavigationBar";
import SearchedVideo from "./SearchedVideo";


const Videopage = () =>{

  return(
    <>
      <NavigationBar
        onSearchSubmit={this.onSearchSubmit}
      ></NavigationBar>
      <SearchedVideo
        video={this.state.selectedVideo}
        onVideoSelect={this.onVideoSelect}
        videos={this.state.videos}
        search={this.state.search}
        statistics={this.state.statistics}
        comments={this.state.comments}
        selectedVideo={this.state.selectedVideo}
      ></SearchedVideo>
    </>
  )
}

export default Videopage