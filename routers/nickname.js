const express = require("express");
const router = express.Router();

const { nicknameController } = require("../controllers");

router
	.get("/:id/create", nicknameController.nicknameForm)
	.post("/:id/create", nicknameController.processNicknameForm);

module.exports = router;
