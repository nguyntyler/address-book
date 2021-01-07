const { layout } = require("../layout");
const { Addressbook } = require("../models");
const { Nickname } = require("../models");

const nicknameForm = (req, res) => {
	res.render("nickname/form", {
		...layout,
		locals: {
			title: "Nickname",
		},
	});
};

const processNicknameForm = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const newNickname = await Nickname.create({
		name,
		fid: id,
	});
	res.redirect(`/friend/list/${id}`);
};

module.exports = {
	nicknameForm,
	processNicknameForm,
};
