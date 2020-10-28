import React from "react";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import "./css/MainContent.css";
import Home from "./Home";
import APIKey from "./apis/apiKey";
import NavigationBar from "./NavigationBar/NavigationBar";
import SearchedVideo from "./SearchedVideo";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

class Main extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    search: "",
    comments: [],
  };

  onSearchSubmit = async (search) => {
    const response = await youtube.get(`/search?part=snippet`, {
      params: {
        q: search,

        type: "video",
        maxResults: 25,
        key: APIKey,
      },
    });

    //Axios doesn't require response.json(). Already parses when invoked
    const {
      data: { items },
    } = response;

    console.log("search", items);
    let ids = [];
    items.forEach((item) => {
      ids.push(item.id.videoId);
    });

    let newList = ids.toString();
    console.log(newList);
    const videoData = await youtube.get(
      `/videos?part=snippet&part=statistics`,
      {
        params: {
          id: newList,
          key: APIKey,
        },
      }
    );

    const {
      data: { items: newVideoList },
    } = videoData;
    console.log("new video list", newVideoList);

    this.setState({
      videos: newVideoList,
      selectedVideo: null,
      search: search,
    });
    this.props.history.push(`/search/${search}`);
    // console.log("this is the searched list!", this.state.videos);
  };

  onVideoSelect = async (video) => {
    // console.log("From the app component! This is the selected video", video);
    const videoSrc = video.id.videoId || video.id;
    const response = await youtube.get(`/videos?part=snippet&part=statistics`, {
      params: {
        id: videoSrc,
        key: APIKey,
      },
    });
    // console.log("this is the searched selected video", response);
    const {
      data: { items },
    } = response;

    const comments = await youtube.get(
      `/commentThreads?part=snippet&part=replies`,
      {
        params: {
          videoId: videoSrc,
          key: APIKey,
        },
      }
    );

    this.setState({ selectedVideo: items[0], comments: comments.data.items });
  };

  getRecommendedVideos = async () => {
    const response = await youtube.get(`/videos?part=snippet&part=statistics`, {
      params: {
        chart: "mostPopular",
        maxResults: 20,
        key: APIKey,
      },
    });
    //Axios doesn't require response.json(). Already parses when invoked
    console.log(response);
    const {
      data: { items },
    } = response;
    // console.log(Data);
    // let items = Data;
    this.setState({
      videos: items,
      selectedVideo: null,
    });
  };

  render() {
    return (
      <div>Main </div>
      // <Switch>
      //   {/* <Route exact path="/">
      //     <Redirect to="/home"></Redirect>
      //   </Route> */}
      // {/* <Route
      //   exact
      //   path="/video"
      //   render={() => (
      //     <>
      //       <NavigationBar
      //         onSearchSubmit={this.onSearchSubmit}
      //       ></NavigationBar>
      //       <SearchedVideo
      //         video={this.state.selectedVideo}
      //         onVideoSelect={this.onVideoSelect}
      //         videos={this.state.videos}
      //         search={this.state.search}
      //         statistics={this.state.statistics}
      //         comments={this.state.comments}
      //         selectedVideo={this.state.selectedVideo}
      //       ></SearchedVideo>
      //     </>
      //   )}
      // ></Route>
      // <Route
      //   path="/search"
      //   render={() => (
      //     <>
      //       <NavigationBar
      //         onSearchSubmit={this.onSearchSubmit}
      //       ></NavigationBar>
      //       <div className="main-content-container-home">
      //         <VideoList
      //           onVideoSelect={this.onVideoSelect}
      //           videos={this.state.videos}
      //           search={this.state.search}
      //           statistics={this.state.statistics}
      //         ></VideoList>
      //       </div>
      //     </>
      //   )}
      // ></Route>
      // <Route
      //   exact
      //   path="/home"
      //   render={() => (
      //     <>
      //       <NavigationBar
      //         onSearchSubmit={this.onSearchSubmit}
      //       ></NavigationBar>
      //       <Home
      //         onVideoSelect={this.onVideoSelect}
      //         videos={this.state.videos}
      //         search={this.state.search}
      //         getRecommendedVideos={this.getRecommendedVideos}
      //       ></Home>
      //     </>
      //   )}
      // ></Route> */}
      // </Switch>
    );
  }
}

export default withRouter(Main);
