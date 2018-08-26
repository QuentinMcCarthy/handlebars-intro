const express = require("express");

const router = express.Router();

router.get(`/`, function(req,res){
	// res.end(`/`);
	res.render(`home/index`, {
		title: `Handlebars Intro`
	});
});

module.exports = router;
