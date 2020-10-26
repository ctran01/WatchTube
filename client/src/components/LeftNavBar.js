import React from "react";
import "./css/LeftNavBar.css";

import { NavLink } from "react-router-dom";

class LeftNavBar extends React.Component {
  render() {
    return (
      <div className="left-nav-container">
        <ul className="left-nav-top">
          <NavLink exact to="/home">
            <li>
              <div className="icon-container flex">
                <i className="home icon menu-icon"></i>
              </div>
              <p>Home</p>
            </li>
          </NavLink>
          <NavLink exact to="/trending">
            <li>
              <div className="icon-container flex">
                <i className="fire icon"></i>
              </div>
              <p>Trending</p>
            </li>
          </NavLink>
          <NavLink exact to="/subscriptions">
            <li>
              <div className="icon-container flex">
                <i className="industry icon"></i>
              </div>
              <p>Subscriptions</p>
            </li>
          </NavLink>
        </ul>
        <div className="divider"></div>
        <ul className="left-nav-middle">
          <NavLink exact to="/library">
            <li>
              <div className="icon-container flex">
                <i className="book icon"></i>
              </div>
              <p>Library</p>
            </li>
          </NavLink>
          <NavLink exact to="/history">
            <li>
              <div className="icon-container flex">
                <i className="undo icon"></i>
              </div>
              <p>History</p>
            </li>
          </NavLink>
          <NavLink exact to="/watch-later">
            <li>
              <div className="icon-container flex">
                <i className="clock icon"></i>
              </div>
              <p>Watch Later</p>
            </li>
          </NavLink>
        </ul>
        <div className="divider"></div>
        <ul className="left-nav-bottom">
          <a href="https://www.linkedin.com/in/chris-tran-/">
            <li>
              <div className="icon-container flex">
                <i
                  className="fa fa-linkedin-square"
                  style={{ fontSize: "24px" }}
                ></i>
              </div>
              <p>LinkedIn</p>
            </li>
          </a>
          <a href="https://github.com/ctran01">
            <li>
              <div className="icon-container flex">
                <i className="fa fa-github" style={{ fontSize: "24px" }}></i>
              </div>
              <p>Github</p>
            </li>
          </a>
        </ul>
      </div>
    );
  }
}

export default LeftNavBar;
