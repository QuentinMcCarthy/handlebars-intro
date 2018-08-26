const express = require("express");

const router = express.Router();

router.get(`/`, function(req,res){
	// res.end(`/`);
	res.render(`home/index`, {
		title: `Handlebars Intro`,
		image: `http://placehold.it/300x300`,
		content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	});
});

module.exports = router;
