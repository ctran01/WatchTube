export default {
  environment: process.env.NODE_ENV || "development",
  backendUrl:
    process.env.NODE_ENV === "production"
      ? `https://watchtube-app.herokuapp.com`
      : "https://localhost:3000/",
};
