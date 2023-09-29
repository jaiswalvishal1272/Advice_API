const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

// Creating express instance
const app = express();

// Defining port for server through environment variables
const port = process.env.PORT;

// Using Cors module
app.use(cors());

// Calling routes
app.use("/", require("./routes/adviceRoutes"));

// Calling HTTP server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});