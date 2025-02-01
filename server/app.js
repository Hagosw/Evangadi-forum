const path = require("path");
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const cors = require("cors");

// Enable CORS
app.use(
  cors(
    (origins = [
      // "http://localhost",
      "https://evangadi-forum-fs-grp3-a.vercel.app//",
    ]) // Replace with frontend domain in production or Add Render URL for production
  )
);

// Serve static files from React app (Vite or create-react-app)
app.use(express.static(path.join(__dirname, "dist")));

// Middleware for JSON parsing
app.use(express.json());

// Database connection
const dbConnection = require("./db/dbConfig");

// Authentication middleware
const authMiddleware = require("./middleware/authMiddleware");

// Routers
const userRouter = require("./routes/userRoute");
const questionRoute = require("./routes/questionRoute");
const answerRoute = require("./routes/answerRoute");

// API routes
app.use("/api/users", userRouter);
app.use("/api/questions", authMiddleware, questionRoute);
app.use("/api", authMiddleware, answerRoute);

// Serve React app for unmatched routes (catch-all route)
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "dist", "index.html"));
// });

// test get request
app.get("/", (req, res) => {
  res.status(200).send("welcome-to Evangadi-");
});

// Start server
async function start() {
  try {
    console.log("Attempting to connect to the database...");
    const result = await dbConnection.execute("SELECT 'test'");
    console.log("Database connection test result:", result);

    app.listen(port, () => {
      console.log("Database connection established");
      console.log(`server running and listening on port:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error.message);
    process.exit(1); // Exit the process to prevent repeated attempts
  }
}

start();

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const port = 5500;
// const cors = require("cors");

// app.use(cors({ origin: "http://localhost:5500" }));

// // db connection
// const dbConection = require("./db/dbConfig");

// // authentication middleware
// const authMiddleware = require("./middleware/authMiddleware");

// // user router middleware file
// const userRouter = require("./routes/userRoute");
// // json middleware to extract json data
// app.use(express.json());
// // user router middleware
// app.use("/api/users", userRouter);

// // question router middleware file
// const questionRoute = require("./routes/questionRoute");
// // question router middleware
// app.use("/api/questions", authMiddleware, questionRoute);

// // answer router middleware file
// const answerRoute = require("./routes/answerRoute");
// // answer router middleware
// app.use("/api", authMiddleware, answerRoute);

// async function start() {
//   try {
//     const result = await dbConection.execute("select 'test'");
//     await app.listen(port);
//     console.log("database connection established");
//     console.log(`listening on ${port}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// start();

// // app.listen(port, (err)=>{
// //     if (err) {
// //         console.log(err);
// //     }else{
// //         console.log(`listening on localhost:${port}`);
// //     }
// // })
