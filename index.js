const express = require("express");

const app = express();

app.get("/", (req, resp) => resp.send("This is the backend of Advice API"));

app.listen(5000, ()=> console.log("server is working fine"));
