import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import TopNavBar from "./NavigationBar/TopNavBar";
import LeftNavBar from "./NavigationBar/LeftNavBar";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import VideoList from "./VideoList";
import NavigationBar from "./NavigationBar/NavigationBar";
import SearchedVideo from "./SearchedVideo";
import Home from "./Home";
import Login from "./LandingPage/Login";
import Register from "./LandingPage/Register";
import VideoPage from "./VideoPage";
import { Context as VideoContext } from "../context/VideoContext";
import LandingPage from "./LandingPage/LandingPage";

const Routes = () => {
  const { auth } = useContext(UserContext);
  const {
    state,
    onSearchSubmit,
    onVideoSelect,
    getRecommendedVideos,
  } = useContext(VideoContext);

  return (
    <>
      {/* <TopNavBar />
      <LeftNavBar /> */}
      {/* <NavigationBar /> */}
      <Switch>
        <Route exact path="/video" render={() => <VideoPage />}></Route>
        <Route
          path="/search"
          render={() => (
            <>
              <NavigationBar onSearchSubmit={onSearchSubmit}></NavigationBar>
              <div className="main-content-container-home">
                <VideoList
                  onVideoSelect={onVideoSelect}
                  videos={state.videos}
                  search={state.search}
                  statistics={state.statistics}
                ></VideoList>
              </div>
            </>
          )}
        ></Route>
        <Route
          exact
          path="/home"
          render={() => (
            <>
              <NavigationBar onSearchSubmit={onSearchSubmit}></NavigationBar>
              <Home
                onVideoSelect={onVideoSelect}
                videos={state.videos}
                search={state.search}
                getRecommendedVideos={getRecommendedVideos}
              ></Home>
            </>
          )}
        ></Route>
        <Route
          exact
          path="/"
          // render={() => (
          //   <>
          //     <NavigationBar onSearchSubmit={onSearchSubmit}></NavigationBar>
          //     <Home
          //       onVideoSelect={onVideoSelect}
          //       videos={state.videos}
          //       search={state.search}
          //       getRecommendedVideos={getRecommendedVideos}
          //     ></Home>
          //   </>
          // )}
          render={() => <LandingPage />}
        ></Route>
        <Route exact path="/login" render={() => <Login />}></Route>
        <Route exact path="/register" render={() => <Register />}></Route>
      </Switch>
    </>
  );
};

export default Routes;
