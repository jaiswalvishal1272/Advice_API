const express = require("express");
const router = express.Router();
const getAdvice = require("../controller/adviceController")

// Calling getAdvice controller
router.route("/").get(getAdvice);

// Export the router as module
module.exports = router;