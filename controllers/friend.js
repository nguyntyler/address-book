const { layout } = require("../layout");
const { Addressbook, Nickname } = require("../models");

const newFriendForm = (req, res) => {
	res.render("friend/form", {
		...layout,
		locals: {
			title: "Add Friend",
			which_form: "Add a New Friend!",
		},
	});
};

const processNewFriendForm = async (req, res) => {
	const { name, address, phone, email } = req.body;
	const newFriend = await Addressbook.create({
		name,
		address,
		phone,
		email,
	});

	res.redirect("/");
};

const showFriends = async (req, res) => {
	const friends = await Addressbook.findAll();
	res.render("friend/list", {
		...layout,
		locals: {
			title: "A List of Your Friends",
			friends,
		},
	});
};

const getInfo = async (req, res) => {
	const { id } = req.params;
	const friend = await Addressbook.findOne({
		where: {
			id,
		},
	});
	let nicknames = await Nickname.findAll({
		where: {
			fid: id,
		},
	});

	let hasNickname = true;
	if (nicknames.length === 0) {
		hasNickname = false;
	}

	console.log(`================= ${hasNickname}`);
	res.render("friend/info", {
		...layout,
		locals: {
			title: friend.name,
			friend,
			hasNickname: hasNickname ? "Nicknames" : "",
			nicknames,
		},
	});
};

const editFriendForm = async (req, res) => {
	const { id } = req.params;
	const friend = await Addressbook.findOne({
		where: {
			id,
		},
	});
	res.render("friend/editform", {
		...layout,
		locals: {
			title: "Edit Friend",
			friend,
			which_form: `Editing: ${friend.name}`,
		},
	});
};

const processEditFriendForm = async (req, res) => {
	const { id } = req.params;
	const { name, address, email, phone } = req.body;
	const updateFriend = await Addressbook.update(
		{
			name,
			address,
			email,
			phone,
		},
		{
			where: {
				id,
			},
		}
	);
	res.redirect("/friend/list");
};

const deleteFriend = async (req, res) => {
	const { id } = req.params;
	const delFriend = await Addressbook.destroy({
		where: {
			id,
		},
	});
	res.redirect("/friend/list");
};

module.exports = {
	newFriendForm,
	processNewFriendForm,
	showFriends,
	getInfo,
	editFriendForm,
	processEditFriendForm,
	deleteFriend,
};
