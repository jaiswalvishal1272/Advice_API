const express = require("express");
const dotenv = require("dotenv").config();
const conn = require("./config/dbConnection");

const app = express();

const port = process.env.PORT;
// Get Random API Route
app.get("/", (req, resp) => {
    // get a random ID
    const id = Math.floor(Math.random() * 10) + 1;
    // fetch the data from database
    conn.query("SELECT ADVICE FROM advices WHERE ID = ?", id, (err, data) => {
        if(err) resp.send(err);
        else resp.send(data);
    })
});

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});
