import React from "react";
import VideoListHome from "./VideoListHome";
import "./css/MainContent.css";
import TopNavBar from './TopNavBar'

class Home extends React.Component {
  componentDidMount() {
    this.props.getRecommendedVideos();
  }

  render() {
    return (
      <>
        <div className="main-content-container-home">
          <VideoListHome
            onVideoSelect={this.props.onVideoSelect}
            videos={this.props.videos}
            search={this.props.search}
          ></VideoListHome>
        </div>
      </>
    );
  }
}

export default Home;
