const mysql = require("mysql2");

// Creating MySQL Connections
const conn = mysql.createConnection({
    // using connection parameter through environmental variables
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// Checking for database connection
conn.connect((err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("connected");
    }
});

// export connection as module
module.exports = conn;