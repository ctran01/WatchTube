const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { environment } = require("./config");
const cors = require("cors");
const usersRouter = require("./routes/users");
const commentsRouter = require("./routes/comments");
const followersRouter = require("./routes/followers");
const playlistsRouter = require("./routes/playlists");
const repliesRouter = require("./routes/replies");
const videosRouter = require("./routes/videos");
const searchRouter = require("./routes/search");

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors({ origin: true }));

app.use(usersRouter);
app.use("/comment", commentsRouter);
app.use("/follow", followersRouter);
app.use("/playlist", playlistsRouter);
app.use("/replies", repliesRouter);
app.use("/video", videosRouter);
app.use("/search", searchRouter);

app.get("/", (req, res) => {
  res.send({ message: "You're Connected" });
});

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  err.errors = ["Could not find string of resource"];
  next(err);
});

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
