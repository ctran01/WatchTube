import React, {useContext} from 'react';
import UserContext from '../context/UserContext';
import TopNavBar from './TopNavBar'
import LeftNavBar from './LeftNavBar'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import VideoList from "./VideoList";
import NavigationBar from "./NavigationBar";
import SearchedVideo from "./SearchedVideo";
import Home from "./Home";
import VideoPage from './VideoPage'
import {Context as VideoContext} from '../context/VideoContext'

const Routes = () =>{
  const {auth} = useContext(UserContext)
  const {state, onSearchSubmit} = useContext(VideoContext)

  return(
    <>
      <TopNavBar/>
      <LeftNavBar />
      <Switch>
      <Route
          exact
          path="/video"
          render={() => (
            <VideoPage />
            // <>
            //   <NavigationBar
            //     onSearchSubmit={this.onSearchSubmit}
            //   ></NavigationBar>
            //   <SearchedVideo
            //     video={this.state.selectedVideo}
            //     onVideoSelect={this.onVideoSelect}
            //     videos={this.state.videos}
            //     search={this.state.search}
            //     statistics={this.state.statistics}
            //     comments={this.state.comments}
            //     selectedVideo={this.state.selectedVideo}
            //   ></SearchedVideo>
            // </>
          )}
        ></Route>
        <Route
          path="/search"
          render={() => (
            <>
              <NavigationBar
                onSearchSubmit={onSearchSubmit}
              ></NavigationBar>
              <div className="main-content-container-home">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                  search={this.state.search}
                  statistics={this.state.statistics}
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
              <NavigationBar
                onSearchSubmit={onSearchSubmit}
              ></NavigationBar>
              <Home
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
                search={this.state.search}
                getRecommendedVideos={this.getRecommendedVideos}
              ></Home>
            </>
          )}
        ></Route>
      </Switch>
    </>
  )
}

export default Routes