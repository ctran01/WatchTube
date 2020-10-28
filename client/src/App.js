import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import { Provider as VideoProvider } from "./context/VideoContext";
import Routes from "./components/Routes";
import LandingPage from "./components/LandingPage/LandingPage";
import Main from "./components/Main";
import Home from "./components/Home";

const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("token") || "");

  const context = { auth, setAuth };

  return (
    <UserContext.Provider value={context}>
      <VideoProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Routes />
          </Switch>
        </BrowserRouter>
      </VideoProvider>
    </UserContext.Provider>
  );
};

export default App;
