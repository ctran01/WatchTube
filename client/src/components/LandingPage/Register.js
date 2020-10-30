import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import background from "../../images/background5.jpg";
import apiServer from "../apis/apiServer";
import UserContext from "../../context/UserContext";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import TopNavBarLanding from "./TopNavBarLanding";

const Register = () => {
  const { auth, setAuth } = useContext(UserContext);
  const { register, handleSubmit, errors, clearErrors } = useForm();
  const [registerError, setRegisterError] = useState("");

  const onSubmit = async (data) => {
    // console.log(data);
    const { username, email, password } = data;
    try {
      if (data.password !== data.confirmPassword)
        return setRegisterError("Confirmed password does not match.");
      const res = await apiServer.post(`/register`, {
        username: username,
        email: email,
        password: password,
      });

      if (res.status === 200) {
        console.log(res);
        const { token, id, username } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("id", id);
        setAuth(data.token);
      } else {
        return setRegisterError("Username or email already exists");
      }
    } catch (err) {
      console.error(err);
      return setRegisterError("Username or email already exists");
    }
  };
  const errorStyles = {
    padding: "0 13px",
    backgroundColor: "#red",
    borderRadius: "4px",
  };

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "blue",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
          boxSahdow: "5px 5px 5px rgba(0,0,0,.2)",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "blue",
        },
      },
    },
  })(TextField);

  return (
    <>
      {auth ? (
        <Redirect to="/home" />
      ) : (
        <div
          className="signup-form-background"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // flexDirection: "column",
          }}
        >
          <div
            className="signup-form-overlay"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
              height: "100vh",
              display: "flex",
              position: "relative",
            }}
          >
            <TopNavBarLanding />
            <div
              className="outer-signup-form-container"
              style={{
                // display: "flex",
                // flexDirection: "column",
                margin: "0 auto",
                color: "white",
                marginTop: "200px",
                // backgroundColor: "rgba(255,255,255,0.6)",
                height: "max-content",
                width: "50ch",
              }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50ch",
                }}
              >
                <div className="inner-signup-form-container">
                  <h1>Registration</h1>
                  <input
                    placeholder="Username"
                    name="username"
                    type="text"
                    style={{
                      padding: "10px",
                      borderRadius: "3px",
                      border: "1px solid #ddd",
                      backgroundColor: "transparent",
                      color: "white",
                      marginBottom: "20px",
                      width: "100%",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      margin: "15px 0",
                      height: "50px",
                    }}
                    ref={register({ required: true, maxLength: 255 })}
                    onChange={(e) => {
                      clearErrors(e.target.name);
                    }}
                  />
                  {errors.username?.type === "required" && (
                    <Typography style={errorStyles}>
                      Username required.
                    </Typography>
                  )}
                  {errors.username?.type === "maxLength" && (
                    <Typography style={errorStyles}>
                      Username cannot exceed 50 characters.
                    </Typography>
                  )}
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    style={{
                      padding: "10px",
                      borderRadius: "3px",
                      border: "1px solid #ddd",
                      backgroundColor: "transparent",
                      color: "white",
                      marginBottom: "20px",
                      width: "100%",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      margin: "15px 0",
                      height: "50px",
                    }}
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                        maxLength: 255,
                      },
                    })}
                    onChange={(e) => {
                      clearErrors(e.target.name);
                    }}
                  />
                  {errors.email?.type === "required" && (
                    <Typography style={errorStyles}>Email required.</Typography>
                  )}
                  {errors.email?.type === "maxLength" && (
                    <Typography style={errorStyles}>
                      Email cannot exceed 50 characters.
                    </Typography>
                  )}
                  <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    style={{
                      padding: "10px",
                      borderRadius: "3px",
                      border: "1px solid #ddd",
                      backgroundColor: "transparent",
                      color: "white",
                      marginBottom: "20px",
                      width: "100%",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      margin: "15px 0",
                      height: "50px",
                    }}
                    ref={register({
                      required: "Required",
                      minLength: 6,
                    })}
                    onChange={(e) => {
                      clearErrors(e.target.name);
                    }}
                  />
                  {errors.password?.type === "required" && (
                    <Typography style={errorStyles}>
                      Invalid password.
                    </Typography>
                  )}
                  {errors.password?.type === "minLength" && (
                    <Typography style={errorStyles}>
                      Invalid password.
                    </Typography>
                  )}

                  <input
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    style={{
                      padding: "10px",
                      borderRadius: "3px",
                      border: "1px solid #ddd",
                      backgroundColor: "transparent",
                      color: "white",
                      marginBottom: "20px",
                      width: "100%",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      margin: "15px 0",
                      height: "50px",
                    }}
                    ref={register({
                      required: "Required",
                      minLength: 6,
                    })}
                    onChange={(e) => {
                      clearErrors(e.target.name);
                      setRegisterError("");
                    }}
                  />
                  {errors.confirmPassword?.type === "required" && (
                    <Typography style={errorStyles}>
                      Invalid password.
                    </Typography>
                  )}
                  {errors.confirmPassword?.type === "minLength" && (
                    <Typography style={errorStyles}>
                      Invalid password.
                    </Typography>
                  )}

                  {registerError && (
                    <Typography style={{ ...errorStyles, marginTop: "2px" }}>
                      {registerError}
                    </Typography>
                  )}
                  <div style={{ display: "flex" }}>
                    <Button
                      variant="outlined"
                      type="submit"
                      style={{
                        margin: "20px 5px 0 0",
                        color: "white",
                        borderColor: "white",
                        width: "200px",
                        boxShadow: "5px 5px 5px rgba(0,0,0,.2)",
                      }}
                    >
                      Register
                    </Button>
                    <Button
                      variant="outlined"
                      href="/"
                      style={{
                        margin: "20px 5px 0 0",
                        color: "white",
                        borderColor: "white",
                        width: "200px",
                        boxShadow: "5px 5px 5px rgba(0,0,0,.2)",
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>

              <a href="/login">
                <div style={{ paddingTop: "10px" }}>
                  Already have an account?
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
