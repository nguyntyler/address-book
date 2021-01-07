const express = require("express");
const router = express.Router();

router
	.use("/", require("./home"))
	.use("/friend", require("./friend"))
	.use("/nickname", require("./nickname"));

module.exports = router;
