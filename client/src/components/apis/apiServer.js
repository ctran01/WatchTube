import axios from "axios";
// import config from "../../../../backend/config";

export default axios.create({
  // baseURL: "http://localhost:8080/",
  baseURL: "https://watchtube-backend.herokuapp.com/",
});

// instance.interceptors.request.use(
//   (config)=>{
//     const token = localStorage.getItem('token')
//     if(token){
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (err)=>{
//     return err
//   }
// )

// export default instance;
// export default axios.create({
//   baseURL: "localhost:8080/",
//   headers:{
//     Authorization: `Bearer ${localStorage.getItem('token')}`
//   }
// })
