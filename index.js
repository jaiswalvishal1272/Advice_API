const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.use("/", require("./routes/adviceRoutes"));

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});
