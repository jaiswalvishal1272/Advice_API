const express = require("express");
const conn = require("./config");

const app = express();

// Get Random API Route
app.get("/", (req, resp) => {
    // get a random ID
    const id = Math.floor(Math.random() * 10) + 1;
    conn.query("SELECT ADVICE FROM advices WHERE ID = ?", id, (err, data) => {
        if(err) resp.send(err);
        else resp.send(data);
    })
});

app.listen(5000);
