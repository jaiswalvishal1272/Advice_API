const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sql.Nishal@101',
    database: 'projects'
});

conn.connect((err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("connected");
    }
});
conn.end();