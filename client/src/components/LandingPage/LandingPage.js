import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import logo from "../../images/logo/logo.png";
import background from "../../images/background4.jpg";
import TopNavBar from "../NavigationBar/TopNavBar";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
const LandingPage = () => {
  const { auth } = useContext(UserContext);

  return !auth ? (
    <>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ position: "absolute", top: "100px" }}>
          <img
            src={logo}
            alt="logo"
            style={{ alignSelf: "center", marginLeft: "130px" }}
          ></img>
          <p style={{ color: "white", fontSize: "75px" }}></p>
          <Button
            href="/login"
            variant="contained"
            style={{
              fontSize: "15px",
              marginLeft: "130px",
              padding: "10px 25px",
              fontFamily: "inherit",
              backgroundColor: "white",
            }}
          >
            Login
          </Button>
          <Button
            href="/register"
            variant="contained"
            style={{
              fontSize: "15px",
              marginLeft: "80px",
              padding: "10px 25px",
              fontFamily: "inherit",
              backgroundColor: "white",
            }}
          >
            Register Now
          </Button>
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/home" />
  );
};

export default LandingPage;
