const express = require("express");

const router = express.Router();

router.get(`/`, function(req,res){
	// res.end(`/about`);
	res.render(`about/index`, {
		title: `About`,
		layout: `secondary`
	});
});

router.get(`/us`, function(req,res){
	// res.end(`/about/us`);
	res.render(`about/us`, {
		title: `About Us`
	});
});

router.get(`/product`, function(req,res){
	// res.end(`/about/product`);
	res.render(`about/product`, {
		title: `About the Product`
	});
});

module.exports = router;
