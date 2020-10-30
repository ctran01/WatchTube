import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import UserContext from "../../context/UserContext";
import "../css/TopNavBar.css";
import logo from "../../images/logo/logo.png";

const TopNavBar = ({ onSearchSubmit }) => {
  const { auth, setAuth } = useContext(UserContext);

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    setAuth("");
  };
  return (
    <div className="top-nav-container">
      <section className="nav-bar-topleft">
        <i className="bars icon hamburger-menu"></i>
        <a href="/home">
          <img className="watchtube-logo" src={logo} alt="logo"></img>
        </a>
      </section>
      <section className="nav-bar-middle">
        {auth ? <SearchBar onSearchSubmit={onSearchSubmit}></SearchBar> : null}
      </section>
      <section className="nav-bar-right">
        <div className="video-icon">
          <i className="video icon "></i>
        </div>
        <div className="sign-in">
          <a href="/">
            <button onClick={() => signout()}>
              {" "}
              <p>LOG OUT</p>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TopNavBar;
