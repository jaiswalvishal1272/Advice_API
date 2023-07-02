const express = require("express");
const router = express.Router();
const getAdvice = require("../controller/adviceController")

router.route("/").get(getAdvice);

module.exports = router;
