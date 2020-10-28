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

const Login = () => {
  const { auth, setAuth } = useContext(UserContext);
  const { register, handleSubmit, errors, clearErrors } = useForm();
  const { loginError, setLoginError } = useState("");
  const onSubmit = async (data) => {
    try {
      const res = apiServer.post(`/login`, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error(err);
    }
  };
  const errorStyles = {
    padding: "0 13px",
    backgroundColor: "#f8d7da",
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
            <div
              className="outer-signup-form-container"
              style={{
                // display: "flex",
                // flexDirection: "column",
                margin: "0 auto",
                color: "white",
                marginTop: "80px",
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
                  <h1>Welcome Back!</h1>
                  <CssTextField
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    fullWidth="true"
                    style={{ margin: "15px 0" }}
                    inputProps={{
                      style: { color: "white" },
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    inputRef={register({ required: true, maxLength: 255 })}
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
                  <CssTextField
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    fullWidth="true"
                    style={{ margin: "15px 0" }}
                    inputProps={{
                      style: { color: "white" },
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    inputRef={register({
                      required: true,
                      minLength: 6,
                      pattern: /^(?=.*\d)(?=.*[a-z])/,
                    })}
                    onChange={(e) => {
                      clearErrors(e.target.name);
                      setLoginError("");
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
                  {errors.password?.type === "pattern" && (
                    <Typography style={errorStyles}>
                      Invalid password.
                    </Typography>
                  )}
                  {loginError && (
                    <Typography style={{ ...errorStyles, marginTop: "2px" }}>
                      {loginError}
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
                      }}
                      fullWidth="true"
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </form>

              <a href="/register">
                <div style={{ paddingTop: "10px" }}>Don't have an account?</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
