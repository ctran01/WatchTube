import React, { useContext } from "react";
import logo from "../../images/logo/logo.png";
import UserContext from "../../context/UserContext";
const TopNavBarLanding = () => {
  const { auth } = useContext(UserContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "fixed",
        zIndex: "10",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <section className="nav-bar-topleft">
        {auth ? (
          <a href="/home">
            <img className="watchtube-logo" src={logo} alt="logo"></img>
          </a>
        ) : (
          <a href="/">
            <img className="watchtube-logo" src={logo} alt="logo"></img>
          </a>
        )}
      </section>
      <section className="nav-bar-middle"></section>
      <section className="nav-bar-right">
        <div>
          <a href="/register">
            <button
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "none",
                borderRadius: "30px",
                width: "100px",
                color: "white",
                fontSize: "12px",
                cursor: "pointer",
                padding: "10px",
                marginLeft: "10px",
              }}
            >
              <p>Sign Up</p>
            </button>
          </a>
        </div>
        <div>
          <a href="/login">
            <button
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "none",
                borderRadius: "30px",
                width: "100px",
                color: "white",
                fontSize: "12px",
                cursor: "pointer",
                padding: "10px",
                marginLeft: "10px",
              }}
            >
              <p>Login</p>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TopNavBarLanding;
