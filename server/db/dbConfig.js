
const mysql2 = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// Check for missing environment variables
if (!process.env.VITE_DB_HOST || !process.env.VITE_DB_USER || !process.env.VITE_DB_DATABASE || !process.env.VITE_DB_PASSWORD || !process.env.VITE_DB_PORT || !process.env.VITE_DB_CONNECTION_LIMIT) {
  console.error('Missing required environment variables!');
  process.exit(1); // Exit the process if critical environment variables are missing
}

// Create a connection pool using environment variables  
const dbConnection = mysql2.createPool({  
  host: process.env.VITE_DB_HOST,  
  user: process.env.VITE_DB_USER,  
  database: process.env.VITE_DB_DATABASE,  
  password: process.env.VITE_DB_PASSWORD,  
  port: Number(process.env.VITE_DB_PORT),  // Cast to a number
  connectionLimit: Number(process.env.VITE_DB_CONNECTION_LIMIT), // Cast to a number
});  

// Log the connection details without sensitive information
console.log(`Connecting to database at ${process.env.VITE_DB_HOST} as ${process.env.VITE_DB_USER} with a connection limit of ${process.env.VITE_DB_CONNECTION_LIMIT}.`);

module.exports = dbConnection; // Export the connection pool

// # For Database connections

// const mysql2 = require('mysql2');
// const dotenv = require('dotenv');
// dotenv.config();
 

// // Create a connection pool using environment variables  
// const dbConnection = mysql2.createPool({  
//   host: process.env.VITE_DB_HOST,  
//   user: process.env.VITE_DB_USER,  
//   database: process.env.VITE_DB_DATABASE,  
//   password: process.env.VITE_DB_PASSWORD,  
//   port: process.env.VITE_DB_PORT,  
//   connectionLimit: process.env.VITE_DB_CONNECTION_LIMIT,  
// });  

// // // Log the connection details  
// console.log(`Connecting to database at ${process.env.VITE_DB_HOST} as ${process.env.VITE_DB_USER} with a connection limit of ${process.env.VITE_DB_CONNECTION_LIMIT}.`);  

// module.exports = dbConnection; // Export the connection pool if needed

  // For api and other connections

// const apiUrl = import.meta.env.VITE_API_URL;  
// const apiKey = import.meta.env.VITE_API_KEY;  

// console.log(apiUrl); // Outputs: https://api.example.com  
// console.log(apiKey); // Outputs: your_api_key  



// =====================================================

// For Local use only

// const mysql2 = require('mysql2');
// const dotenv = require('dotenv');
// dotenv.config();

// const dbConnection= mysql2.createPool({

//     user: "evangadi-admin",
//     database: "evangadi-db",
//     host: "localhost",
//     password: "Cheerful@2323",
//     port: 5500,
//     connectionLimit:10
// })


// // // Test the connection (optional but useful)

// dbConnection.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to the database:", err.message);
//   } else {
//     console.log("Database connected successfully!");
//     connection.release(); // Release the connection back to the pool
//   }
// });

// module.exports = dbConnection.promise(); // Use promises to make queries async/await friendly