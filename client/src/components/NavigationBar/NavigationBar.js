import React from "react";
import TopNavBar from "./TopNavBar";
import LeftNavBar from "./LeftNavBar";

const NavigationBar = (props) => {
  return (
    <>
      <TopNavBar onSearchSubmit={props.onSearchSubmit}></TopNavBar>
      <LeftNavBar></LeftNavBar>
    </>
  );
};

export default NavigationBar;
