const conn = require("../config/dbConnection");

//@desc Get advice
//@route /
//@access public
const getAdvice = async (req, resp) => {
    // get a random ID
    const id = Math.floor(Math.random() * 10) + 1;
    // fetch the data from database
    conn.query("SELECT advice_data FROM advice_table WHERE id = ?", id, (err, data) => {
        if(err) resp.send(err);
        else resp.send(data);
    })
};

// Export getAdvice controller through module
module.exports = getAdvice;