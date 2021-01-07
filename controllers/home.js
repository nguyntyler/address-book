const { layout } = require("../layout");
const { Addressbook } = require("../models");

const homepage = (req, res) => {
	res.render("home", {
		...layout,
		locals: {
			title: "Homepage",
		},
	});
};

module.exports = {
	homepage,
};
