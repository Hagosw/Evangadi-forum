// import axios from "axios";

// const axiosBase = axios.create({
//   // baseURL: "http://localhost:5000/api",
//   baseURL: "https://evangadi-forum-fs-grp3a.onrender.com",
// });

// export default axiosBase;

import axios from "axios";

// Set the base URL for  Axios requests
const axiosBase = axios.create({
  // For local development:
  baseURL: "http://localhost:5000/api",

  // For  vercel

  baseURL: "https://evangadi-forum-fs-grp3-a.vercel.app//"

  // For production on Render:
  // baseURL: "https://evangadi-forum-fs-grp3a.onrender.com/api",


});

export default axiosBase;
