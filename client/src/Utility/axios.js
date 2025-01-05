import axios from "axios";

const serverPort = import.meta.env.PORT || 5500;

// Set the base URL  

export const axiosInstance = axios.create({
  //local endpoint reference

  baseURL: 'http://localhost:5500/api/',

});





