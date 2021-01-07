const express = require("express");
const router = express.Router();

const { friendController } = require("../controllers");

router
	.get("/create", friendController.newFriendForm)
	.post("/create", friendController.processNewFriendForm)
	.get("/list", friendController.showFriends)
	.get("/list/:id", friendController.getInfo)
	.get("/:id/edit", friendController.editFriendForm)
	.post("/:id/edit", friendController.processEditFriendForm)
	.get("/:id/delete", friendController.deleteFriend);

module.exports = router;
