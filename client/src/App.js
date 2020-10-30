import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserContext from "./context/UserContext";
import { Provider as VideoProvider } from "./context/VideoContext";
import Routes from "./components/Routes";
import LandingPage from "./components/LandingPage/LandingPage";

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
