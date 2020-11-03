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
        <div
          style={{
            display: "flex",
            marginBottom: "600px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
          }}
        >
          <img src={logo} alt="logo" style={{}}></img>
          <p style={{ color: "white", fontSize: "50px" }}>
            Videos for everyone
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              justifyItems: "center",
            }}
          >
            <a href="/login">
              <button
                variant="contained"
                style={{
                  fontSize: "15px",
                  padding: "10px 25px",
                  borderRadius: "20px",
                  fontFamily: "inherit",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  outline: "none",
                  border: "none",
                }}
              >
                Login
              </button>
            </a>

            <a href="/register">
              <button
                variant="contained"
                style={{
                  fontSize: "15px",
                  marginLeft: "80px",
                  padding: "10px 25px",
                  fontFamily: "inherit",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  outline: "none",
                  border: "none",
                }}
              >
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/home" />
  );
};

export default LandingPage;
