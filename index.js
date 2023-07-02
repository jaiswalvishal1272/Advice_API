const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use("/", require("./routes/adviceRoutes"));

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});
