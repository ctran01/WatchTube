import axios from "axios";
import config from "../../../../backend/config";


const instance = axios.create({
  baseURL: "localhost:8080/"
})

instance.interceptors.request.use(
  (config)=>{
    const token = localStorage.getItem('token')
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    } 
    return config 
  },
  (err)=>{
    return err
  }
)

export default instance;
// export default axios.create({
//   baseURL: "localhost:8080/",
//   headers:{
//     Authorization: `Bearer ${localStorage.getItem('token')}`
//   }
// })