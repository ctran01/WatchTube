import React from "react";
import SearchBar from "./SearchBar";

import "./css/TopNavBar.css";
import logo from "./css/logo/logo.png";

const TopNavBar = ({ onSearchSubmit }) => {
  return (
    <div className="top-nav-container">
      <section className="nav-bar-topleft">
        <i className="bars icon hamburger-menu"></i>
        <a href="/home">
          <img className="watchtube-logo" src={logo} alt="logo"></img>
        </a>
      </section>
      <section className="nav-bar-middle">
        <SearchBar onSearchSubmit={onSearchSubmit}></SearchBar>
      </section>
      <section className="nav-bar-right">
        <div className="video-icon">
          <i className="video icon "></i>
        </div>
        <div className="sign-in">
          <i className="user circle icon user-icon"></i>
          <p>SIGN IN</p>
        </div>
      </section>
    </div>
  );
};

export default TopNavBar;
